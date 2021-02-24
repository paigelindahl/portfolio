import React from 'react';
import Fade from 'react-reveal/Fade';
import { Button } from "@chakra-ui/react"
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom'

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
              <p className="project-text language">{this.props.language}</p>
              <p className="project-text">{this.props.text}</p>
              <div className="github-btn-container">
                <Link to={{ pathname: `${this.props.github}` }} target="_blank">
                  <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
                    GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default FadeExample;
