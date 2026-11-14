import ContentPage from "../../components/layout/ContentPage";

export default function SolucionesPage() {
  return <ContentPage number="02" eyebrow="CAPACIDADES VELA" title="Tecnología para" highlight="hacerlo posible." intro="Diseñamos soluciones que responden a desafíos reales. Combinamos visión, diseño y desarrollo para transformar procesos y crear nuevas experiencias." items={[
    {number:"01",title:"Estrategia y experiencias digitales",text:"Definimos oportunidades y diseñamos experiencias digitales claras, intuitivas y centradas en las personas."},
    {number:"02",title:"Desarrollo de software",text:"Creamos plataformas, productos y herramientas digitales a la medida de cada reto y preparadas para evolucionar."},
    {number:"03",title:"Inteligencia artificial",text:"Integramos inteligencia artificial y automatización para conectar información, simplificar tareas y potenciar decisiones."}
  ]} closing="Cada desafío es distinto. La solución correcta comienza por entender qué quieres transformar." />;
}