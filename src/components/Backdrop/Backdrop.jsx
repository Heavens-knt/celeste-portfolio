import styles from "./Backdrop.module.css"

function Backdrop({menuOpen, setMenuOpen}) {
  return (
    <div className={`${styles.backdrop} ${menuOpen ? styles.active : ""}`} onClick={() => setMenuOpen(false)}></div>
  )
}

export default Backdrop