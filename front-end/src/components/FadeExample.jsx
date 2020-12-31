import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/FadeExample.scss';

class FadeExample extends React.Component {
  render() {
    return (
      <div>
        <Fade left>
          <div className="project-container">
            <img src={this.props.image} width={this.props.wid} height={this.props.high}/>
            <div className="text-container">
              <p className="project-text">{this.props.text}</p>
              <p className="project-text">{this.props.language}</p>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default FadeExample;
 