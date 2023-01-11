import styles from "./ListItem.module.css"

function ListItem({icon, alt, href}) {
  return (
    <a className={styles.social} href={href} target='_blank'><img src={icon} alt={alt} /></a>
  )
}

export default ListItem