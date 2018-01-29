import React from 'react';
import FacebookProvider, { Share } from 'react-facebook';

class DisplayComment extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      comment: {
        text: "",
        id: 0,
        properties: {
          likes: 0,
          shares: 0
        }
      }
    };
    this.createLink = this.createLink.bind(this);
  }

  componentWillMount() {
    let newComment = this.props.comment;
    this.setState({comment: newComment});
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
        <div className="buttons">
          <span>{this.props.comment.properties.likes} {this.props.comment.properties.likes===1?"person likes this":"people like this"} </span>
          <button onClick={()=>this.props.clickLike(this.props.comment)}>
            <span className="glyphicon glyphicon-thumbs-up"></span>
          </button>
          <FacebookProvider appId="242768822931140">
            <Share quote={this.props.comment.text}>
                <a data-toggle="tooltip" title="Share" data-placement="top" className="btn">
                  <i className="fa fa-facebook"></i>
                </a>
            </Share>
          </FacebookProvider>
          <a target="_blank" className="btn" data-toggle="tooltip" title="Tweet" data-placement="top" href={this.createLink(this.state.comment.text)}>
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default DisplayComment;
