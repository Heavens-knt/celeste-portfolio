import About from "../About/About"
import Home from "../Home/Home"
import Skills from "../Skills/Skills"
import styles from "./Containts.module.css"
import Services from "../Services/Services"
import { useRef } from "react"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

function Containts({menuOpen}) {

	const refer = useRef()

  const handleClick = () => {
    refer.current.scroll({
      top: 1000,
      left: 0,
      behavior: "smooth"
    })
  }

  const handleScroll = (e) => console.log("hello")

  return (
    <section className={styles.mainContaints} ref={refer} onClick={handleClick} onScroll={handleScroll}>
        <Home menuOpen={menuOpen}/>
        <About />
        <Skills />
        <Services />
        <Projects /> 
        <Contact />
        {/*<Footer />*/}
    </section>
  )
}

export default Containts
