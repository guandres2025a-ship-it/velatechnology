import ContentPage from "../../components/layout/ContentPage";

export default function UniversoPage() {
  return <ContentPage number="01" eyebrow="EL UNIVERSO VELA" title="Todo comienza" highlight="con una conexión." intro="VELA nace de la convicción de que las grandes transformaciones suceden cuando las ideas, las personas y la tecnología encuentran su punto de encuentro." items={[
    {number:"01",title:"Nuestra visión",text:"Imaginamos un futuro donde la tecnología amplifica el potencial humano y abre caminos que antes parecían imposibles."},
    {number:"02",title:"Nuestra esencia",text:"Somos curiosidad, pensamiento estratégico y creatividad aplicada. Nos mueve convertir preguntas complejas en oportunidades."},
    {number:"03",title:"Nuestra constelación",text:"Cada estrella representa una posibilidad. Cada conexión, una nueva forma de crear valor y llevar una idea más lejos."}
  ]} closing="No se trata solo de tecnología. Se trata de todo lo que podemos hacer cuando conectamos las piezas correctas." />;
}