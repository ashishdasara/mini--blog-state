import React from 'react';
import DisplayComment from './DisplayComment'

class DisplayAll extends React.Component {

  render() {
    var cmnts=[];
    let comments=this.props.comments
    if (comments.length>0) {
      for(let i=0; i<comments.length; i++) {
        cmnts[i] = <DisplayComment key={i} comment={comments[i]} toggleLike={this.props.toggleLike} toggleFollow={this.props.toggleFollow} comments={comments}/>
      }
    }
    var display = cmnts.reverse();
    return (
      <div className="display_all">
        {
          display.length>0? display.map((comment,i)=>
            {return comment}
          ):(
            <div className="display_comment">
              <p className="comment">No Comments Yet!</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default DisplayAll;
