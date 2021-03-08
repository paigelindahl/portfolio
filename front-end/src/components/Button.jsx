import React from 'react';
import '../styles/Button.scss';

export function Button(props) {
  const handleButton = () => {
    let page = parseInt(props.next);
    props.setValue(page);
  }


  return (
    <>

      <div className="btn btn-one" onClick={handleButton}>
        <span>{props.text}</span>
      </div>

    </>
  )
}
