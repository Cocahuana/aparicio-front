import fondo_1 from "./fondo 1.png";
import fondo_2 from "./fondo2.png";
import fondo_3 from "./fondo 3.jpeg";
import styled from "styled-components";
import {Carousel} from "react-bootstrap";
function CarouselComponent() {
	const CarouselImg = styled.img.attrs(() => ({
		className: "d-block w-100",
	}))`
		opacity: 1;
	`;

	const slides = [
		{
			img: fondo_1,
			alt: "Inicio - primer slide",
			title: "MANTENIMIENTO DE EQUIPOS DE AIRE ACONDICIONADO",
			subTitle: "",
		},
		{
			img: fondo_2,
			alt: "Inicio - Segundo slide",
			title: "CURSOS DE AIRE ACONDICIONADO SPLIT Y AUTOMOTOR",
			subTitle: "",
		},
		{
			img: fondo_3,
			alt: "Inicio - Tercer slide",
			title: "DE TÉCNICOS EN REFRIGERACIÓN",
			subTitle: "ASOCIACIÓN ARGENTINA DEL FRÍO",
		},
	];

	return (
		<Carousel>
			{slides.map((slide, index) => (
				<Carousel.Item key={index}>
					<CarouselImg src={slide.img} alt={slide.alt} />
					<Carousel.Caption>
						<h1>
							<strong>{slide.title}</strong>
						</h1>
						<h6>
							<strong>{slide.subTitle}</strong>
						</h6>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}

export default CarouselComponent;
