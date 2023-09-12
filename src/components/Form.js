import "./FormStyles.css";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const Form = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pqzbj3n', 'template_i03ykvt', form.current, 'HxNRmc_Rnj5VGBvAD')
      .then((result) => {
          toast.success('Message envoyé, à bientôt !')
          form.reset()
      }, (error) => {
        toast.error('Échec de l\'envoi, oups..')
        });
  }

  return (
    <div>
      <Toaster />
        <div className="form">
          <form ref={form} onSubmit={handleSubmit}>
              <label>Votre nom</label>
              <input type="text" name="user_name" ></input>
              <label>Votre email</label>
              <input type="email" name="user_email" ></input>
              <label>Sujet</label>
              <input type="text" name="subject" ></input>
              <label>Message</label>
              <textarea rows="6" name="message" />
              <button className="btn">Envoyer</button>
          </form>        
        </div>
    </div>
  )
  };

export default Form