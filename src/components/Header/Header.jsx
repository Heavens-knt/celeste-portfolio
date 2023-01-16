//import { useState } from "react"
import { list } from "../../utils/constants"
import Li from "../Li/Li"
import style from "./Header.module.css"

function Header({menuOpen,toggleMenu, setMenuOpen}) {
	
  return (
    <div className={style.Header}>
        <div className={style.logo}><h1>Heaven's.</h1></div>
        <nav className={style.menu}>

          <menu className={style.ulMenu}>
            {list.map(el => <Li li_name={el.name} href={el.path} setMenuOpen={setMenuOpen} />)}
          </menu>
        </nav>

        <div className={style.hamburger} onClick={() => toggleMenu()} id={ menuOpen ? style.active : ""}>
          <div></div>
          <div></div>
          <div></div>
        </div>

    </div>
  )
}

export default Header
