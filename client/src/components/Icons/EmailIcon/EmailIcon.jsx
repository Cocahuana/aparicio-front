import emailLogo from "./email.png";
function EmailIcon({children}) {
	const emailLink = "mailto:apafriototal@hotmail.com";
	return (
		<a href={emailLink}>
			<img src={emailLogo} style={{width: "30px", height: "30px"}} />
			{children}
		</a>
	);
}

export default EmailIcon;
