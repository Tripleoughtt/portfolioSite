import React from 'react';
import ReactDOM from 'react-dom';
import AppController from './components/AppController';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import Home from "./components/Home";
import Blog from "./components/Blog";
import postPage from "./components/postPage"


ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={AppController} path="/">
      <IndexRoute component={Home} />
      <Route path="blog" component={Blog} />
      <Route path=":post" component={postPage} />
    </Route>
  </Router>
), document.getElementById('react'))
