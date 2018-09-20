import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css'
import allReducers from './reducers/index'
import {store} from './store';
import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

//const store = createStore(allReducers);

ReactDOM.render(
	<Provider store ={store}>
    <BrowserRouter>
	<App/> 
	</BrowserRouter>
  </Provider>,
   document.getElementById('root'));

