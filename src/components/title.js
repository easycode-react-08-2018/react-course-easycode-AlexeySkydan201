import React, {Component} from 'react';
class Title extends Component{
  container(){

  }
  render(){
    var {first,} = this.props;

if (first == undefined) {
        return (
            <div>
                Loading...
            </div>
        )
    }else{
      let videoId = "https://www.youtube.com/embed/"+first.id.videoId;
       return ( <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="random" src={videoId} />
        </div>
        <div className="details">
          <div><h2>{first.snippet.title}</h2></div>
          <div><p>{first.snippet.description}</p></div>
        </div>
      </div>
      )
    }
    
      
  }
}
 export default Title;