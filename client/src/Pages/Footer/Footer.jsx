import React from "react";
import instagramLogo from "./instagram.png";
import facebookLogo from "./facebook.png";
import whatsappLogo from "./whatsapp.png";
import youtubeLogo from "./youtube.png";
function Footer() {
	const instagramAparicio = "https://www.instagram.com/apafriototal/";
	const whatsappAparicio = "https://wa.me/5492235256164";
	const facebookAparicio =
		"https://www.facebook.com/apafriototal/about_contact_and_basic_info";
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
						<a href={whatsappAparicio}>
							<img
								src={whatsappLogo}
								style={{width: "30px", height: "30px"}}
							/>
						</a>
					</li>
					<li className='ms-3'>
						<a href={facebookAparicio}>
							<img
								src={facebookLogo}
								style={{width: "30px", height: "30px"}}
							/>
						</a>
					</li>
					<li className='ms-3'>
						<a href={instagramAparicio} alt='logo-instagram'>
							<img
								src={instagramLogo}
								style={{width: "30px", height: "30px"}}
								alt='instagram-icon'
							/>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
