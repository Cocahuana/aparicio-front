import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from './Pages/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Testimonios from "./Pages/Testimonios/Testimonios"
import Paths from "./Utils/Json/Paths.json"
function App () {
  const {
    cursosOnline,
    egresados,
    tecnicosCertificados,
    testimonios,
    contacto,
  } = Paths.General;

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path={ testimonios.link } element={ <Testimonios /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
