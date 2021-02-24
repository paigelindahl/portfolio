import React from 'react'
import FadeExample from './FadeExample'
import '../styles/Projects.scss';

export function Projects(props) {


  return (
    <>
      <h1 className="projects-title">PROJECTS</h1>
      <FadeExample image="https://github.com/paigelindahl/portfolio/blob/master/docs/dashboard1_iphonexrspacegrey_portrait-cropped.png?raw=true" title="UKIYO" wid="300" high="auto" text="A one stop wellness app intended to alleviate stress and promote positive feelings. Ukiyo provides a dashboard with access to meditation, yoga, gratitude journal and todo list organizer." language="React JS / Material UI / PSQL / Node / Express" />
      <FadeExample image="https://github.com/paigelindahl/portfolio/blob/master/docs/homepage-cropped.png?raw=true" title="PIZZERIA" wid="450" high="auto" text="Pizza pickup application, allowing users to order pizza online from a local pizza parlour. Admin are able to monitor orders and send an SMS using Twilio when orders are ready for pickup." language="JS / Bootstrap / PSQL / Node / Express" />
      <FadeExample image="https://github.com/paigelindahl/portfolio/blob/master/docs/ProductPage_macbookgrey_front.png?raw=true" title="JUNGLE" wid="600" high="auto" text="Mini e-commerce application. Allows users to select and purchase products using Stripe." language="ERB / Bootstrap / Ruby on Rails" />
      <FadeExample image="https://github.com/paigelindahl/portfolio/blob/master/docs/Tweeter_macbookgrey_front.png?raw=true" title="TWEETER" wid="600" high="auto" text="Single page application Twitter clone." language="HTML / CSS / JS / jQuery / AJAX / Node / Express" />
      <FadeExample image="https://github.com/paigelindahl/portfolio/blob/master/docs/URLs-homepage_macbookgrey_front.png?raw=true" title="TINYAPP" wid="600" high="auto" text="Full stack URL shortener, allows users to add, edit and delete shortened URLs that they have created." language="HTML / CSS / EJS / JS / Node / Express" />
    </>
  )
}
