import React from 'react';
import FacebookProvider, { Share } from 'react-facebook';

class DisplayComment extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      liked: false,
      followed: false
    }
    this.createLink = this.createLink.bind(this);
    this.dateDisplay = this.dateDisplay.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);

  }

  createLink = (text) => {
    text=text.split(' ');
    var str=text.join('%20');
    var linkStr= "https://twitter.com/intent/tweet?text=" +str+ "&tw_p=tweetbutton&url=https://mini--blog-state.herokuapp.com/";
    return linkStr;
  }

  dateDisplay=()=> {
    var date = this.props.comment.properties.date;
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
    var hh = date.getHours()+1;
    var min = date.getMinutes();

    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

    if(hh<10) {
      hh = '0'+hh
    }

    if(min<10) {
        min = '0'+min
    }
    date = mm + '/' + dd + '/' + yyyy + ' ' + hh + ':' + min;
    return date;
  }
  toggleLike() {
      this.props.toggleLike(this.props.comment,this.state.liked);
      document.getElementById('like').style.color=this.state.liked?"black":"blue";
      this.setState({liked: this.state.liked?false:true})
  }
  toggleFollow() {
      this.props.toggleFollow(this.props.comment,this.state.followed);
      document.getElementById('follow').style.color=this.state.followed?"black":"blue";
      this.setState({followed: this.state.followed?false:true})
  }
  render() {
    return(
      <div className="container display_comment">

        <div className="comment">
          <span className="comment_text">{this.props.comment.text}</span>
          <span className="comment_date">-{this.dateDisplay()}</span>
        </div>

        <div className="comment_properties">
          <span>{this.props.comment.properties.likes} {this.props.comment.properties.likes===1?"like ":"likes "} </span>
          <span>| </span>
          <span>{this.props.comment.properties.followers} {this.props.comment.properties.followers===1?"follower":"followers"} </span>
        </div>

        <div className="buttons">
          <button data-toggle="tooltip" title="Like" onClick={this.toggleLike}>
            <span id="like" className="glyphicon glyphicon-thumbs-up"></span>
          </button>
          <button data-toggle="tooltip" title="Follow" onClick={this.toggleFollow}>
            <span id="follow" className="glyphicon glyphicon-plus"></span>
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
