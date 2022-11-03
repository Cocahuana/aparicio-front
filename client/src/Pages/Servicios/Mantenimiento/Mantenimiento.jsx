import React from "react";
import refrigeranteImg from "./assets/carga_refrigerante_automotriz.jpg";
import heladeraImg from "./assets/carga_refrigerante_heladera.jpg";
import mantenimientoSplitImg from "./assets/mantenimiento_split.png";
import ServiciosHeader from "../ServiciosHeader";
import ServiciosCards from "../ServiciosCards";
function Mantenimiento() {
	const title = "MANTENIMIENTO DE EQUIPOS DE AIRE ACONDICIONADO Y HELADERAS";
	const text = [
		{
			text: "Mantenimiento de equipos de aire acondicionado en viviendas, comercios, industriales, cámaras frigoríficas.",
		},
		{
			text: "Limpieza unidad interior, unidad exterior, control de presiones, rendimiento del compresor.",
		},
	];
	const equipos = [
		{
			img: mantenimientoSplitImg,
			alt: "AIRE ACONDICIONADO SPLIT",
			title: "AIRE ACONDICIONADO SPLIT",
			description:
				"Se realiza un chequeo general del equipo, se busca la pérdida, se repara y luego se realiza la carga de acuerdo al gas refrigerante que lleva el equipo, ya sea R22 como R410a.",
		},
		{
			img: refrigeranteImg,
			alt: "AIRE ACONDICIONADO AUTOMOTRIZ",
			title: "AIRE ACONDICIONADO AUTOMOTRIZ",
			description:
				"Antes de realizar la carga del gas refrigerante, es importante hallar y reparar la pérdida. También procedemos a realizar el cambio de los óvulos y luego se realiza la carga.",
		},
		{
			img: heladeraImg,
			alt: "HELADERAS",
			title: "HELADERAS",
			description:
				"Procedemos a realizar un chequeo general de la heladera, reparamos la pérdida y la carga de gas refrigerante de la misma.",
		},
	];
	return (
		<>
			<ServiciosHeader title={title} content={text} />
			<ServiciosCards content={equipos} />
		</>
	);
}

export default Mantenimiento;
