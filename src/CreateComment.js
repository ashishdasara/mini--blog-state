import React from 'react'

class CreateComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {
        text: "",
        properties: {
          likes: 0,
          followers: 0
        }
      }
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleTextChange = (e) => {
    var newComment=this.state.comment;
    newComment.text = e.target.value;
    this.setState({comment: newComment});
  }
  handleEnter() {
    this.props.handleEnter(this.state.comment.text);
    var newComment=this.state.comment;
    newComment.text="";
    this.setState({comment: newComment});

  }
  render() {
    return(
      <div className="create_comment">
        <div className="container header_box">
          <h1>MiniBlog</h1>
        </div>
        <div className="container form_area">
          <textarea value={this.state.comment.text} initial-value={this.state.comment.text} onChange={this.handleTextChange} placeholder="What's on your mind?"></textarea>
          <button disabled={this.state.comment.text.trim()===""? true:false} onClick={this.handleEnter}>Post </button>
        </div>
      </div>
    )
  }
}

export default CreateComment
