import React from "react";
import { Card } from "react-bootstrap";
function Egresados() {
	return (
		<>
			<div className='container marketing'>
				<h1 className='mb-3 text-center text-bg-success bg-success p-2 rounded-top'>
					EGRESADOS
				</h1>
				{/* <!-- color hexadecimal acorde al logo: #ff5f00--> */}

				<div className='card-group'>
					<div className='card'>
						<img
							src='/Img/Egresados/egresados_01.jpeg'
							className='card-img-top'
							alt='...'
						/>
						<div className='card-body'>
							<h5 className='card-title'>
								CURSO AIRE ACONDICIONADO SPLIT
							</h5>
							<p className='card-text'>
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
							<p className='card-text'>
								<small className='text-muted'>
									Octubre 2022
								</small>
							</p>
						</div>
					</div>
					<div className='card'>
						<img
							src='/Img/Egresados/egresados_02.jpeg'
							className='card-img-top'
							alt='...'
						/>
						<div className='card-body'>
							<h5 className='card-title'>
								CURSO AIRE ACONDICIONADO SPLIT
							</h5>
							<p className='card-text'>
								This card has supporting text below as a natural
								lead-in to additional content.
							</p>
							<p className='card-text'>
								<small className='text-muted'>
									Octubre 2022
								</small>
							</p>
						</div>
					</div>
					<div className='card'>
						<img
							src='/Img/Egresados/egresados_03.jpeg'
							className='card-img-top'
							alt='...'
						/>
						<div className='card-body'>
							<h5 className='card-title'>
								CURSO AIRE ACONDICIONADO AUTOMOTOR
							</h5>
							<p className='card-text'>
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								card has even longer content than the first to
								show that equal height action.
							</p>
							<p className='card-text'>
								<small className='text-muted'>
									Octubre 2022
								</small>
							</p>
						</div>
					</div>
				</div>

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
