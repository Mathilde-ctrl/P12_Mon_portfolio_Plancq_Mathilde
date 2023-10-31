import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Form() {
  const form = useRef();
  const [message, setMessage] = useState(""); // Initialize message state

  const sendEmail = (e) => {
    e.preventDefault();

    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        setMessage('Le message a bien été envoyé !');
        form.current.reset();
      })
      .catch((error) => {
        setMessage("Un problème est survenu lors de l'envoi du message.");
        console.error( error);
      });
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Me contacter</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formDetails">
          <div className="formNameContainer">
            <label htmlFor="user_name">Nom : </label>
            <input className="formName" type="text" name="user_name" required />
          </div>
          <div className="formEmailContainer">
            <label htmlFor="user_email">Adresse mail : </label>
            <input className="formEmail" type="email" name="user_email" required />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message : </label>
          <textarea maxLength="700" className="formText" type="text" placeholder="Votre message ici ... " name="message" required />
        </div>
        <p className="formMessage">{message}</p>
        <input className="formSubmit" type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default Form;
