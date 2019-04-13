import React from 'react';
import ReactDOM from "react-dom";
import {render} from 'react-dom'
import './style/index.css'

import { Route, BrowserRouter as Router } from "react-router-dom";

import Content from './components/Content'
import Header from './components/Header'
import Login from './components/Login'
import Profile from './components/Profile'


class App extends React.PureComponent {
    render() {
      return (
        <Router>
          <div className='App'>
            <Header/>
              <Content>
              <Route exact path='/' component={Login} />
              <Route exact path='/profile' component={Profile} />
              </Content>
          </div>
        </Router>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById("root"));


