import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/About.scss';
import '../styles/General.scss';

export function About(props) {


  return (
    <>
      <div className="about-container">
        <h1 className="title"><span className="underline--magical">About</span></h1>
        <Fade left>
          <p><span>Hi! My name is Paige,</span>  and I am a full stack developer with a propensity for front-end devlopment. I am based in Edinburgh but originally from Vancouver, Canada. My journey in web devlopement started fairly recently when I completed a three month intensive bootcamp through Lighthouse Labs in 2020 and I plan to keep this momentum going and pursue a career in web development.</p>
        </Fade>
        <Fade left>
          <p><span>Languages:</span> Javascript, HTML, CSS, Ruby</p>
          <p><span>Frameworks, Libraries and Environments:</span> NodeJS, ReactJS, AJAX, Express, EJS, jQuery, Bootstrap, SASS, Wordpress</p>
          <p><span>Systems, Databes:</span> SQL, Git</p>
          <p><span>Testing:</span> Jest, Cyprus, Mocha, Chai</p>
        </Fade>

      </div>

    </>
  )
}
