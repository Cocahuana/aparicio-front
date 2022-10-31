import direccionLogo from "./direccion.png"
function DireccionIcon({children}) {
    const direccionLink = ""
    return (
		<a href={direccionLink}>
			<img src={direccionLogo} style={{width: "30px", height: "30px"}} />
			{children}
		</a>
	);
}

export default DireccionIcon