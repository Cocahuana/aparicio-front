import CenteredSectionTitle from "../../../components/CenteredSectionTitle/CenteredSectionTitle";
import FeatureDivider from "../../../components/FeatureDivider/FeatureDivider";

function NuestrosServiciosSection() {
	return (
		<>
			<CenteredSectionTitle title='ALGUNOS DE NUESTROS SERVICIOS' />

			<div
				className='row row-cols-1 row-cols-md-3 g-4 pt-5 pb-5'
				style={{backgroundColor: "#f0f3f6"}}>
				<div className='col'>
					<div className='card h-100'>
						<img
							src='/Img/Inicio/instalacion_de_aire.jpg'
							className='card-img-top'
							alt='...'
						/>
						<div className='card-footer text-center'>
							<p className=''>
								<strong>
									Instalación de equipos de aire acondicionado
								</strong>
							</p>
							<p className='card-text'>
								<a
									className='btn btn-primary'
									href='/Páginas/Servicios/instalación.aspx'>
									Más información
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className='col'>
					<div className='card h-100'>
						<img
							src='/Img/Inicio/mantenimiento.jpg'
							className='card-img-top'
							alt='...'
						/>
						<div className='card-footer text-center'>
							<p className=''>
								<strong>
									Mantenimiento de equipos de aire
									acondicionado
								</strong>
							</p>
							<p className='card-text'>
								<a
									className='btn btn-primary'
									href='/Páginas/Servicios/mantenimiento.aspx'>
									Más información
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className='col'>
					<div className='card h-100'>
						<img
							src='/Img/Inicio/carga_de_gas.png'
							className='card-img-top'
							alt='...'
						/>
						<div className='card-footer text-center'>
							<br />
							<p className=''>
								<strong>Carga de gas refrigerante</strong>
							</p>
							<p className='card-text'>
								<a
									className='btn btn-primary'
									href='/Páginas/Servicios/carga_refrigerante.aspx'>
									Más información
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default NuestrosServiciosSection;
