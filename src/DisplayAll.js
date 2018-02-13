import React from 'react';
import DisplayComment from './DisplayComment'

class DisplayAll extends React.Component {

  render() {
    return (
      <div className="display_all">
        {this.props.comments.length!==0? this.props.comments.map((comment,i) => {
          return(
            <DisplayComment key={i} comment={comment} toggleLike={this.props.toggleLike} toggleFollow={this.props.toggleFollow}/>
        )}):(
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
