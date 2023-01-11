import { useRef, useEffect, useState } from "react"
import styles from "./Subtitle.module.css"

function Subtitle({title, subtitle}) {

  const myTarget = useRef()
  const [interset, setInterset] = useState(false)
  const options = {
    threshold: 1,
    marginRoot: "0px 0px -500px 0px"
  }

  useEffect(() => {

		const myObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
        setInterset(entry.isIntersecting)
        if(interset) myObserver.unobserve(entry.target);
        if(!interset) return;
      })
    }, options)
		myObserver.observe(myTarget.current)
    
  }, [interset])

  return (
    <section className={`${styles.header} ${interset ? styles.animate : ""}`} ref={myTarget}>
      <h2 className={`${styles.title} ${interset ? styles.animate : ""}`}>{title}</h2>
      <span className={styles.subtitle}><h5 className={interset ? styles.animate : ""}>{subtitle}</h5></span>
    </section>
  )
}

export default Subtitle