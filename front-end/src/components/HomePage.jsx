import React from 'react';
import '../styles/HomePage.scss'
import { SplitText } from './SplitText';
import Blocks from './Blocks';
import OutlineButton from './OutlineButton';

export function HomePage(props) {


  return (
    <>
      <div className="home-container">
        <div className="text-blocks">
          <SplitText firstText="Hi! I'm Paige," secondText="web developer." role="heading" className="home-text" />
          <Blocks className="moving-blocks" />
        </div>
        <div className="btn-container">
          <OutlineButton text="View My Projects" setValue={props.setValue} />
        </div>
      </div>


    </>
  )
}
