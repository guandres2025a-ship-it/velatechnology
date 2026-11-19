"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import styles from "./HeroUniverse.module.css";

type FieldKind = "stars" | "galaxy" | "clusters";

function seededRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function createField(kind: FieldKind, count: number) {
  const random = seededRandom(kind === "stars" ? 41 : kind === "galaxy" ? 83 : 127);
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const alphas = new Float32Array(count);
  const colors = new Float32Array(count * 3);
  const palette = kind === "galaxy"
    ? [new THREE.Color("#385b91"), new THREE.Color("#62518b"), new THREE.Color("#347e91")]
    : [new THREE.Color("#6f8fb9"), new THREE.Color("#a8b9d1"), new THREE.Color("#7180aa")];

  for (let i = 0; i < count; i++) {
    let x = 0;
    let y = 0;
    let z = 0;

    if (kind === "stars") {
      x = (random() - 0.5) * 42;
      y = (random() - 0.5) * 25;
      z = -8 - random() * 92;
    } else if (kind === "clusters") {
      const centers = [[4.5, 3.2, -24], [8.5, -3.5, -36], [1.2, -4.8, -29], [10.5, 4.2, -48]];
      const center = centers[Math.floor(random() * centers.length)];
      const spread = 0.5 + random() * 2.8;
      x = center[0] + (random() + random() + random() - 1.5) * spread;
      y = center[1] + (random() + random() + random() - 1.5) * spread;
      z = center[2] + (random() - 0.5) * 9;
    } else {
      // Four loose filaments bend through space and converge near VELA.
      const filament = i % 4;
      const t = random();
      const anchors = [
        [-15, 8, -72], [20, 10, -83], [-13, -10, -66], [20, -8, -76],
      ];
      const anchor = anchors[filament];
      const endX = 5.2;
      const endY = 0.2;
      const bend = Math.sin(t * Math.PI * 2 + filament * 1.4) * (2.2 + random() * 1.8);
      x = anchor[0] * (1 - t) + endX * t + bend * (1 - t);
      y = anchor[1] * (1 - t) + endY * t + Math.cos(t * Math.PI * 2 + filament) * 2.1 * (1 - t);
      z = anchor[2] * (1 - t) - 18 * t + (random() - 0.5) * 5;
      const width = (random() - 0.5) * (1.2 + t * 1.2);
      x += width;
      y += width * 0.65;
    }

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    sizes[i] = kind === "stars" ? 0.55 + random() * 1.5 : kind === "clusters" ? 0.7 + random() * 1.4 : 0.45 + random() * 0.9;
    alphas[i] = kind === "galaxy" ? 0.18 + random() * 0.42 : kind === "clusters" ? 0.24 + random() * 0.5 : 0.22 + random() * 0.62;
    const color = palette[Math.floor(random() * palette.length)];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute("aAlpha", new THREE.BufferAttribute(alphas, 1));
  geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
  return geometry;
}

const vertexShader = `
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  varying float vAlpha;
  varying vec3 vColor;
  uniform float uPixelRatio;
  uniform float uTime;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    float depthScale = clamp(34.0 / max(8.0, -mvPosition.z), 0.35, 2.1);
    gl_PointSize = aSize * depthScale * uPixelRatio;
    gl_Position = projectionMatrix * mvPosition;
    vAlpha = aAlpha * (0.92 + 0.08 * sin(uTime * 0.35 + position.x * 1.7));
    vColor = aColor;
  }
`;

const fragmentShader = `
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float d = length(p);
    float core = 1.0 - smoothstep(0.02, 0.5, d);
    float halo = smoothstep(0.5, 0.12, d) * 0.18;
    float alpha = (core + halo) * vAlpha;
    if (alpha < 0.015) discard;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

function PointLayer({ kind, count }: { kind: FieldKind; count: number }) {
  const geometry = useMemo(() => createField(kind, count), [kind, count]);
  const material = useMemo(() => new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    vertexShader,
    fragmentShader,
    uniforms: {
      uPixelRatio: { value: 1.0 },
      uTime: { value: 0 },
    },
  }), []);

  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  useEffect(() => () => {
    geometry.dispose();
    material.dispose();
  }, [geometry, material]);

  return (
    <points geometry={geometry} material={material} />
  );
}

function Nebula() {
  const material = useMemo(() => new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform float uTime;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p); vec2 f = fract(p);
        f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x),
                   mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0; float a = 0.5;
        for (int i=0; i<4; i++) { v += noise(p)*a; p *= 2.02; a *= 0.5; }
        return v;
      }
      void main() {
        vec2 uv = vUv;
        vec2 field = uv * vec2(3.0, 2.1);
        field += vec2(uTime * 0.004, -uTime * 0.002);
        float n = fbm(field * 3.0 + vec2(0.4, 0.2));
        float cloud = smoothstep(0.43, 0.82, n);
        float rightFocus = smoothstep(0.25, 0.95, uv.x) * (1.0 - smoothstep(0.0, 0.88, abs(uv.y - 0.52)));
        float leftFade = smoothstep(0.12, 0.55, uv.x);
        vec3 navy = vec3(0.027, 0.075, 0.14);
        vec3 violet = vec3(0.20, 0.16, 0.39);
        vec3 cyan = vec3(0.07, 0.25, 0.34);
        vec3 color = mix(navy, violet, cloud * 0.62);
        color = mix(color, cyan, smoothstep(0.57, 0.9, n) * 0.38);
        float alpha = cloud * rightFocus * leftFade * 0.38;
        gl_FragColor = vec4(color, alpha);
      }
    `,
  }), []);

  useFrame(({ clock }) => { material.uniforms.uTime.value = clock.elapsedTime; });
  useEffect(() => () => material.dispose(), [material]);

  return (
    <mesh position={[0, 0, -68]} scale={[48, 28, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}

function Meteor({ delay = 0 }: { delay?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const material = useMemo(() => new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uOpacity: { value: 0 } },
    vertexShader: `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform float uOpacity;
      void main() {
        float head = smoothstep(0.0, 0.24, vUv.x) * (1.0 - smoothstep(0.72, 1.0, vUv.x));
        float tail = pow(vUv.x, 1.7);
        float width = smoothstep(0.0, 0.45, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y));
        float a = max(head * 0.8, tail * 0.38) * width * uOpacity;
        gl_FragColor = vec4(0.55, 0.75, 0.94, a);
      }
    `,
  }), []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const cycle = (clock.elapsedTime - delay + 19) % 19;
    const progress = cycle / 0.85;
    const visible = cycle < 0.85;
    ref.current.visible = visible;
    if (visible) {
      ref.current.position.set(12 - progress * 25, 7 - progress * 13, -12 - delay * 2);
      material.uniforms.uOpacity.value = Math.sin(progress * Math.PI) * 0.62;
    } else {
      material.uniforms.uOpacity.value = 0;
    }
  });

  useEffect(() => () => material.dispose(), [material]);
  return (
    <mesh ref={ref} rotation={[0, 0, -0.48]} scale={[3.2, 0.045, 1]} material={material}>
      <planeGeometry args={[1, 1]} />
    </mesh>
  );
}

