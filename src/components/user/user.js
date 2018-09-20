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
let url =  'https://flatearth-api.herokuapp.com/api/v1/auth/secret/'


class User extends Component{
  
  render(){
  
    
const {token1} = this.props;
var Li = ()=>{
   console.log(`token1`, token1)
  var obj = token1;
      var f = [];
      for (var prop in obj) {
  console.log(`obj`, obj[prop].name)
        f.push(obj[prop].name)      
    }
    console.log(`f`, f)
      return f.map((element,j) => {
       return <li >
        <div>
          {element}
        </div>
      </li>
      });
}
    return(
    		<div>
          <div id="first">
              <center>
                  <div id="signUp"><Link to ='/home' exact>Sign-In</Link></div>
                  <div id="logo"><img src="" alt="logo" /></div>
              </center>
              <div>
                          
              </div>
          </div>
          
          <ul>
          <Li/>
            
           </ul> 
          
        </div>
       )
  }
}


let mapStateToProps = (state) => {
 console.log(`stateghjkgkkg`, state.counter.counter)

  return {
    token1: state.counter.counter
  }
}
export default connect(mapStateToProps)(User);