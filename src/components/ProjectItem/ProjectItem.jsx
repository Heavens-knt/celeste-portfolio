import styles from "./ProjectItem.module.css"

function ProjectItem({name, link}) {
  return (
        <a href={link} target="_blank" className={`${styles.projectItem} ${name}`}>
        	<div className={styles.container}>
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, soluta!</p> 
          </div>
        </a>
  )
}

export default ProjectItem
