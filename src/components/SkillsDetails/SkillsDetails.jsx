import {useState, useRef, useEffect} from "react";
import styles from "./SkillsDetails.module.css"
//import {useObserver} from "../../hooks/useObserver.js"

function SkillsDetails({name, pourcent}) {
  const [interset, setInterset] = useState(false)
  const myRef = useRef()
  const options = {
    threshold: 1,
    marginRoot: "0px 0px -10px 0px"
  }
  
	useEffect(function () {
  	const appearsObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
        setInterset(entry.isIntersecting)
        if(interset){
        	/*entry.target.setAttribute("id", name)
        	appearsObserver.unobserve(entry.target)*/
        	//console.log(interset)
        } else {
          return;
        }
      })
    }, options)

    appearsObserver.observe(myRef.current)
  }, [interset])

  //useObserver(myRef.current, "id", name, options, setInterset)

  return (
    <section className={styles.details}>

			<section className={styles.text}>
        <span>{name}</span>
        <span>{pourcent}</span>
      </section>

      <section ref={myRef} className={styles.bar} id={interset ? name : ""}></section>

    </section>
  )
}

export default SkillsDetails