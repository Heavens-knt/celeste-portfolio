import Subtitle from "../Subtitle/Subtitle"
import styles from "./About.module.css"
import img from "../../assets/imag.jpg"
import { socials } from "../../utils/constants"
import ListItem from "../ListItem/ListItem"
import fbIcon from "../../assets/icons8-facebook-1.svg"
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
      strings: ["Développeur Web", "Programmeur"],
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
        	{/*<img src={img} alt="my-image" />*/}
          <section className={styles.above} ref={target}>
            <h2 className={isInterset ? styles.active : ""}>Knt Bukenya Celeste</h2>
            <p className={`${styles.aboutSkills} ${isInterset ? styles.active : ''}`}>Im a Web <span ref={myTarget}></span></p>
          </section>
        </section>
        <section className={styles.aboutDetails}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias perferendis eum ipsum maxime nostrum ex rem unde provident reiciendis eligendi doloremque sit beatae, praesentium ipsa iure magni blanditiis! Reiciendis?</p>
          <button className={styles.downloadBtn}>Download CV</button>
          <section className={styles.socials}>
            {/*<a href="#"><img src={fbIcon} alt="fb-icon" /></a>
            <a href="#"><img src={fbIcon} alt="" /></a>
            <a href="#"><img src={fbIcon} alt="" /></a>
            <a href="#"><img src={fbIcon} alt="" /></a>
            <a href="#"><img src={fbIcon} alt="" /></a>*/}
						{socials.map(social => <ListItem icon={social.icon} href={social.link} alt={social.name} />)}
          </section>
        </section>
    </section>
  )
}
export default About
