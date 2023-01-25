import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Backdrop from "./components/Backdrop/Backdrop";
import Containts from "./components/Containts/Containts";
import Footer from "./components/Footer/Footer";

function App() {

	const [menuOpen, setMenuOpen] = useState(false)
	
  function toggleMenu() {
		!menuOpen ? setMenuOpen(true) : setMenuOpen(false);
	}

  	return (
  		<div className="App">
			  <Header menuOpen ={menuOpen} toggleMenu={toggleMenu} setMenuOpen={setMenuOpen}/>
			  <NavBar menuOpen = {menuOpen} toggleMenu = {toggleMenu} setMenuOpen={setMenuOpen}/>
			  <Backdrop menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
			  <Containts menuOpen = {menuOpen}/>
        <Footer />
  		</div>
  	);
}

export default App;
