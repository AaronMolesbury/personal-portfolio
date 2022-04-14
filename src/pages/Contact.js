import React from 'react';
import {useRef, useState} from 'react';
import "./Contact.css"
import { 
  MDBInput,
  MDBTextArea
 } from 'mdb-react-ui-kit';
import emailjs from 'emailjs-com';


function Contact() {

  const formRef = useRef(); 

  const [done, setDone] = useState(false);
  
  const handleSend = (e) =>{
    e.preventDefault();
    if(!done){
      emailjs.sendForm('service_523atke', 'template_2x2t1vn', formRef.current, 'wmloOqhsI5YMcKszF')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }
  };

  return (
    <div class="forms">
      <h1 class="ch1">
        Contact Me!
      </h1>
      <br/>
      <p class="cp1">
        If you would like to contact me with any information
        relating to potential work or just general enquiries, feel
        free to use the form below!
      </p>
      <br/>
      <form ref={formRef} onSubmit={handleSend}>
        <div class="input-group">
          <div class = "name-box first-name-box">
            <MDBInput label='First Name' name="user_fname" id='typeText' type='text' contrast/>
          </div>
          <div class = "name-box">
            <MDBInput label='Last Name' name="user_lname" id='typeText' type='text' contrast/>
          </div>
        </div>
        <br/>
        <MDBInput label='Email' name="user_email" id='typeEmail' type='email' contrast/>
        <br/>
        <MDBTextArea label='Message' name="message" id='textAreaExample' rows={4} contrast/>
        <br/>
        <button type="submit" class="btn btn-dark btn-rounded send-button">
          {!done && "Submit"}
          {done && "Sent!"}
        </button> 
      </form>
    </div>
    
  );
}

export default Contact;
