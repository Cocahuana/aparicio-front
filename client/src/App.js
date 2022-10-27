import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from './Pages/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
function App () {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
