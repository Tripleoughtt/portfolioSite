import React from 'react';
import Navbar from './nav/Navbar.js';

class AppController extends React.Component {

  render() {
    return (
      <div>
       <Navbar />
          <div className="routerView">
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default AppController;
