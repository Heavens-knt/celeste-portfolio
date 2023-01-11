//import { useState } from "react"
import style from "./Header.module.css"

function Header({menuOpen,taggleMenu}) {
	
  return (
    <div className={style.Header}>
        <div className={style.logo}><h1>Heaven's.</h1></div>
        <nav className={style.menu}>

          <menu className={style.ulMenu}>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Skells</li>
            </a>
            <a href="#">
              <li>Servives</li>
            </a>
            <a href="#">
              <li>Testimonials</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </menu>
        </nav>

        <div className={style.hamburger} onClick={() => taggleMenu()} id={ menuOpen ? style.active : ""}>
          <div></div>
          <div></div>
          <div></div>
        </div>

    </div>
  )
}

export default Header