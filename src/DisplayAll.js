import React from 'react';
import DisplayComment from './DisplayComment'

class DisplayAll extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      comments: [],
      items: []
    }
  }
  componentWillMount() {
    this.setState({comments: this.props.comments});
  }
  render() {
    return (
      <div className="display_all">
        {this.props.comments.length!==0? this.props.comments.map((comment,i) => {
            return(<DisplayComment key={i} comment={comment} clickLike={this.props.clickLike}/>);
          }):(<p className="no_comments">No Comments Yet!</p>)
        }
      </div>
    );
  }
}

export default DisplayAll;
