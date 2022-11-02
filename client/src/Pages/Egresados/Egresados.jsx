import React from "react";
import {Card, CardGroup} from "react-bootstrap";
import egresados_01Img from "./assets/egresados_01.jpeg";
import egresados_02Img from "./assets/egresados_02.jpeg";
import egresados_03Img from "./assets/egresados_03.jpeg";
function Egresados() {
	const cursos = [
		{
			img: egresados_01Img,
			alt: "Egresados foto 1",
			title: "CURSO AIRE ACONDICIONADO SPLIT",
			date: "Octubre 2022",
		},
		{
			img: egresados_02Img,
			alt: "Egresados foto 2",
			title: "CURSO AIRE ACONDICIONADO SPLIT",
			date: "Octubre 2022",
		},
		{
			img: egresados_03Img,
			alt: "Egresados foto 3",
			title: "CURSO AIRE ACONDICIONADO AUTOMOTOR",
			date: "Octubre 2022",
		},
	];

	return (
		<>
			<div className='container marketing'>
				<h1 className='mb-3 text-center text-bg-success bg-success p-2 rounded-top'>
					EGRESADOS
				</h1>
				{/* <!-- color hexadecimal acorde al logo: #ff5f00--> */}
				<CardGroup>
					{cursos?.map((curso) => (
						<Card>
							<Card.Img
								variant='top'
								src={curso.img}
								alt={curso.alt}
							/>
							<Card.Body>
								<Card.Title>{curso.title}</Card.Title>
								<Card.Text>
									<small className='text-muted'>
										{curso.date}
									</small>
								</Card.Text>
							</Card.Body>
						</Card>
					))}
				</CardGroup>

				{/* 
                    <div style="display: flex; justify-content: center; align-content: center;">

                        <table className="table table-striped" style="width: 580px;">
                            <thead>
                                <tr>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Nombre</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                    <td>Dominguez</td>
                                    <td>Ignacio</td>
                                </tr>
                                <tr>
                                    <td>Dominguez</td>
                                    <td>Javier</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>*/}
			</div>
		</>
	);
}

export default Egresados;
