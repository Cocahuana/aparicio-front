import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import LogoAparicio from "../../components/LogoAparicio/LogoAparicio";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// const NavItem = styled.li.attrs(() => ({
// 	className: "nav-item",
// }))`
// 	text-decoration: none;
// `;

// const NavItemDropdown = styled.li.attrs(() => ({
// 	className: "dropdown",
// }))``;

// const ItemLink = styled.a.attrs(() => ({
// 	className: "nav-link",
// }))``;

function Navigation() {
	return (
		<>
			<Navbar bg='light' expand='lg'>
				<Container>
					<Navbar.Brand>
						<LogoAparicio />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link as={Link} to='/'>
								Inicio
							</Nav.Link>
							<CursosDropdown />
							<Nav.Link as={Link} to='/Cursos/Online'>
								Cursos Online
							</Nav.Link>
							<Nav.Link as={Link} to='/Egresados'>
								Egresados
							</Nav.Link>
							<Nav.Link as={Link} to='/TecnicosCertificados'>
								Técnicos Certificados
							</Nav.Link>
							<Nav.Link as={Link} to='/Testimonios'>
								Testimonios
							</Nav.Link>
							<ServiciosDropdown />
							<ProductosDropdown />
							<Nav.Link as={Link} to='/Contacto'>
								Contacto
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

const CursosDropdown = () => {
	const items = [
		{
			link: "/Cursos/1",
			text: "Aire acondicionado split y automotriz",
		},
		{link: "/Cursos/2", text: "Aire acondicionado split"},
		{
			link: "/Cursos/3",
			text: "Aire acondicionado automotriz",
		},
		{
			link: "/Cursos/4",
			text: "Heladeras familiares y comerciales",
		},
		{
			link: "/Cursos/5",
			text: "Lavarropas",
		},
	];
	return (
		<NavDropdown title='Cursos' id='cursos-dropdown'>
			<NavDropdown.Item as={Link} to='/Cursos/Proximos_Inicios'>
				Próximos inicios
			</NavDropdown.Item>
			<NavDropdown.Divider />
			{items.map((curso) => (
				<NavDropdown.Item as={Link} to={curso.link}>
					{curso.text}
				</NavDropdown.Item>
			))}
		</NavDropdown>
	);
};

const ServiciosDropdown = () => {
	const items = [
		{
			link: "/Cursos/6",
			text: "Instalación de equipos A/AC",
		},
		{link: "/Cursos/2", text: "Carga de gas refrigerante"},
		{
			link: "/Cursos/7",
			text: "Reparación de equipos y fugas",
		},
		{
			link: "/Cursos/8",
			text: "Mantenimiento",
		},
	];
	return (
		<NavDropdown title='Servicios' id='servicios-dropdown'>
			{items.map((servicio) => (
				<NavDropdown.Item as={Link} to={servicio.link}>
					{servicio.text}
				</NavDropdown.Item>
			))}
		</NavDropdown>
	);
};

const ProductosDropdown = () => {
	const items = [
		{
			link: "/Cursos/9",
			text: "Equipos",
		},
		{
			link: "/Cursos/10",
			text: "Herramientas",
		},
		{
			link: "/Cursos/11",
			text: "Insumos",
		},
	];
	return (
		<NavDropdown title='Productos' id='productos-dropdown'>
			{items.map((productos) => (
				<NavDropdown.Item as={Link} to={productos.link}>
					{productos.text}
				</NavDropdown.Item>
			))}
		</NavDropdown>
	);
};

const MobileNavbar = () => {
	return (
		<>
			<LogoAparicio />
			<button
				className='navbar-toggler'
				type='button'
				data-bs-toggle='collapse'
				data-bs-target='#collapsibleNavbar'>
				<span className='navbar-toggler-icon'></span>
			</button>
		</>
	);
};

export default Navigation;
