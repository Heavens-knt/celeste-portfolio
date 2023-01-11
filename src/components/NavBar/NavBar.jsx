import styles from "./NavBar.module.css"
import { socials } from "../../utils/constants"
import ListItem from "../ListItem/ListItem"
import list_icon from "../../assets/list-image.jpg"

function NavBar({menuOpen}) {

  return (
    <section className={`${styles.navbar} ${menuOpen ? styles.active : ""}`}>
    	<section className={styles.listIcon}>
        <img src={list_icon} alt="" />
      </section>
			<ul>
				<a href="#home">
          <li >Home</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#services">
          <li>Services</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
      <section className={`${styles.socials} ${menuOpen ? styles.activeIcon : ""}`}>
				{socials.map(social => <ListItem icon={social.icon} href={social.link} alt={social.name} />)}
      </section> 
    </section>
  )
}

export default NavBar
