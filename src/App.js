import React from 'react';
import './App.css';
import CreateComment from './CreateComment'
import DisplayAll from './DisplayAll'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      comments: [],
      items: []
    };
  }

  // toggleLike = (comment,index,liked) => {
  //   var commentsCopy = this.state.comments.slice();
  //   liked===false? commentsCopy[index].properties.likes+=1 :commentsCopy[index].properties.likes-=1;
  //   this.setState({comments: commentsCopy});
  // }
  //
  // toggleFollow = (comment,index,followed) => {
  //   var commentsCopy = this.state.comments.slice();
  //   followed===false? commentsCopy[index].properties.followers+=1 :commentsCopy[index].properties.followers-=1;
  //   this.setState({comments: commentsCopy});
  // }
  toggleClick = (comment, action, condition) => {

    let commentsCopy = this.state.comments.slice();
    let index = this.state.comments.indexOf(comment);

    if (action === "like") {
      condition === false? commentsCopy[index].properties.likes += 1: commentsCopy[index].properties.likes-=1;
    }
    else {
      condition===false? commentsCopy[index].properties.followers += 1: commentsCopy[index].properties.followers-=1;
    }
    this.setState({comments: commentsCopy});
  }

  handleEnter = (text,date) => {
    var commentsCopy = this.state.comments.slice();
    var emptyComment = {
      text: "",
      properties: {
        likes: 0,
        followers: 0,
        date: 0
      }
    };
    emptyComment.text=text;
    emptyComment.properties.date=date;
    commentsCopy.push(emptyComment);
    this.setState({comments: commentsCopy});
  }


  render() {
    return(
      <div className="container">
        <CreateComment handleEnter={this.handleEnter}/>
        <DisplayAll comments={this.state.comments} toggleLike={this.toggleLike} toggleFollow={this.toggleFollow} toggleClick={this.toggleClick}/>
      </div>
    )
  }
}

export default App;
