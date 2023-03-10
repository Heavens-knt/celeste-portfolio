import Subtitle from "../Subtitle/Subtitle"
import styles from "./Projects.module.css"
import ProjectItem from "../ProjectItem/ProjectItem"

function Projects() {
  return (
    <section className={`${styles.Projects} init-style`} id="project">
        <Subtitle title="Projects" subtitle="What i've done"/>
        <section className={styles.details}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laborum a provident veniam, eum ullam deserunt! Accusamus reprehenderit eligendi blanditiis, quo molestias et similique voluptate, aliquam numquam, delectus enim qui.</p>
        </section>
        <section className={styles.projectsItems}>
          <ProjectItem link="https://github.com/Heavens-knt/stopwatch-js" name="stopwhatch"/>
          <ProjectItem link="https://github.com/Heavens-knt/WeatherAPP" name="weather-app"/>
          <ProjectItem link="https://github.com/Heavens-knt/celeste-portfolio" name="heavens-portfolio"/>
        </section>
    </section>
  )
}

export default Projects
