import { init } from "ityped"
import { useRef, useEffect } from "react"
import styles from "./Home.module.css"

function Home({menuOpen}) {
  const myTarget = useRef()
  useEffect(() => {
    init(myTarget.current, {
      showCursor: true,
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 2000,
      strings: ["Web Developer", "Programmer"],
    });
  }, []);
  return (
    <section className={styles.home}>
        <section className={`${styles.centerContaint} ${!menuOpen ? styles.active : ""}`} id="home">
						<h1>Heavens - Knt</h1>
            <p className={styles.homeSkills}>I'm a <span ref={myTarget}></span></p>
            <p className={styles.homeDetails}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quae commodi enim possimus suscipit nisi dolorem inventore ipsum repellat consequatur.</p>
        </section>
    </section>
  )
}

export default Home
