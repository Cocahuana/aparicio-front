import ServiciosHeader from "../ServiciosHeader";
import cassetteImg from "./assets/cassette_aire_acondicionado.jpg";
import vrvImg from "./assets/VRV_aire_acondicionado.jpg";
import pisoTechoImg from "./assets/pisotecho_aire_acondicionado.jpg";
import ServiciosCards from "../ServiciosCards";
function InstalacionEquiposAC() {
	const title = "INSTALACIÓN DE EQUIPOS DE AIRE ACONDICIONADO";
	const text =
		"Realizamos instalación de equipos de aire acondicionado de todo tipo: en viviendas, comercios, talleres, industriales, cámaras frigoríficas. Ofrecemos asesoramiento en la compra de equipos de acuerdo al balance térmico del lugar y la ubicación más adecuada para que tenga un mejor rendimiento.";

	const equipos = [
		{
			img: cassetteImg,
			alt: "Aire acondicionado Cassete",
			title: "CASSETTE",
			description:
				"Las unidades de aire acondicionado cassette son un tipo de unidad terminal carrozada para instalación  en techo. Los podemos encontrar en diferentes instalaciones, aunque la más habitual son: oficinas, locales comerciales, bares, restaurantes.",
		},
		{
			img: pisoTechoImg,
			alt: "Aire acondicionado Piso techo",
			title: "PISO TECHO",
			description:
				"La función de un aire acondicionado split piso techo es la misma que la de cualquier aire acondicionado split, pero con la diferencia de que a este se lo puede instalar de manera tanto vertical como horizontal.",
		},
		{
			img: vrvImg,
			alt: "Aire acondicionado VRV",
			title: "VRV",
			description:
				"Los sistemas VRF o VRV, son sistemas de climatización de gran eficiencia idóneos para la climatización de edificios y grandes locales comerciales ya que permiten regular el flujo de aire que se envía desde una misma unidad exterior a distintas unidades interiores, adaptándose a la demanda de cada unidad interior.",
		},
	];
	return (
		<>
			<ServiciosHeader title={title} text={text} />
			<ServiciosCards content={equipos} />
		</>
	);
}

export default InstalacionEquiposAC;
