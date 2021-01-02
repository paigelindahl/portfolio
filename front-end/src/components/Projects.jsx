import React from 'react'
import FadeExample from './FadeExample'
import '../styles/Projects.scss';

export function Projects(props) {
  

  return (
    <>
      <h1 className="project-title">PROJECTS</h1>
      <FadeExample image="https://github.com/paigelindahl/portfolio/blob/master/docs/dashboard1.jpg?raw=true" wid="300" high="600" text="Ukiyo is a one stop wellness app intended to alleviate stress and promote positive feelings. Ukiyo provides a dashboard with access to meditation, yoga, gratitude journal and todo list organizer." language="React JS / PSQL / Node / Express"/>
      <FadeExample image="https://github.com/ericmcgrandle/kpe/raw/master/docs/homepage.png?raw=true" wid="450" high="250" text="Pizza pickup application, allowing users to order pizza online from a local pizza parlour. Admin are able to monitor orders and send an SMS using Twilio when orders are ready for pickup." language="Javascript / postgresSQL / Node / Express"/>
     
      
    </>
  )
}
