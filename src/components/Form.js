import "./FormStyles.css";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const Form = () => {

  const form = useRef();

  const [userName, setUserName] = useState('')
  const [nameEmpty, setNameEmpty] = useState("empty")
  const handleNameEmpty = () => setNameEmpty("visible")

  const [userEmail, setUserEmail] = useState('')
  const [mailEmpty, setMailEmpty] = useState("empty")
  const handleMailEmpty = () => setMailEmpty("visible")

  const [userSubject, setUserSubject] = useState('')
  const [subjectEmpty, setSubjectEmpty] = useState("empty")
  const handleSubjectEmpty = () => setSubjectEmpty("visible")

  const [userMessage, setUserMessage] = useState('')
  const [messageEmpty, setMessageEmpty] = useState("empty")
  const handleMessageEmpty = () => setMessageEmpty("visible")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userName.trim().length === 0){
      console.log(userName)
      handleNameEmpty()
    } 
    if(userName.trim().length !== 0){
      setNameEmpty('empty')
    }
    if(userEmail.trim().length === 0){
      handleMailEmpty()
    } 
    if(userEmail.trim().length !== 0){
      setMailEmpty('empty')
    }
    if(userSubject.trim().length === 0){
      handleSubjectEmpty()
    } 
    if(userSubject.trim().length !== 0){
      setSubjectEmpty('empty')
    }
    if(userMessage.trim().length === 0){
      handleMessageEmpty()
    } 
    if(userMessage.trim().length !== 0){
      setMessageEmpty('empty')
    }
    if(userName.trim().length !== 0 && userEmail.trim().length !== 0 &&userSubject.trim().length !== 0 && userMessage.trim().length !== 0)
      {
      emailjs.sendForm('service_pqzbj3n', 'template_i03ykvt', form.current, 'HxNRmc_Rnj5VGBvAD')
      .then((result) => {
          toast.success('Message envoyé, à bientôt !')
          setUserName('');
          setUserEmail('');
          setUserSubject('');
          setUserMessage('');

      }, (error) => {
        toast.error('Échec de l\'envoi, oups..')
        });
      }
    }

  return (
    <div>
      <Toaster />
        <div className="form">
          <form ref={form} onSubmit={handleSubmit}>
              <label>Votre nom</label>
              <input type="text" name="user_name" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
              <div className={nameEmpty}>Veuillez remplir le champ</div>

              <label>Votre email</label>
              <input type="email" name="user_email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} ></input>
              <div className={mailEmpty}>Veuillez remplir le champ</div>

              <label>Sujet</label>
              <input type="text" name="subject" value={userSubject} onChange={(e) => setUserSubject(e.target.value)}></input>
              <div className={subjectEmpty}>Veuillez remplir le champ</div>

              <label>Message</label>
              <textarea rows="6" name="message" value={userMessage} onChange={(e) => setUserMessage(e.target.value)}/>
              <div className={messageEmpty}>Veuillez remplir le champ</div>

              <button className="btn" onClick={() => window.scroll(0,0)}>Envoyer</button>
          </form>        
        </div>
    </div>
  )
  };

export default Form