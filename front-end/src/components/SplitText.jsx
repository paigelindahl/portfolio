import React from 'react';
import '../styles/SplitText.scss';
import OutlineButton from './OutlineButton';

export function SplitText(props) {


  return (
    <>
      <div className="split-text">
        <span aria-label={props.firstText} role={props.role} className="split-text">
          {props.firstText.split("").map(function (char, index) {
            let style = { "animationDelay": (index / 10) + "s" }
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>;
          })}
        </span>
        <br />
        <span aria-label={props.secondText} role={props.role} className="split-text">
          {props.secondText.split("").map(function (char, index) {
            let style = { "animationDelay": (index / 10) + "s" }
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>;
          })}
        </span>
      </div>
    </>
  )
}
