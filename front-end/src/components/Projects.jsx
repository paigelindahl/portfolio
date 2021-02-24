import React from 'react'
import FadeExample from './FadeExample'
import '../styles/Projects.scss';

export function Projects(props) {


  return (
    <>
      <h1 className="projects-title">PROJECTS</h1>
      <FadeExample image="https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" title="UKIYO" text="A one stop wellness app intended to alleviate stress and promote positive feelings. Ukiyo provides a dashboard with access to meditation, yoga, gratitude journal and todo list organizer." language="React JS / Material UI / PSQL / Node / Express" github="https://github.com/paigelindahl/ukiyo" />
      <FadeExample image="https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" title="PIZZERIA" text="Pizza pickup application, allowing users to order pizza online from a local pizza parlour. Admin are able to monitor orders and send an SMS using Twilio when orders are ready for pickup." language="JS / Bootstrap / PSQL / Node / Express" github="https://github.com/paigelindahl/kpe" />
      <FadeExample image="https://images.unsplash.com/photo-1600854163097-3602918f7a9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fGp1bmdsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" title="JUNGLE" text="Mini e-commerce application. Allows users to select and purchase products using Stripe." language="ERB / Bootstrap / Ruby on Rails" github="https://github.com/paigelindahl/Jungle" />
      <FadeExample image="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YmlyZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" title="TWEETER" text="Single page application Twitter clone." language="HTML / CSS / JS / jQuery / AJAX / Node / Express" github="https://github.com/paigelindahl/tweeter" />
      <FadeExample image="https://images.unsplash.com/photo-1600176842418-f7c1d1035ef1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fGtleWJvYXJkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" title="TINYAPP" text="Full stack URL shortener. Allows users to add, edit and delete shortened URLs that they have generated." language="HTML / CSS / EJS / JS / Node / Express" github="https://github.com/paigelindahl/tinyapp" />
    </>
  )
}


