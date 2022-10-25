import {Link} from "react-router-dom";
import logo from "./aparicio_cortado.png";
function LogoAparicio() {
	return (
		<Link to='/'>
			<img
				alt='logo'
				src={logo}
				style={{width: "150px", height: "75px"}}
			/>
		</Link>
	);
}

export default LogoAparicio;
