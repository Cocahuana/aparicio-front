import instagramLogo from "./instagram.png";

function InstagramIcon({children}) {
	const instagramLink = "https://www.instagram.com/apafriototal/";
	return (
		<a href={instagramLink} alt='logo-instagram'>
			<img
				src={instagramLogo}
				style={{width: "30px", height: "30px"}}
				alt='instagram-icon'
			/>
			{children}
		</a>
	);
}

export default InstagramIcon;
