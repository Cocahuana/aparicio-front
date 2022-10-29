import FacebookIcon from "../../components/Icons/FacebookIcon/FacebookIcon";
import WhatsappIcon from "../../components/Icons/WhatsappIcon/WhatsappIcon";
import InstagramIcon from "../../components/Icons/InstagramIcon/InstagramIcon";
function Footer() {
	return (
		<div className='container'>
			<footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
				<div className='col-md-4 d-flex align-items-center'>
					<a
						href='/'
						className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'>
						<svg className='bi' width='30' height='24'></svg>
					</a>
					<span className='mb-3 mb-md-0'>
						© 2022 Refrigeración Aparicio
					</span>
				</div>

				<ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
					<li className='ms-3'>
						<WhatsappIcon />
					</li>
					<li className='ms-3'>
						<FacebookIcon />
					</li>
					<li className='ms-3'>
						<InstagramIcon />
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
