import Subtitle from '../Subtitle/Subtitle'
import styles from './Services.module.css'
import frontendImg from '../../assets/frontend.svg'
import backendImg from '../../assets/backend.svg' 

function Services() {
  return (
    <section className={`${styles.Services} init-style`} id="services">
			<Subtitle title="Services" subtitle="What I master"/>
      <section className={`${styles.frontend} ${styles.services}`}>
				<h2 className={styles.title}>Frontend</h2>
        <section className={styles.details}>

        	<section className={styles.img}>
            <img src={frontendImg} alt="frontend-img" />
          </section>
          <div className={styles.txt}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos quasi ipsam fugiat voluptates fuga animi rerum, vel eos ratione maiores dolorem asperiores quia voluptatibus illo. Qui at perspiciatis dolores?
          </div>
          
          <a className={styles.more} href="">See More</a>
        </section>
      </section>
      <section className={`${styles.backend} ${styles.services}`}>
				<h2 className={styles.title}>Backend</h2>
        <section className={styles.details}>
        	<section className={styles.img}>
            <img src={backendImg} alt="Backend" />
          </section>
          <div className={styles.txt}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores maiores, aut, esse exercitationem tempore rem itaque repellendus quaerat ratione vitae inventore repellat quo iste omnis recusandae iusto nihil odio optio!
          </div>

          <a href="#" className={styles.more}>See More</a>
        </section>
      </section>
    </section>
  )
}

export default Services