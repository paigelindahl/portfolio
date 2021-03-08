import React from 'react';
import "../styles/HomepageButton.scss";

export function HomepageButton(props) {

  const handleButton = () => {
    props.setValue(1);
  }

  return (
    <>
      <div className="project-button">
        <button type="button" className="glow-on-hover" onClick={handleButton}>{props.text}</button>
      </div>

    </>
  )
}
