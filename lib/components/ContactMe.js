import React from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class ContactMe extends React.Component {
  render() {
    return (
    <ReactCSSTransitionGroup transitionName="slideIn" transitionAppear={true} transitionAppearTimeout={1000}  transitionEnterTimeout={0} transitionLeaveTimeout={500}>
      <h2 className="name">C O N T A C T</h2>
      <h2 className="name">M E</h2>
      <div className="contactCard col-xs-10 col-xs-offset-1 ">
        <div className="col-xs-12">
          <h4 className="name col-xs-6 col-xs-offset-3">
            <label >Y O U R &nbsp; E M A I L : &nbsp; </label>
          </h4>
            <input type="email" className="input col-xs-6 col-xs-offset-3" id="email" ref="contactEmail" />
        </div>
        <div className="col-xs-12">
           <h4 className="name col-xs-8 col-xs-offset-2">
             <label className="messageLabel">Y O U R &nbsp; M E S S A G E : &nbsp; </label>
           </h4>
           <textarea ref="messageBody" id='messageBody' className="emailMessage col-xs-8 col-xs-offset-2" cols="30" rows="10"></textarea>
        </div>
        <div className="btn emailSend">Send Email!</div>
      </div>
      <div className="col-xs-1"></div>
    </ReactCSSTransitionGroup>
    );
  }
}

export default ContactMe;
