import ContentPage from "../../components/layout/ContentPage";

export default function EnfoquePage() {
  return <ContentPage number="04" eyebrow="NUESTRA FORMA DE TRABAJAR" title="Conectar para" highlight="crear valor." intro="Un buen resultado no aparece por accidente. Es el resultado de escuchar, cuestionar, diseñar y construir con intención." items={[
    {number:"01",title:"Entender",text:"Escuchamos, investigamos y definimos el desafío antes de elegir cualquier herramienta."},
    {number:"02",title:"Diseñar",text:"Convertimos hallazgos en una dirección clara, una experiencia coherente y un plan viable."},
    {number:"03",title:"Construir",text:"Desarrollamos, probamos y mejoramos soluciones que puedan crecer junto a las personas y organizaciones."}
  ]} closing="Un proceso flexible, colaborativo y enfocado en lograr algo que realmente importe." />;
}