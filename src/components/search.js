import React, {Component} from 'react';
class Search extends Component{
  constructor(props){
    super(props);
    this.state = {inputValue: ''};
  }
  inputChange = (event)=> {
        this.setState({inputValue: event.target.value});
  } 
  search=()=>{
        this.props.search(this.state.inputValue);
  }

  render(){
    return( <div className="search-bar navbar">
      <div>
      <input type="text" placeholder="Search" 
               value={this.state.inputValue}
               onChange={this.inputChange}
                />
            <button
               onClick={this.search}
              >поиск</button> 
       </div>
      </div>)
  }
}
export default Search;
