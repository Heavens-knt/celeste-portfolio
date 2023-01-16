import {useState, useRef, useEffect} from "react";
import styles from "./SkillsDetails.module.css"
//import {useObserver} from "../../hooks/useObserver.js"

function SkillsDetails({name, pourcent}) {
  
  const [interset, setInterset] = useState(false)
  let [ pourcentCount, setPourcentCount ] = useState(0) //le porcentage a affiche
  //observable refferance.
  const myRef = useRef()
  //observable options.
  const options = {
    threshold: 1,
    marginRoot: "0px 0px -50px 0px"
  } 

  //the write pourcentages function.
  const wrtPourcent = () => {
    //write the pourcentages only if the element is interseted(visible).
    if(interset) {
      setTimeout(() => {
        const intervalID = setInterval(() => {
          /*If the pourcentCount is equal to the porcentage of the element
          the setInterval function will be cleared */
          if(pourcentCount == pourcent) clearInterval(intervalID);
          //incremente the pourcentCount after each runnig of th setInterval.
          setPourcentCount(pourcentCount++);
        }, 50)
      }, 500)
    } else {
      setPourcentCount(0);
    }
  }

  useEffect(() => {
    wrtPourcent()
  }, [interset]);

	useEffect(function () {
  	const appearsObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
        setInterset(entry.isIntersecting)
      })
    }, options)

    appearsObserver.observe(myRef.current)
  }, [interset])

  //useObserver(myRef.current, "id", name, options, setInterset)

  return (
    <section className={styles.details}>

			<section className={styles.text}>
        <span>{name}</span>
        <span>{pourcentCount}%</span>
      </section>

      <section ref={myRef} className={styles.bar} id={interset ? name : ""}></section>

    </section>
  )
}

export default SkillsDetails
