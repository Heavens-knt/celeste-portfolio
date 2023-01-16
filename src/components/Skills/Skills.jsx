import Subtitle from "../Subtitle/Subtitle"
import styles from "./Skills.module.css"
import htmlCssImage from "../../assets/4884785.jpg"
import jsImage from "../../assets/undraw_static_assets_rpm6.svg"
import SkillsDetails from "../SkillsDetails/SkillsDetails"

function Skills() {

  return (
    <section className={`${styles.Skills} init-style`} id="skills">
        <Subtitle title="Skills" subtitle="What i know"/>
        <section className={styles.details}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, unde. Sequi, cupiditate id quisquam perferendis molestias quia quae hic consectetur quos! Totam a commodi libero deserunt ad obcaecati sint nobis.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis numquam, doloremque ipsa eveniet commodi sed optio adipisci magni repellendus? Deleniti distinctio possimus modi dolorum, commodi nemo fugiat nobis dolores officiis?</p>
        </section>
        <section className={styles.progress}>
					<section className={styles.left}>
						<img src={htmlCssImage} alt="" />
            
            	<SkillsDetails name="html" pourcent="70" />
            	<SkillsDetails name="css"  pourcent="55"/>
            
          </section>
          <section className={styles.right}>
						<img src={jsImage} alt="" />
          
							<SkillsDetails name="javascript" pourcent="50"/>
              <SkillsDetails name="mongodb" pourcent="30"/>
            
          </section>
        </section>
    </section>
  )
}

export default Skills 
