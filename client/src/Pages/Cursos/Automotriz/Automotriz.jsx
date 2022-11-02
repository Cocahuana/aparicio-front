import {CardGroup, Card} from "react-bootstrap";
import automotrizImg from "./assets/curso_automotriz.png";
function Automotriz() {
	const temarios1 = [
		{
			text: "• CUIDADO DEL MEDIO AMBIENTE.",
		},
		{
			text: "• AGOTAMIENTO DE LA CAPA DE OZONO.",
		},
		{
			text: "• CALENTAMIENTO GLOBAL.",
		},
		{
			text: "•  EFECTO INVERNADERO.",
		},
		{
			text: "• ESTACION DE CARGA.",
		},
		{
			text: "• BUENAS PRACTICAS EN ESTE OFICIO DE LA REFRIGERACION.  DIFERENCIAS ENTRE REFRIGERACION Y AIRE ACONDICIONADO  CAMBIOS DE ESTADO DE LA MATERIA.",
		},
		{
			text: "• PRESION ABSOLUTA, RELATIVA, VACIO. CALOR SENSIBLE, CALOR.",
		},
		{
			text: "• ENERGIA TERMICA.",
		},
		{
			text: "•  MODOS DE TRANSFERIR EL CALOR.",
		},
		{
			text: "• PRINCIPIO BASICO DE LA REFRIGERACION.",
		},
		{
			text: "• DESCRIPCION Y FUNCION DE CADA COMPONENTE EN UN CIRCUITO FRIGORIFICO.",
		},
		{
			text: "• TIPOS DE GASES REFRIGERANTES, SEGURIDAD EN EL MANEJO Y ESTIBA.",
		},
		{
			text: "• REGULACION DEL CABEZAL DE N2 PARA PRESURIZAR, AISLACIONES. ANTIPOLEN.",
		},
		{
			text: "• POSIBLES FALLAS DE ELECTRICIDAD Y EFICIENCIA.",
		},
		{
			text: "• SUCIEDAD, HUMEDAD Y SUS CONSECUENCIAS.",
		},
	];
	const temarios2 = [
		{
			text: "•  TENSION Y LARGO DE CORREAS, SULFATOS, ETC.",
		},
		{
			text: "• DESCRIPCION Y USO DE MANIFOLD, DETECTOR DE FUGAS. USO DE TABLA.",
		},
		{
			text: "•  LUBRICANTES: CANTIDADES, REEMPLAZOS, DEGRADACION DE LOS ACEITES. AISLACION TERMICA. RETROFIT..",
		},
		{
			text: "• DESARME Y ARMADO DE MANGUERAS (ENGRANFADO).",
		},
		{
			text: "• VACIO, TRIPLE VACIO.",
		},
		{
			text: "• CARGA DE GAS REFRIGERANTE AUTOMOTRIZ. (R1234 y NUEVAS TENDENCIAS).",
		},
		{
			text: "• SOBRECALENTAMIENTO.",
		},
		{
			text: "• PRUEBA DE RENDIMIENTO DE COMPRESORES.",
		},
		{
			text: "•  CONEXIÓN ELECTRICA 12VCC, SEÑALES ENTRE COMPUTADORA Y SISTEMA. RELAY BOBINAS, EMBRAGUE, INTERRUPTORES DE ELECTROVENTILADORES Y FORZADORES.",
		},
		{
			text: "•  OMO DESINSTALAR VALVULA EXPANSORA BLOCK E IDENTIFICACION DE VALVULAS DE SERVICIO, OVULOS, ORIN´G, CONEXIONES SPRINGBLOCK.",
		},
		{
			text: "• REEMPLAZO DE FILTROS, TUBO DESHIDRATADOR Y ELEMENTO DE EXPANSION. MANTENIMIENTOS. PRACTICAS REALES SOBRE DISTINTOS VEHICULOS.",
		},
	];
	const cursoSplit = [
		{
			img: automotrizImg,
			alt: "...",
			title: "CURSO DE AIRE ACONDICIONADO AUTOMOTRIZ",
			text: `
                Aprenderás a instalar, reparar y realizar mantenimiento en viviendas, 
                comercios y sistemas de refrigeración para transportes, camionetas, 
                camiones y semi.
            `,
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

export default Automotriz;
