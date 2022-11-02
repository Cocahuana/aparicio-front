import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from './Pages/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Testimonios from "./Pages/Testimonios/Testimonios"
import Contacto from "./Pages/Contacto/Contacto"
import Paths from "./Utils/Json/Paths.json"
import CursosOnline from './Pages/CursosOnline/CursosOnline';
import Egresados from './Pages/Egresados/Egresados';
import TecnicosCertificados from './Pages/TecnicosCertificados/TecnicosCertificados';
import ProxInicios from './Pages/Cursos/ProxInicios/ProxInicios';
import SplitAutomotriz from './Pages/Cursos/SplitAutomotriz/SplitAutomotriz';
import Split from './Pages/Cursos/Split/Split';
import Automotriz from './Pages/Cursos/Automotriz/Automotriz';
import Heladeras from './Pages/Cursos/Heladeras/Heladeras';
function App () {
  const {
    cursosOnline,
    egresados,
    tecnicosCertificados,
    testimonios,
    contacto,
  } = Paths.General;
  const {
    prox_inicios,
    split_automotriz,
    split,
    automotriz,
    heladera,
    lavarropa,
  } = Paths.Cursos;

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path={ testimonios.link } element={ <Testimonios /> } />
        <Route path={ contacto.link } element={ <Contacto /> } />
        <Route path={ cursosOnline.link } element={ <CursosOnline /> } />
        <Route path={ egresados.link } element={ <Egresados /> } />
        <Route path={ tecnicosCertificados.link } element={ <TecnicosCertificados /> } />
        <Route path={ prox_inicios.link } element={ <ProxInicios /> } />
        <Route path={ split_automotriz.link } element={ <SplitAutomotriz /> } />
        <Route path={ split.link } element={ <Split /> } />
        <Route path={ automotriz.link } element={ <Automotriz /> } />
        <Route path={ heladera.link } element={ <Heladeras /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
