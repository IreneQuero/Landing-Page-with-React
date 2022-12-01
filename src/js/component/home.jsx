import React from "react";

import Footer from "./Footer.jsx";
import Cards from "./Cards.jsx";
import Jumbotron from "./Jumbotron.jsx";
import NavBar from "./NavBar.jsx";


//create your first component
const Home = () => {
	return (
		<div className="bg-light">
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row row-cols-md-4 d-flex justify-content-between mt-5 mb-5">
				<Cards image= "https://media.istockphoto.com/id/1277541723/es/foto/lady-ryder-de-varsovia-rica-rosas-rojas-carmes%C3%AD-arbusto-brit%C3%A1nico-moderno-por-harkness.jpg?s=612x612&w=0&k=20&c=A6lNjRIqSjEMh0ZMv8ba2OWLJebcFbYI1cJ1HceIr9w="title= "Rosas rojas" description= "El amor tiene muchas y muy diferentes formas de representación en el mundo de las flores. Las rosas son las indiscutibles reinas de este sentimiento pero ¿Sabías que las rosas representan el sentimiento de “juntos para siempre”?"/>
				<Cards image= "https://plantarum.es/wp-content/uploads/2021/11/emociones-flor-violeta-1536x1024.jpg" title= "Hortensias" description= "Las hortensias hacen que las personas estén en armonía con ellas mismas y se estabilicen emocionalmente.  Las flores violetas calman estados de nerviosismo, aporta una mejora en el estado de ánimo consiguiendo la relajación y el aumento  de confianza."/>
				<Cards image= "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/calendula.jpg" title= "Caléndulas" description="Las caléndulas son conocidas por crear una sensación de calidez, alegría y vitalidad. Las flores naranjas son beneficiosas para la energía de las personas ya que ayudan a que la gente se sienta activa, a que su fuerza física aumente y a aliviar problemas emocionales." />
				<Cards image= "http://1.bp.blogspot.com/-xlfMdb8RNvk/UEoxC0bi3NI/AAAAAAAAI4U/bdDa1Hh63z4/s1600/Jazmin+(8).JPG" title= "Jazmín" description="¿Quieres un embriagante olor en casa? La respuesta es el jazmín. Genera entornos de paz y aportan tranquilidad al estado de ánimo de las personas. El color blanco representa pureza y transmite calma además de aportar luz y frescura a aquellos espacios más apagados. "/>
				</div>
			</div>
			<Footer />
			
		</div>
	);
};

export default Home;
