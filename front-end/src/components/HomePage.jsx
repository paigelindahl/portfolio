import React from 'react';
import '../styles/HomePage.scss'
import { SplitText } from './SplitText';
import Blocks from './Blocks';
import { HomepageButton } from './HomepageButton';

export function HomePage(props) {


  return (
    <>
      <div className="home-container">
        <div className="animation-container">
          <Blocks className="moving-blocks" />
        </div>
        <div className="moving-text-container">
          <SplitText firstText="Hi! I'm Paige," secondText="web developer." role="heading" className="home-text" />
        </div>
        <div className="btn-container">
          <HomepageButton text="View My Projects" setValue={props.setValue} />
        </div>
      </div>


    </>
  )
}
