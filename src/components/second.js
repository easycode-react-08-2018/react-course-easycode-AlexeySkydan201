import React, {Component} from 'react';
class Second extends Component{
  constructor(props){
    super(props);
  }
  changeI=(i)=>{
      this.props.changeI(i);  
  }
  render(){
    var {second,}=this.props;
    var {i,}=this.props;
    var {changeI,}=this.props;
   
    var Li = ()=>{
    	return second.map((element,j) => {
       // console.log(`i j`,i,j)
        if(j != i){
          return <li className="list-group-item">
            <div className="video-list media" onClick={(e) => this.changeI(j, e)}>
              <div className="video-list media">
                <div className="media-left">
                  <img className="media-object" src={element.snippet.thumbnails.default.url} 
                      
                  />
                </div>
              </div>
              <div className="media-body">
                <div className="media-heading">{element.snippet.title}</div>
              </div>
            </div>
          </li>
        }
	        
	    });
    }
    return (
    	<ul className="col-md-4 list-group">
        	<Li/>
      	</ul>
    )  
  }
}
 export default Second;