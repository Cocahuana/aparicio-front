import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Navbar/Navbar';
import LogoAparicio from './components/LogoAparicio/LogoAparicio';
function App () {

  return (
    <>
      <LogoAparicio />
      <Navbar />
    </>
  );
}

export default App;
