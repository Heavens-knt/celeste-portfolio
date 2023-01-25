import { useState } from "react"
import Backdrop from "../../../components/Backdrop/Backdrop"
import Footer from "../../../components/Footer/Footer"
import Header from "../../../components/Header/Header"
import NavBar from "../../../components/NavBar/NavBar"
import styles from "./Login.module.css"

const Login = () => { 
  const [menuOpen, setMenuOpen] = useState();
  const toggleMenu = () => {
    !menuOpen ? setMenuOpen(true) : setMenuOpen(false)
  }
  return (
    <section className={styles.login}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} toggleMenu={toggleMenu}/>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} toggleMenu={toggleMenu}/>
      <Backdrop menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section className={styles.form}>
        <form>
          <input type="txt" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password"/>
          <button type="submit"> submit </button>
        </form>
      </section>
    </section>
  )
}

export default Login
