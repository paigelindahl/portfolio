import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/Contact.scss';
import '../styles/General.scss';

export function Contact(props) {


  return (
    <>
      <div className="contact-container">
        <h1 className="title"><span className="underline--magical">Contact</span></h1>
        <Fade left>
          <p><span>Email:</span> paigemarlindahl@gmail.com</p>
          <p><span>LinkedIn:</span></p>
          <p><span>Github:</span><a href="https://github.com/paigelindahl" target="_blank" rel="noopener noreferrer"> github.com/paigelindahl</a></p>

        </Fade>
      </div>

    </>
  )
}
