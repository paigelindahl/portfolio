import React from 'react';
import '../styles/Button.scss';

export function Button(props) {
  const handleButton = () => {
    console.log('this is props', props.next);
    let page = parseInt(props.next);
    props.setValue(page);
  }


  return (
    <>

      <div class="btn btn-one" onClick={handleButton}>
        <span>{props.text}</span>
      </div>

    </>
  )
}
