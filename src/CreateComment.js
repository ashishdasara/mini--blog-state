import React from 'react'

class CreateComment extends React.Component {
  constructor() {
    super();

    this.state = {
      comment: {
        text: "",
        properties: {
          likes: 0,
          followers: 0,
          date: ""
        }
      }
    };
  }

  handleTextChange = (e) => {
    let newComment=this.state.comment;
    newComment.text = e.target.value;
    this.setState({comment: newComment});
  }

  handleEnter = () => {
    let newComment=this.state.comment;
    newComment.properties.date = new Date();
    this.setState({comment: newComment});
    this.props.handleEnter(this.state.comment.text,this.state.comment.properties.date);
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
