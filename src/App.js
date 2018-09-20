import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {In} from './components/sign-in/sign-in';
import Up from './components/sign-up/sign-up';
import User from './components/user/user';
import ReactDOM from 'react-dom';
import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  
} from "react-router-dom";

class App extends Component {
  render() {
    
    return (
      <div>
      
      <Route  path = "/home" component={In}/>
      <Route  path = "/sign-up" component={Up}/>
      <Route  path = "/user" component={User}/>
      </div>
    );
  }
}

export default App;
