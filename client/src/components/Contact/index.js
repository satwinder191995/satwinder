import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '',subject:'' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message,subject } = formState;
 console.log("name"+name);
 
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
      window.alert("Email copy sent to your accout.Thanks...")
      fetch('api/contact'
      , {
        method: 'post',
        body: JSON.stringify({
          formState
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(data=>{
        console.log(data);
      })
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
      
    }
  };

  return (
    <section id="contact" >
      <h1 data-testid="h1tag" >Contact me</h1>
      <form className='container-fluid' >
        <div className="m-3">
          <label style={{width:"140px"}} htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="m-3">
          <label style={{width:"140px"}} htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="m-3">
          <label style={{width:"140px"}} htmlFor="subject">Subject:</label>
          <input type="text" name="subject" defaultValue={subject} onBlur={handleChange} />
        </div>
        <div className="m-3">
          <label style={{width:"140px"}} htmlFor="message">Message:</label><br></br>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div className="m-3">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button onClick={handleSubmit} style={{width:"150px",fontSize:"20px"}} className="m-3" data-testid="button" type="submit">Submit</button>
      </form>
      <div style={{height:"100px"}}></div>
    </section>

  );
}

export default ContactForm;
