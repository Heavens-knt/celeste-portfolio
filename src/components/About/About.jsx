import Subtitle from "../Subtitle/Subtitle"
import styles from "./About.module.css"
import { socials } from "../../utils/constants"
import ListItem from "../ListItem/ListItem"
import fbIcon from "../../assets/imag.jpg"
import { useEffect, useRef, useState } from "react"
import { init } from "ityped"

function About() {
  
  const target = useRef()
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

  const [isInterset, setIsInterset] = useState(false)
  const obeserverOptions = {
    threshold: 1,
    marginRoot: "0px 0px -500px 0px"
  }
  useEffect(() => {
    console.log(`isInterset: ${isInterset}`)
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsInterset(entry.isIntersecting);
        if(isInterset) myObserver.unobserve(entry.target);
        if(!isInterset) return;
      })
    }, obeserverOptions)
 
    myObserver.observe(target.current)
  }, [obeserverOptions])
 return (
    <section className={`${styles.About} init-style`} id="about">
        <Subtitle title="About" subtitle="About me"/>
        <section className={styles.content}>
          <section className={styles.above} ref={target}>
            <h2 className={isInterset ? styles.active : ""}>Heavens - Knt</h2>
            <p className={`${styles.aboutSkills} ${isInterset ? styles.active : ''}`}>I'm a <span ref={myTarget}></span></p>
          </section>
        </section>
        <section className={styles.aboutDetails}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias perferendis eum ipsum maxime nostrum ex rem unde provident reiciendis eligendi doloremque sit beatae, praesentium ipsa iure magni blanditiis! Reiciendis?</p>
          <a href={fbIcon} download className={styles.downloadBtn}>Download CV</a>
          <section className={styles.socials}>
					{socials.map(social => <ListItem icon={social.icon} href={social.link} alt={social.name} />)}
          </section>
        </section>
    </section>
  )
}
export default About
