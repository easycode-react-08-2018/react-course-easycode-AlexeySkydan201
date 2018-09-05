import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import Second from './components/second';
import Search from './components/search';



const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;
class App extends Component {
  constructor(){
	  super();
	  this.state={
			data: [],
			inputValue: 'pop',
			i: 0,
		};
		YTSearch({ key: API_KEY, term: this.state.inputValue }, data => {
    		this.setState({data})
  			// videoId - https://www.youtube.com/embed/:videoId
		});
  	}
  search=(s)=>{
  	YTSearch({ key: API_KEY, term: s }, data => {
    		this.setState({data})
  		});
  }
  changeI=(id)=>{
      this.setState({i: id});
  }  
  render() {	
  	let first = this.state.data[this.state.i];
	return (
		
      <main className="container">
      <Search search={this.search}
		
      />
          <div className="row">
          <Title first = {first}/>
          <Second second = {this.state.data}
          		  i= {this.state.i}
          		  changeI= {this.changeI}
          />
          </div>
        </main>
    );
  }
}

export default App;
