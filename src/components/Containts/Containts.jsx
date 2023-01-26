import About from "../About/About"
import Home from "../Home/Home"
import Skills from "../Skills/Skills"
import styles from "./Containts.module.css"
import Services from "../Services/Services"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"

function Containts({menuOpen}) {

  return (
    <section className={styles.mainContaints} >
        <Home menuOpen={menuOpen}/>
        <About />
        <Skills />
        <Services />
        <Projects /> 
        <Contact />
    </section>
  )
}

export default Containts
