import React from "react";
import {Link} from "react-router-dom";
// import styled from "styled-components";
import LogoAparicio from "../../components/LogoAparicio/LogoAparicio";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import path from "../../Utils/Json/Paths.json";
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
	const {
		cursosOnline,
		egresados,
		tecnicosCertificados,
		testimonios,
		contacto,
	} = path.General;
	return (
		<>
			<Navbar bg='light' expand='lg' fixed='top'>
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
							<Nav.Link as={Link} to={cursosOnline.link}>
								{cursosOnline.texto}
							</Nav.Link>
							<Nav.Link as={Link} to={egresados.link}>
								{egresados.texto}
							</Nav.Link>
							<Nav.Link as={Link} to={tecnicosCertificados.link}>
								{tecnicosCertificados.texto}
							</Nav.Link>
							<Nav.Link as={Link} to={testimonios.link}>
								{testimonios.texto}
							</Nav.Link>
							<ServiciosDropdown />
							<ProductosDropdown />
							<Nav.Link as={Link} to={contacto.link}>
								{contacto.texto}
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

const CursosDropdown = () => {
	const {
		prox_inicios,
		split_automotriz,
		split,
		automotriz,
		heladera,
		lavarropa,
	} = path.Cursos;
	const items = [
		{link: split_automotriz.link, text: split_automotriz.texto},
		{
			link: split.link,
			text: split.texto,
		},
		{
			link: automotriz.link,
			text: automotriz.texto,
		},
		{
			link: heladera.link,
			text: heladera.texto,
		},
		{
			link: lavarropa.link,
			text: lavarropa.texto,
		},
	];
	return (
		<NavDropdown title='Cursos' id='cursos-dropdown'>
			<NavDropdown.Item as={Link} to={prox_inicios.link}>
				{prox_inicios.texto}
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
	const {instalacion, carga_refrigerante, reparacion, mantenimiento} =
		path.Servicios;
	const items = [
		{
			link: instalacion.link,
			text: instalacion.texto,
		},
		{link: carga_refrigerante.link, text: carga_refrigerante.texto},
		{
			link: reparacion.link,
			text: reparacion.texto,
		},
		{
			link: mantenimiento.link,
			text: mantenimiento.texto,
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
	const {equipos, herramientas, insumos} = path.Productos;
	const items = [
		{
			link: equipos.link,
			text: equipos.texto,
		},
		{
			link: herramientas.link,
			text: herramientas.texto,
		},
		{
			link: insumos.link,
			text: insumos.texto,
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

export default Navigation;
