import InstagramIcon from "../../components/Icons/InstagramIcon/InstagramIcon";
import WhatsappIcon from "../../components/Icons/WhatsappIcon/WhatsappIcon";
import FacebookIcon from "../../components/Icons/FacebookIcon/FacebookIcon";
import YoutubeIcon from "../../components/Icons/YoutubeIcon/YoutubeIcon";
import EmailIcon from "../../components/Icons/EmailIcon/EmailIcon";
import DireccionIcon from "../../components/Icons/DireccionIcon/DireccionIcon";
import FeatureDivider from "../../components/FeatureDivider/FeatureDivider";
import CenteredSectionTitle from "../../components/CenteredSectionTitle/CenteredSectionTitle";
import {Col, Stack, Container, Row} from "react-bootstrap";
function Contacto() {
	return (
		<>
			<Container fluid='md' style={{padding: "20px"}}>
				<Row>
					<Col className='text-center'>
						<h3 className='p-2 bg-secondary text-bg-secondary rounded-top'>
							<strong>NUESTROS DATOS DE CONTACTO</strong>
						</h3>
					</Col>
				</Row>
				<div className='card mt-3 border-primary'>
					<div className='row g-0'>
						<Col>
							<Stack gap={3} className='bg-light h-100 p-3'>
								<DireccionIcon>
									Medrano 3682, Mar del Plata, Buenos Aires
								</DireccionIcon>
								<EmailIcon>apafriototal@hotmail.com</EmailIcon>

								<WhatsappIcon>
									(+54 9) 223 525-6164
								</WhatsappIcon>

								<FacebookIcon>Raúl Aparicio</FacebookIcon>

								<InstagramIcon>apafriototal</InstagramIcon>

								<YoutubeIcon>Raúl Aparicio</YoutubeIcon>
							</Stack>
						</Col>
						<Col>
							<div className='card-body'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.470157912099!2d-57.55497058502042!3d-38.08271875725309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584e7a5af9acb71%3A0xe333952d8d4b0e4b!2sFaro%20Norte%2C%20Medrano%203682%2C%20B7603DNR%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1665853496806!5m2!1ses!2sar'
									style={{
										border: "0",
										width: "100%",
										height: "310px",
									}}
									allowfullscreen=''
									loading='lazy'
									referrerpolicy='no-referrer-when-downgrade'></iframe>
							</div>
						</Col>
					</div>
				</div>
			</Container>
		</>
	);
}

export default Contacto;
