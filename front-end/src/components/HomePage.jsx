import React from 'react';
import '../styles/HomePage.scss'
import { SplitText } from './SplitText';

export function HomePage(props) {
  

  return (
    <>
    <div className="homepage-background">
     <SplitText firstText="Hi! I'm Paige," secondText="web developer." role="heading" />
    </div>
    </>
  )
}
