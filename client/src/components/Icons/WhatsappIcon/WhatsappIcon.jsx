import whatsappLogo from "./whatsapp.png";

function WhatsappIcon({children}) {
	const whatsappLink = "https://wa.me/5492235256164";

	return (
		<a href={whatsappLink}>
			<img src={whatsappLogo} style={{width: "30px", height: "30px"}} />
			{children}
		</a>
	);
}

export default WhatsappIcon;
