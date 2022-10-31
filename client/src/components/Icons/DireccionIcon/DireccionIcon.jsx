import direccionLogo from "./direccion.png";
function DireccionIcon({children}) {
	const direccionLink =
		"https://www.google.com/maps/search/Faro+Norte+Medrano+3682+B7603DNR+Mar+del+Plata+Provincia+de+Buenos+Aires/@-38.082723,-57.552782,16z?hl=es";
	return (
		<a href={direccionLink}>
			<img src={direccionLogo} style={{width: "30px", height: "30px"}} />
			{children}
		</a>
	);
}

export default DireccionIcon;
