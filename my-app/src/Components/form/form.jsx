
import { useRef, } from "react";
import emailjs from '@emailjs/browser';

function Form(){
  const form =useRef()

  //
  
  //

  const sendEmail = (e) => {
    e.preventDefault()

    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
    .then((result) => {
      console.log('Email sent successfully:', result);
      form.current.reset();
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
    });
  }

  

  return(
    <div className="formContainer">
      <h2 className="formTitle">Me contacter</h2>
      <form  ref={form} onSubmit={sendEmail}>
        <div className="formDetails">
          <input className="formName" type="text" placeholder="Nom" name="user_name" required/>
          <input className="formEmail" type="email" placeholder="Adresse mail" name="user_email" required />
        </div>
        <div>
          <textarea maxLength="700" className="formText" type="text" placeholder="Message" name="message" required />
        </div>  
        <input className="formSubmit" type="submit" value="Envoyer"  />
      </form>
    </div>
  )
}

export default Form

