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
          <p>I already know <strong>HTML5</strong>, a bit of <strong>CSS</strong> and <strong>JavaScript</strong> on the <strong>client side</strong> and also on the <strong>server side</strong>.  And without forgetting the <strong>MongoDB</strong> Database Management System. <br></br><br></br>Being still a beginner in Web development, I always continue to learn more to acquire even more knowledge.</p>
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
