import CenteredSectionTitle from "../../../components/CenteredSectionTitle/CenteredSectionTitle";
import FeatureDivider from "../../../components/FeatureDivider/FeatureDivider";
import carga_de_gasImg from "./assets/carga_de_gas.png";
import instalacion_de_aireImg from "./assets/instalacion_de_aire.jpg";
import mantenimientoImg from "./assets/mantenimiento.jpg";
import {Card, Col, Button, Row} from "react-bootstrap";

function NuestrosServiciosSection() {
	const SERVICIOS = [
		{
			img: instalacion_de_aireImg,
			alt: "Servicio: instalacion de aire",
			title: "Instalación de equipos de aire acondicionado",
			buttonText: "Más información",
			link: "/Páginas/Servicios/instalación.aspx",
		},
		{
			img: mantenimientoImg,
			alt: "Servicio: instalacion de aire",
			title: "Mantenimiento de equipos de aire acondicionado",
			buttonText: "Más información",
			link: "/Páginas/Servicios/mantenimiento.aspx",
		},
		{
			img: carga_de_gasImg,
			alt: "Servicio: instalacion de aire",
			title: "Carga de gas refrigerante",
			buttonText: "Más información",
			link: "/Páginas/Servicios/carga_refrigerante.aspx",
		},
	];
	return (
		<>
			<CenteredSectionTitle title='ALGUNOS DE NUESTROS SERVICIOS' />

			<Row className='pt-5 pb-5' style={{backgroundColor: "#f0f3f6"}}>
				{SERVICIOS.map((servicio) => (
					<Col>
						<Card className='h-100'>
							<Card.Img
								variant='top'
								src={servicio.img}
								alt={servicio.alt}
							/>
							<Card.Body
								className='text-center'
								style={{
									display: "flex",
									flexGrow: "1",
									flexDirection: "column",
									justifyContent: "space-between",
								}}>
								<Card.Title>{servicio.title}</Card.Title>
								<Button variant='primary'>
									{servicio.buttonText}
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</>
	);
}

export default NuestrosServiciosSection;
