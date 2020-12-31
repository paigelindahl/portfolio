import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeExample extends React.Component {
  render() {
    return (
      <div>
        <Fade left>
          <div>
            <img src="https://github.com/saadxislam/ukiyo/blob/master/docs/dashboard.jpg?raw=true" width="250" height="500"/>
            <p>This is Ukiyo</p>
          </div>
        </Fade>
      </div>
    );
  }
}

export default FadeExample;
 