function SupernovaPulse() {
  const ring = useMemo(() => new THREE.Mesh(
    new THREE.RingGeometry(0.92, 1, 96),
    new THREE.MeshBasicMaterial({ color: "#d8bb7a", transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }),
  ), []);

  useFrame(({ clock }) => {
    const progress = Math.min(clock.elapsedTime / 2.15, 1);
    ring.scale.setScalar(0.25 + progress * 8.5);
    (ring.material as THREE.MeshBasicMaterial).opacity = progress < 1 ? Math.sin(progress * Math.PI) * 0.12 : 0;
  });

  useEffect(() => () => {
    ring.geometry.dispose();
    (ring.material as THREE.Material).dispose();
  }, [ring]);

  return <primitive object={ring} position={[5.2, 0.15, -8]} />;
}

function CameraDrift({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  useFrame(({ camera }) => {
    camera.position.x += (pointer.current.x * 0.24 - camera.position.x) * 0.018;
    camera.position.y += (pointer.current.y * 0.16 - camera.position.y) * 0.018;
  });
  return null;
}

function Scene({ mobile, reducedMotion }: { mobile: boolean; reducedMotion: boolean }) {
  const counts = mobile
    ? { stars: 2600, galaxy: 2800, clusters: 550 }
    : { stars: 8500, galaxy: 10500, clusters: 1800 };

  return (
    <>
      <Nebula />
      <PointLayer kind="galaxy" count={counts.galaxy} />
      <PointLayer kind="clusters" count={counts.clusters} />
      <PointLayer kind="stars" count={counts.stars} />
      {!reducedMotion && <><Meteor delay={2.5} /><Meteor delay={11} /><SupernovaPulse /></>}
    </>
  );
}

export default function HeroUniverse() {
  const [mobile, setMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 720px), (pointer: coarse)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setMobile(mobileQuery.matches);
      setReducedMotion(motionQuery.matches);
    };
    update();
    mobileQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    const hero = document.getElementById("inicio");
    const handlePointer = (event: PointerEvent) => {
      if (!hero || mobileQuery.matches) return;
      const rect = hero.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      pointer.current.x = inside ? Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2)) : 0;
      pointer.current.y = inside ? -Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2)) : 0;
    };
    window.addEventListener("pointermove", handlePointer);
    const observer = hero ? new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.02 }) : null;
    if (hero && observer) observer.observe(hero);
    return () => {
      window.removeEventListener("pointermove", handlePointer);
      mobileQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className={styles.universeRoot} aria-hidden="true">
      <div className={styles.staticAtmosphere} />
      <Canvas
        camera={{ position: [0, 0, 12], fov: 48, near: 0.1, far: 180 }}
        dpr={mobile ? 1 : [1, 1.35]}
        frameloop={visible && !reducedMotion ? "always" : "never"}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        fallback={<div className={styles.staticAtmosphere} />}
      >
        <CameraDrift pointer={pointer} />
        <Scene mobile={mobile} reducedMotion={reducedMotion} />
      </Canvas>
      <div className={styles.vignette} />
      <div className={styles.horizon} />
    </div>
  );
}
