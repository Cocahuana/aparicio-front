import facebookLogo from "./facebook.png";
function FacebookIcon({children}) {
	const facebookLink =
		"https://www.facebook.com/apafriototal/about_contact_and_basic_info";

	return (
		<a href={facebookLink}>
			<img src={facebookLogo} style={{width: "30px", height: "30px"}} />
			{children}
		</a>
	);
}

export default FacebookIcon;
