import React from 'react';
import FacebookProvider, { Share } from 'react-facebook';

class DisplayComment extends React.Component {

  constructor(props) {
    super(props);

    this.createLink = this.createLink.bind(this);
  }

  createLink = (text) => {
    text=text.split(' ');
    var str=text.join('%20');
    var linkStr= "https://twitter.com/intent/tweet?text="+str+"&tw_p=tweetbutton&url=https://mini--blog-state.herokuapp.com/";
    return linkStr;
  }

  render() {
    return(
      <div className="container display_comment">
        <p>{this.props.comment.text}</p>
        <span>{this.props.comment.properties.likes} {this.props.comment.properties.likes===1?"like ":"likes "} </span>
        <span>| </span>
        <span>{this.props.comment.properties.followers} {this.props.comment.properties.likes===1?"follower":"followers"} </span>

        <div className="buttons">
          <button onClick={()=>this.props.clickLike(this.props.comment)}>
            <span className="glyphicon glyphicon-thumbs-up"></span>
          </button>

          <button onClick={()=>this.props.clickFollow(this.props.comment)}>
            <span className="glyphicon glyphicon-plus"></span>
          </button>

          <FacebookProvider appId="242768822931140">
            <Share quote={this.props.comment.text}>
                <a data-toggle="tooltip" title="Share" data-placement="top" className="btn">
                  <i className="fa fa-facebook"></i>
                </a>
            </Share>
          </FacebookProvider>

          <a target="_blank" className="btn" data-toggle="tooltip" title="Tweet" data-placement="top" href={this.createLink(this.props.comment.text)}>
            <i className="fa fa-twitter"></i>
          </a>

        </div>
      </div>
    );
  }
}

export default DisplayComment;
