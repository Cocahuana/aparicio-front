import React from "react";
import cargaAutomtrizImg from "./assets/carga_refrigerante_automotriz.jpg";
import cargaHeladeraImg from "./assets/carga_refrigerante_heladera.jpg";
import cargaSplitImg from "./assets/carga_refrigerante_split.jpg";
import ServiciosCards from "../ServiciosCards";
import ServiciosHeader from "../ServiciosHeader";
function CargaDeGasRefrigerante() {
	const title = "CARGA DE GAS REFRIGERANTE";
	const text = [
		{
			text: "Carga de gas refrigerante de equipos de aire acondicionado en viviendas, comercios, talleres, industriales, cámaras frigoríficas. Es fundamental encontrar la pérdida por donde se ha fugado el gas, antes de realizar la carga.",
		},
	];

	const equipos = [
		{
			img: cargaAutomtrizImg,
			alt: "AIRE ACONDICIONADO SPLIT",
			title: "AIRE ACONDICIONADO SPLIT",
			description:
				"Se realiza un chequeo general del equipo, se busca la pérdida, se repara y luego se realiza la carga de acuerdo al gas refrigerante que lleva el equipo, ya sea R22 como R410a.",
		},
		{
			img: cargaHeladeraImg,
			alt: "Aire acondicionado Piso techo",
			title: "HELADERAS",
			description:
				"Procedemos a realizar un chequeo general de la heladera, reparamos la pérdida y la carga de gas refrigerante de la misma.",
		},
		{
			img: cargaSplitImg,
			alt: "AIRE ACONDICIONADO AUTOMOTRIZ",
			title: "AIRE ACONDICIONADO AUTOMOTRIZ",
			description:
				"Antes de realizar la carga del gas refrigerante, es importante hallar y reparar la pérdida. También procedemos a realizar el cambio de los óvulos y luego se realiza la carga.",
		},
	];
	return (
		<>
			<ServiciosHeader title={title} content={text} />
			<ServiciosCards content={equipos} />
		</>
	);
}

export default CargaDeGasRefrigerante;
