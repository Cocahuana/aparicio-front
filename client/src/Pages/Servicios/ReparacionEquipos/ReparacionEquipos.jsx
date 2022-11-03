import React from "react";
import splitImg from "./assets/reparacion_split.jpg";
import heladeraImg from "./assets/carga_refrigerante_heladera.jpg";
import automotrizImg from "./assets/reparacion_automotor.jpeg";
import ServiciosCards from "../ServiciosCards";
import ServiciosHeader from "../ServiciosHeader";
function ReparacionEquipos() {
	const title = "REPARACIÓN DE EQUIPOS DE AIRE ACONDICIONADO";
	const text = [
		{
			text: "Realizamos la reparación de equipos de aire acondicionado familiar, comercial e industrial, automotriz",
		},
	];

	const equipos = [
		{
			img: splitImg,
			alt: "AIRE ACONDICIONADO SPLIT",
			title: "AIRE ACONDICIONADO SPLIT",
			description:
				"Realizamos la reparación de equipos de aire acondicionado, cambio de motor, plaqueta electrónica, forzadores, evaporador.",
		},
		{
			img: automotrizImg,
			alt: "AIRE ACONDICIONADO AUTOMOTRIZ",
			title: "AIRE ACONDICIONADO AUTOMOTRIZ",
			description:
				"Cambio de compresor, óvulos, pérdidas de gas refrigerante, cambio o reparación de mangueras, engranfados, correas, evaporador.",
		},
		{
			img: heladeraImg,
			alt: "HELADERAS",
			title: "HELADERAS",
			description:
				"Revisón completa del sistema, cambio de compresor, plaqueta electrónica, sensores, evaporador, cañerías, bimetálico, burletes, resistencia de descongelamiento.",
		},
	];
	return (
		<>
			<ServiciosHeader title={title} content={text} />
			<ServiciosCards content={equipos} />
		</>
	);
}

export default ReparacionEquipos;
