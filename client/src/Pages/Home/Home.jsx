import React from "react";
import styled from "styled-components";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import NuestrosCursos from "./NuestrosCursos/NuestrosCursos";
import TestimoniosSection from "./TestimoniosSection/TestimoniosSection";
import NuestrosServiciosSection from "./NuestrosServiciosSection/NuestrosServiciosSection";
function Home() {
	return (
		<>
			<CarouselComponent />
			<div className='container marketing'>
				<NuestrosCursos />
				<TestimoniosSection />
				<NuestrosServiciosSection />
			</div>
		</>
	);
}

export default Home;
