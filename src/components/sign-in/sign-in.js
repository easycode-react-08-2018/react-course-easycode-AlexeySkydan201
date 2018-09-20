import React, {Component} from 'react';
import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  browserHistory
} from "react-router-dom";
import {connect} from 'react-redux';
import './sign-in.css'
import {incrementCounter} from '../../actions';


let url3 = 'https://flatearth-api.herokuapp.com/api/v1/auth/login'
let url =  'https://flatearth-api.herokuapp.com/api/v1/auth/secret/'

var user1 = {
  user:"", 
  password:""
}


class Inn extends Component{
  state = {
	    userS: '',
	    passwordS: '',
	    status: []
  	};
 
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
   
    user1.user = userS
    user1.password = passwordS
    fetch( url3 , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user1)
        }).then(user => {
            return user.json()
        }).then(status => {
        	this.setState({status})

              fetch( url , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
             'Authorization': `Bearer ${status.message.token}`
            },
            
        }).then(user => {
            return user.json()
        }).then(secret => {
          this.setState({secret})
           const {incrementCounter}=this.props;
          //incrementCounter(status.message.token)
          incrementCounter( secret.message)
        });

        });
   
  }

  render(){
  	const {userS,passwordS,status} = this.state;
  	  
   
    return(
		<div>
	          <div id="first">
		            <center>
		            <div id="signUp"><Link to ='/sign-up' exact>Sign-Up</Link></div>
		            <div id="logo"><img src="" alt="logo" /></div>
		            </center>
	          </div>
	          <center>
		           <div id="second">
			            <center>
			              	<h3>well come flat earch</h3>
			              	<hr />
			             	
				              	<b>Username <input type="text" 
				              		value={userS}
				              		onChange={this.inputChangeUser}
				              	/></b><br />
				              	<b>Password <input type="text" 
				              		value={passwordS}
				              		onChange={this.inputChangePassword}
				             	 /></b>
				              	<div id="sigIn">
				                	<Link to ='/user' exact><button onClick={this.addToUser}>Войти</button></Link>
				                	<p><input type="checkbox" />запомнить</p>
					            </div>
					            
			            </center>
		            </div>
	          </center>
       </div> 
       )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    counter: state.counter,
    redux: 'is a power'
  };
};

const mapDispatchToProps = {
  incrementCounter,
  
};

export const In = connect(mapStateToProps, mapDispatchToProps)(Inn);


