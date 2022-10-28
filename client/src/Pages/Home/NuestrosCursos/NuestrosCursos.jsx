import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import styled from "styled-components";
import automotrizImg from "./automotriz.png";
import heladeraImg from "./heladera.png";
import splitImg from "./split.jpeg";
import lavarropaImg from "./lavarropa.png";
import CenteredSectionTitle from "../../../components/CenteredSectionTitle/CenteredSectionTitle";
import FeatureDivider from "../../../components/FeatureDivider/FeatureDivider";
import {Col} from "react-bootstrap";
function NuestrosCursos() {
	const cursos = [
		{
			img: splitImg,
			alt: "Curso Split",
			title: "CURSO DE AIRE ACONDICIONADO SPLIT",
			buttonText: "Más información",
			link: "",
		},
		{
			img: automotrizImg,
			alt: "Curso aire acondicionado automotriz",
			title: "CURSO DE AIRE ACONDICIONADO AUTOMOTRIZ",
			buttonText: "Más información",
			link: "/Páginas/Cursos/automotriz.aspx",
		},
		{
			img: heladeraImg,
			alt: "Curso heladeras Ciclicas/No frost",
			title: "CURSO DE HELADERAS CÍCLICA/NO FROST",
			buttonText: "Más información",
			link: "/Páginas/Cursos/heladera.aspx",
		},
		{
			img: lavarropaImg,
			alt: "Curso Lavarropas automaticos",
			title: "CURSO DE LAVARROPAS AUTOMÁTICOS",
			buttonText: "Más información",
			link: "/Páginas/Cursos/lavarropa.aspx",
		},
	];
	return (
		<>
			<CenteredSectionTitle title='ALGUNOS DE NUESTROS CURSOS' />

			<div className='row row-cols-1 row-cols-md-2 g-4'>
				{cursos.map((curso) => (
					<Col>
						<Card>
							<Card.Img
								variant='top'
								src={curso.img}
								alt={curso.alt}
							/>
							<Card.Body className='text-center'>
								<Card.Title className='text-center'>
									{curso.title}
								</Card.Title>
								<Button
									variant='primary'
									className='text-center'>
									{curso.buttonText}
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</div>
		</>
	);
}

export default NuestrosCursos;
