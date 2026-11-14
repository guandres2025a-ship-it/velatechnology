import ContentPage from "../../components/layout/ContentPage";

export default function ProyectosPage() {
  return <ContentPage number="03" eyebrow="IDEAS EN ACCIÓN" title="Las ideas toman" highlight="forma aquí." intro="Este espacio reúne proyectos, experimentos y soluciones que muestran cómo una visión puede convertirse en una experiencia real. Estamos construyendo nuestro catálogo de proyectos." items={[
    {number:"01",title:"Experiencias digitales",text:"Productos e interfaces que acercan servicios, información y personas."},
    {number:"02",title:"Sistemas conectados",text:"Herramientas y plataformas diseñadas para resolver necesidades concretas."},
    {number:"03",title:"Nuevas posibilidades",text:"Exploraciones donde creatividad y tecnología se encuentran para abrir caminos."}
  ]} closing="¿Tienes un reto que merece convertirse en proyecto? Nos encantará conocerlo." />;
}