import React from 'react';
import FacebookProvider, { Share } from 'react-facebook';

class DisplayComment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      followed: false
    }
  }

  createLink = (text) => {
    text=text.split(' ');
    let str=text.join('%20');
    let linkStr= "https://twitter.com/intent/tweet?text=" +str+ "&tw_p=tweetbutton&url=https://mini--blog-state.herokuapp.com/";
    return linkStr;
  }

  toggleClick = (e) => {
    let length = this.props.comments.length;
    let index = this.props.comments.indexOf(this.props.comment);
    let target_cname = e.target.className;
    let target = document.getElementsByClassName(target_cname);
    let action = "";
    let condition = "";

    if (target_cname === "liker") {
      this.setState({liked: this.state.liked? false:true});
      action = "like";
      condition = this.state.liked;
    }
    else {
      this.setState({followed: this.state.followed? false:true});
      action = "follow";
      condition = this.state.followed;
    }

    this.props.toggleClick(this.props.comment, action, condition);
    target[length-index-1].firstChild.style.color =
      target[length-index-1].firstChild.style.color === "blue"? "black":"blue";
  }

  render() {

    let likes = this.props.comment.properties.likes;
    let followers = this.props.comment.properties.followers;
    return(
      <div className = "container display_comment">

        <div className = "comment">
          <span className = "comment_text">{this.props.comment.text}</span>
          <span className = "comment_date">-{this.props.comment.properties.date.toLocaleString()}</span>
        </div>

        <div className = "comment_properties">
          <span>{likes} {likes === 1? "like " : "likes "} </span>
          <span>| </span>
          <span>{followers} {followers === 1? "follower":"followers"} </span>
        </div>

        <div className="buttons">

          <button className = "liker" data-toggle = "tooltip" title = {this.state.liked? "Unlike":"Like"} onClick = {this.toggleClick}>
            <span className = "glyphicon glyphicon-thumbs-up"></span>
          </button>

          <button className = "follower" data-toggle = "tooltip" title = {this.state.followed? "Unfollow":"Follow"} onClick = {this.toggleClick}>
            <span className = "glyphicon glyphicon-plus"></span>
          </button>

          <FacebookProvider appId = "242768822931140">
            <Share quote = {this.props.comment.text}>
              <a data-toggle = "tooltip" title = "Share" className = "btn">
                <i className = "fa fa-facebook"></i>
              </a>
            </Share>
          </FacebookProvider>

          <a target = "_blank" className ="btn" data-toggle = "tooltip" title = "Tweet" href = {this.createLink(this.props.comment.text)}>
            <i className = "fa fa-twitter"></i>
          </a>

        </div>
      </div>
    );
  }
}

export default DisplayComment;
