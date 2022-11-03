import {CardGroup, Card} from "react-bootstrap";
import heladeraImg from "./assets/curso_heladera.jpeg";
function Heladeras() {
	const temarios1 = [
		{
			text: "• Contaminación ambiental, calentamiento global, buenas prácticas.",
		},
		{
			text: "• Introducción en heladeras y   equipos frigoríficos.",
		},
		{
			text: "• Qué diferencia existe entre los sistemas de refrigeración.",
		},
		{
			text: "• Fundamentos y principios de sus partes.",
		},
		{
			text: "• Manejo de instrumental y herramientas varias, ejemplo:  tester, pinza amperométrica; circuito serie, kit de arranque, capacímetro y secuenciador de fase.",
		},
		{
			text: "• Diagnóstico en heladeras convencionales no frost y equipos comerciales.",
		},
		{
			text: "• Identificación de termistores ntc y ptc identificación de fallas en placas electrónicas, chequeos de sistema.",
		},
		{
			text: "• De descongelado electrónico y electromecánico: Identificar y conectar terminales de Taimer y termostatos.",
		},
		{
			text: "• Prácticas sobre heladeras y circuitos.",
		},
		{
			text: "• Motores, compresores, chequeo a masa o a tierra, chequeo de bobinas.",
		},
		{
			text: "• Prueba de rendimiento.",
		},
		{
			text: "• Relación de compresión.",
		},
	];
	const temarios2 = [
		{
			text: "• Gases refrigerantes, puros, mezclas.",
		},
		{
			text: "• Gases refrigerantes inflamables r600 a r290.",
		},
		{
			text: "• Búsqueda de fuga, limpieza del sistema",
		},
		{
			text: "• Selección del tubo capilar.",
		},
		{
			text: "• Carga de gas por masa y sobrecalentamiento.",
		},
		{
			text: "• Heladera comercial, identificación de sus partes, sistemas de protección, termostato y combistato",
		},
		{
			text: "• Automatización de contactores, relevos térmicos, guardamotor, relay de comando",
		},
		{
			text: "• Motores herméticos y semiherméticos, identificación por código potencia y capacitores",
		},
		{
			text: "• Medición motores trifásicos y monofásicos",
		},
		{
			text: "• Relé amperométrico y voltimétrico",
		},
		{
			text: "• Armado de chiller básico",
		},
		{
			text: "• Introducción a semi cámaras y cuartos fríos",
		},
	];
	const cursoSplit = [
		{
			img: heladeraImg,
			alt: "Aparicio dando clases",
			title: "CURSO DE HELADERAS",
			text: "Aprenderás a instalar, reparar y realizar mantenimiento de heladeras comerciales y familiares, cíclicas y no frost.",
		},
	];
	return (
		<>
			<div className='container marketing'>
				<div className='card mt-3'>
					<div className='row g-0'>
						{cursoSplit.map((curso) => (
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
									<Card.Text>
										{tema.text}
									</Card.Text>
								</Card.Body>
							))}
						</Card>

						<Card>
							{temarios2.map((tema) => (
								<Card.Body>
									<Card.Text>
										{tema.text}
									</Card.Text>
								</Card.Body>
							))}
						</Card>
					</CardGroup>
				</div>
			</div>
		</>
	);
}

export default Heladeras;
