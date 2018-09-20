import React, {Component} from 'react';
import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  
} from "react-router-dom";
import './sign-up.css'

var user1 = {
  email:"", 
  user:"", 
  password:""
}
let url2 = 'https://flatearth-api.herokuapp.com/api/v1/auth/signup'
class Up extends Component{
   constructor(props){
    super(props);
    this.state = {
    emailS: '',
    userS: '',
    passwordS: '',
  };
  }
  

  inputChangeEmail = (event)=> {
    this.setState({
    emailS: event.target.value,
    });
  } 
  inputChangeUser = (event)=> {
    this.setState({
    userS: event.target.value,
    });
  } 
  inputChangePassword = (event)=> {
    this.setState({
    passwordS: event.target.value,
    });
  } 

  addToUser =()=>{
    const {emailS,userS,passwordS} = this.state;
    
    user1.email = emailS
    user1.user = userS
    user1.password = passwordS
    fetch( url2 , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user1)
        }).then(user => {
            return user.json()
        }).then(us => {
            console.log(us);
        });
    console.log(user1);
  }
    
  
 

  render(){
    const {emailS,userS,passwordS} = this.state;
    
    
    return(
			<div>
        <div id="first">
          <center>
            <div id="signIn"><Link to ='/home' exact>Sign-In</Link></div>
            <div id="logo"><img src alt="logo" /></div>
          </center>
        </div>
        <center>
          <div id="up">
            <b>email</b><br />
            <input type="text" 
              value={emailS}
              onChange={this.inputChangeEmail}
            /><br />
            <b>name</b><br />
            <input type="text"
              value={userS}
              onChange={this.inputChangeUser}
             /><br />
            <b>password</b><br />
            <input type="text" 
              value={passwordS}
              onChange={this.inputChangePassword}
            /><br />
            <button onClick={this.addToUser}>зарегистрировать</button>
          </div>
        </center>
      </div>
       )
  }
}
export default Up;