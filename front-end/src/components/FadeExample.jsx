import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/FadeExample.scss';

class FadeExample extends React.Component {
  render() {
    return (
      <div>
        <Fade left>
          <div className="project-container">
            <div class="img-container">
              <div className="circle">
                <img src={this.props.image} width={this.props.wid} height={this.props.high} />
              </div>
            </div>
            <div className="text-container">
              <h4 className="project-title">{this.props.title}</h4>
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
