import ContentPage from "../../components/layout/ContentPage";

export default function IdeasPage() {
  return <ContentPage number="05" eyebrow="PENSAMIENTO EN MOVIMIENTO" title="Una idea puede" highlight="cambiarlo todo." intro="Exploramos preguntas, tendencias y conexiones entre tecnología, creatividad y futuro. Las ideas crecen cuando se comparten." items={[
    {number:"01",title:"Explorar",text:"Miramos más allá de lo evidente para descubrir nuevas oportunidades."},
    {number:"02",title:"Cuestionar",text:"Nos hacemos mejores preguntas para encontrar respuestas con sentido."},
    {number:"03",title:"Conectar",text:"Compartimos perspectivas que pueden convertirse en nuevas posibilidades."}
  ]} closing="El próximo gran proyecto puede comenzar con una conversación." />;
}