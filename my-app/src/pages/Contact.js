import React from 'react';
import "./Contact.css"
import { 
  MDBInput,
  MDBTextArea
 } from 'mdb-react-ui-kit';

function Contact() {
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
      <div>
        <div class="input-group">
          <div class = "name-box first-name-box">
            <MDBInput label='First Name' id='typeText' type='text' contrast/>
          </div>
          <div class = "name-box">
            <MDBInput label='Last Name' id='typeText' type='text' contrast/>
          </div>
        </div>
        <br/>
        <MDBInput label='Email' id='typeEmail' type='email' contrast/>
        <br/>
        <MDBTextArea label='Message' id='textAreaExample' rows={4} contrast/>
      </div>
      <br/>
      <button type="button" class="btn btn-dark btn-rounded send-button" >
        Send
      </button> 
    </div>
    
  );
}

export default Contact;
