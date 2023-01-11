import styles from "./ProjectItem.module.css"

function ProjectItem({imgSrc, name}) {
  return (
        <a href="#" className={`${styles.projectItem} ${name}`}>
        	<div className={styles.container}>
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, soluta!</p>
            <div className={styles.projectImg}>
              <img src={imgSrc} alt="" />
            </div>
          </div>
        </a>
  )
}

export default ProjectItem