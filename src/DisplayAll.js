import React from 'react';
import DisplayComment from './DisplayComment'

class DisplayAll extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="display_all">
        {this.props.comments.length!==0? this.props.comments.map((comment,i) => {
            return(<DisplayComment key={i} comment={comment} clickLike={this.props.clickLike} clickFollow={this.props.clickFollow}/>);
          }):(
            <div className="display_comment">
              <p>No Comments Yet!</p>
            </div>)
        }
      </div>
    );
  }
}

export default DisplayAll;
