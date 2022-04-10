import React from 'react';
import "./Contact.css"
import { 
  MDBInput,
  MDBTextArea
 } from 'mdb-react-ui-kit';

function Contact() {
  return (
    <div class="forms">
      <h1 class="h1">
        Contact Me!
      </h1>
      <br/>
      <p class="p1">
        If you would like to contact me with any information <br/>
        relating to potential work, feel free to use the form below!
      </p>
      <br/>
      <div>
        <MDBInput label='Email input' id='typeEmail' type='email' contrast/>
        <br/>
        <MDBTextArea label='Message' id='textAreaExample' rows={4} contrast/>
      </div>
      <br/>
      <button type="button" class="btn btn-dark btn-rounded" >
        Send
      </button> 
    </div>
    
  );
}

export default Contact;
