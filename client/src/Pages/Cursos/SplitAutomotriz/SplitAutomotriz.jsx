import React from "react";
import {CardGroup, Card} from "react-bootstrap";
import splitAutomotrizImg from "./assets/curso_split_automotiz.png";
function SplitAutomotriz() {
	const temarios1 = [
		{
			text: "• PRINCIPIOS BÁSICOS DE REFRIGERACIÓN Y AIRE ACONDICIONADO.",
		},
		{
			text: "• TEORÍAS, SEGURIDAD, Y BUENAS PRÁCTICAS.",
		},
		{
			text: "• MÉTODO DE INSTALACIÓN Y DESINSTALACIÓN.",
		},
		{
			text: "• MANTENIMIENTO Y CONTROL: PREVENTIVOS-CORRECTIVOS.",
		},
		{
			text: "• ENGRANFADO: ARMADO DE MANGUERAS Y CIRCUITO ELÉCTRICO DE AIRE ACONDICIONADO AUTOMOTRIZ.",
		},
	];
	const temarios2 = [
		{
			text: "• ESTRATEGIAS E IDENTIFICACIÓN DE FALLAS EN SPLIT.",
		},
		{
			text: "• PREINSTALACIONES: INSTALACIONES SPLIT EMBUTIDOS.",
		},
		{
			text: "• USO Y MEDICIÓN CON MULTÍMETRO, CAPACÍMETROS, DETECTORES DE FALLAS ALFA NUMÉRICA.",
		},
		{
			text: "• MUCHOS TEMAS MÁS.",
		},
	];
	const cursoSplitAutomotriz = [
		{
			img: splitAutomotrizImg,
			alt: "...",
			title: "CURSO DE AIRE ACONDICIONADO SPLIT Y AUTOMOTRIZ",
			text: "Aprenderás a instalar, reparar y realizar mantenimiento en viviendas, comercios y sistemas de refrigeración para transportes, camionetas, camiones y semi.",
		},
	];
	return (
		<>
			<div className='container marketing'>
				<div className='card mt-3'>
					<div className='row g-0'>
						{cursoSplitAutomotriz.map((curso) => (
							<>
								<div className='col-md-6'>
									<img
										src={curso.img}
										className='img-fluid rounded-start'
										alt={curso.alt}
									/>
								</div>
								<div className='col-md-6'>
									<div className='card-body mt-3'>
										<h5 className='card-title'>
											{curso.title}
										</h5>
										<p className='card-text mt-5'>
											{curso.text}
										</p>
									</div>
								</div>
							</>
						))}
					</div>
				</div>

				<div className='card mt-5 border-primary'>
					<div className='card-header text-primary text-center border-primary'>
						<strong>TEMARIO</strong>
					</div>
					<CardGroup>
						<Card>
							{temarios1.map((tema) => (
								<Card.Body>
									<Card.Text>{tema.text}</Card.Text>
								</Card.Body>
							))}
						</Card>
						<Card>
							{temarios2.map((tema) => (
								<Card.Body>
									<Card.Text>{tema.text}</Card.Text>
								</Card.Body>
							))}
						</Card>
					</CardGroup>
				</div>
			</div>
		</>
	);
}

export default SplitAutomotriz;
