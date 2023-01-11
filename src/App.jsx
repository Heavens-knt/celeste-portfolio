import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Backdrop from "./components/Backdrop/Backdrop";
import Home from "./components/Home/Home";
import Containts from "./components/Containts/Containts";

function App() {

	const [menuOpen, setMenuOpen] = useState(false)
	
	function taggleMenu() {
		if(!menuOpen) {
			setMenuOpen(true)
		} else {
			setMenuOpen(false)
		}
	}

  	return (
  		<div className="App">
			<Header menuOpen ={menuOpen} taggleMenu={taggleMenu}/>
			<NavBar menuOpen = {menuOpen} taggleMenu = {taggleMenu}/>
			<Backdrop menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
			<Containts menuOpen = {menuOpen}/>
  		</div>
  	);
}

export default App;
