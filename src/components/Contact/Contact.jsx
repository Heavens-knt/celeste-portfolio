import React, { useRef, useState } from 'react'
//import { useState } from 'react'
import Subtitle from '../Subtitle/Subtitle'
// import ErrorMessage from "../ErrorMessage/ErrorMessage"
import styles from "./Contact.module.css"


function Error({errorMessage, toggleError}) {
  return(
    <div className={`${styles.error} ${ toggleError ? styles.active : '' }`}>
      {errorMessage}
    </div>
  )
}


function Contact() {
	const formRef = useRef()
  const [toggleError, setToggleError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
	//format datas in a JSON LIKE STEING
	const format = (data) => {
		let str_data = "" //initialisation of the stringified data
		for (let i = 0; i < data.length - 1; i++) {
      console.log(data[i].value)
      if(data[i].value === "") {
        console.log(`${data[i].name} : is empty`);
        setErrorMessage(`${data[i].name} is required !`);
        setToggleError(true)
        return;
      }
			str_data += i < (data.length - 2) ? `"${data[i].name}": "${data[i].value}",` : `"${data[i].name}" : "${data[i].value}"`;
		}
		return `{${str_data}}`
	}

  const handleChange = () => {
    setToggleError(false);
  }
	const handleSubmit = async (e) => {
		e.preventDefault();

    if(format(formRef.current)) {
      try {
        const response = await fetch("http://localhost:3000/user/message", {
          method: "post",
          mode: "cors",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, */*'
          },
          body: format(formRef.current)
        });
        const data = await response.json();
        alert(JSON.stringify(data));
      } catch (error) {
        console.log(error);
        setToggleError(true);
        setErrorMessage(error.message);
      }
    }
	}
  	return (
    	<section className={`${styles.Contact} init-style`} id="contact">
			<Subtitle title="Contact" subtitle="contact us" />

    		<section className={styles.form}>
				  <form action="" ref={formRef}>
            <Error errorMessage={errorMessage} toggleError={toggleError} />
        		<input type="text" name="name" id="fullName" placeholder='Full Name' onChange={handleChange}/>
        		<input type="email" name="email" id="email" placeholder='Email' onChange={handleChange}/>
            <input type="number" name="phoneNumber" placeholder='Phone Number' onChange={handleChange}/>
        		<input type="text" name="subject" id="subject" placeholder='Subject' onChange={handleChange}/>
        		<textarea name="message" id="message" cols="30" rows="10" placeholder='message' onChange={handleChange}></textarea>
        		<button type="submit" onClick={handleSubmit}>Submit</button>
      		</form>
    		</section>
    	</section>
  	)
}

export default Contact
