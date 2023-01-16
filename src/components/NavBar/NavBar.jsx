import styles from "./NavBar.module.css"
import { socials, list } from "../../utils/constants"
import ListItem from "../ListItem/ListItem"
import list_icon from "../../assets/list-image.jpg"
import Li from "../Li/Li"

function NavBar({menuOpen, toggleMenu, setMenuOpen}) {

  return (
    <section className={`${styles.navbar} ${menuOpen ? styles.active : ""}`}>
    	<section className={styles.listIcon}>
        <img src={list_icon} alt="celeste-picture" />
      </section>
			<ul>
		    {list.map(el => <Li li_name={el.name} href={el.path} setMenuOpen={setMenuOpen}/>)}
      </ul>
      <section className={`${styles.socials} ${menuOpen ? styles.activeIcon : ""}`}>
				{socials.map(social => <ListItem icon={social.icon} href={social.link} alt={social.name} />)}
      </section> 
    </section>
  )
}

export default NavBar
