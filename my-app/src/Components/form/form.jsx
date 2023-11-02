import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import ReCAPTCHA from 'react-google-recaptcha';

//Regex 
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function Form() {
  const form = useRef();
  const [message, setMessage] = useState(""); // Initialize message state

  const sendEmail = (e) => {
    e.preventDefault();

    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const email = form.current.user_email.value;
    const recaptchaValue = form.current["g-recaptcha-response"].value;

    if (!emailPattern.test(email)) {
      setMessage("Veuillez entrer une adresse email valide.");
      return;
    }

    if(!recaptchaValue){
      setMessage('Veuillez cocher la case "Je ne suis pas un robot".');
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        setMessage('Le message a bien été envoyé !');
        form.current.reset();
      })
      .catch((error) => {
        setMessage("Un problème est survenu lors de l'envoi du message.");
        console.error(error);
      });
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Me contacter</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formDetails">
          <div className="formNameContainer">
            <label htmlFor="user_name">Nom : </label>
            <input className="formName" type="text" name="user_name" required aria-label="Nom" />
          </div>
          <div className="formEmailContainer">
            <label htmlFor="user_email">Adresse mail : </label>
            <input className="formEmail" type="email" name="user_email" required aria-label="Adresse mail" />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message : </label>
          <textarea maxLength="700" className="formText" placeholder="Votre message ici ... " name="message" required aria-label="Message" />
        </div>
        <p className="formMessage">{message}</p>

        <ReCAPTCHA 
          sitekey="6LcUbusoAAAAAAkkCx1ZzQ3E7QsorBnlUjSU7stU"
          className="formCaptcha"
          role="button"
          aria-label="I am not a robot verification"
        />
        <input className="formSubmit" type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default Form;
