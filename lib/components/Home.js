import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Home extends React.Component {
  render() {
    return (
    <ReactCSSTransitionGroup transitionName="slideIn" transitionAppear={true} transitionAppearTimeout={1000}  transitionEnterTimeout={0} transitionLeaveTimeout={500}>
      <div className="homeCard">
        <h2 className="name">R I C H</h2>
        <h2 className="name">G A U T E R E A U X :</h2>
        <span className="cardText">Hi, thanks for finding me! I'm Rich Gautereaux, a Full-stack javascript developer and I love all things computer programming.  My favorite front-end framework is ReactJS and I love building Node.js servers and integrating a Mongo or MySQL database with them!</span>
      </div>
    </ReactCSSTransitionGroup>
    );
  }
}

export default Home;
