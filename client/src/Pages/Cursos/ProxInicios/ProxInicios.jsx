import React from "react";
import {Card, CardGroup, Row, Col} from "react-bootstrap";
import flyer01 from "./assets/flyer_heladeras.jpeg";
import flyer_02 from "./assets/flyer_lavarropas.jpeg";
import flyer_03 from "./assets/flyer_automotriz.jpeg";
import flyer_04 from "./assets/flyer_camiones.jpeg";

function ProxInicios() {
	const cursos = [
		{
			img: flyer01,
			alt: "Flyer 1",
		},
		{
			img: flyer_02,
			alt: "Flyer 2",
		},
		{
			img: flyer_03,
			alt: "Flyer 3",
		},
		{
			img: flyer_04,
			alt: "Flyer 4",
		},
	];
	return (
		<div className='container marketing'>
			<div className='row row-cols-1 row-cols-md-2 g-4 mt-3'>
				{cursos?.map((curso) => (
					<Col>
						<Card>
							<Card.Img
								variant='top'
								src={curso.img}
								alt={curso.alt}
							/>
						</Card>
					</Col>
				))}
			</div>
		</div>
	);
}

export default ProxInicios;
