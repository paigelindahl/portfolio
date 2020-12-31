import React from 'react'
import FadeExample from './FadeExample'
import '../styles/Projects.scss';

export function Projects(props) {
  

  return (
    <>
      <h1 className="project-title">PROJECTS</h1>
      <FadeExample image="https://github.com/paigelindahl/portfolio/blob/master/docs/dashboard1.jpg?raw=true" wid="300" high="600" text="Ukiyo is a one stop wellness app intended to alleviate stress and promote positive feelings. Ukiyo provides a dashboard with access to meditation, yoga, gratitude journal and a todo list organizer." language="React JS / PSQL / Node / Express"/>
      {/* <FadeEaxmple /> */}
     
      
    </>
  )
}
