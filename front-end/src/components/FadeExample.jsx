import React from 'react';
import Fade from 'react-reveal/Fade';
import { Button } from "@chakra-ui/react"
import { FaGithub } from 'react-icons/fa';

import '../styles/FadeExample.scss';

class FadeExample extends React.Component {
  render() {
    return (
      <div>
        <Fade left>
          <div className="project-container">
            <div className="img-container">
              <div className="circle" style={{ backgroundImage: `url(${this.props.image})` }}>
                {/* <img src={this.props.image} width={this.props.wid} height={this.props.high} /> */}
              </div>
            </div>
            <div className="text-container">
              <h2 className="project-title">{this.props.title}</h2>
              <hr />
              <p className="project-text">{this.props.language}</p>
              <p className="project-text">{this.props.text}</p>
              <div className="github-btn-container">
                <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default FadeExample;
