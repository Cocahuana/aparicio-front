import InstagramIcon from "../../components/Icons/InstagramIcon/InstagramIcon";
import WhatsappIcon from "../../components/Icons/WhatsappIcon/WhatsappIcon";
import FacebookIcon from "../../components/Icons/FacebookIcon/FacebookIcon";
import YoutubeIcon from "../../components/Icons/YoutubeIcon/YoutubeIcon";
import FeatureDivider from "../../components/FeatureDivider/FeatureDivider";
import CenteredSectionTitle from "../../components/CenteredSectionTitle/CenteredSectionTitle";
function Contacto() {
	return (
		<div className='container marketing'>
			<div className='mt-5 text-center'>
				<h3 className='p-2 bg-secondary text-bg-secondary rounded-top'>
					<strong>NUESTROS DATOS DE CONTACTO</strong>
				</h3>
			</div>

			<div className='card mt-3 border-primary'>
				<div className='row g-0'>
					<div className='col-md-6'>
						<div className='card-body bg-light'>
							<img
								src='/Img/direccion.png'
								style={{width: "30px", height: "30px"}}
							/>{" "}
							Medrano 3682, Mar del Plata, Buenos Aires
							<br />
							<br />
							<img
								src='/Img/email.png'
								style={{width: "30px", height: "30px"}}
							/>
							<a href='mailto:apafriototal@hotmail.com'>
								apafriototal@hotmail.com
							</a>
							<br />
							<br />
							<WhatsappIcon>(+54 9) 223 525-6164</WhatsappIcon>
							<br />
							<br />
							<FacebookIcon>Raúl Aparicio</FacebookIcon>
							<br />
							<br />
							<InstagramIcon>apafriototal</InstagramIcon>
							<br />
							<br />
							<YoutubeIcon>Raúl Aparicio</YoutubeIcon>
						</div>
					</div>
					<div className='col-md-6'>
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contacto;
