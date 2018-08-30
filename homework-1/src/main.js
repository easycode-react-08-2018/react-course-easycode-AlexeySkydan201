import React from 'react';
import ReactDOM from 'react-dom';
import style from './file.css'
import users from './user';
import appJSX from './app';
const mountNode = document.getElementById('app');
var App = (props) => {
    var p = props.frameworks.map(element => {
        return appJSX(element.fullName, element.avatarUrl, element.birthdate, element.gender, element.address, element.email);

    });
    return (p)

};

ReactDOM.render( < App frameworks = { users }
        /> , mountNode);