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
    this.handleEnter=this.handleEnter.bind(this);
    this.clickLike = this.clickLike.bind(this);
  }

  clickLike(comment) {
    let index=this.state.comments.indexOf(comment)
    var commentsCopy = this.state.comments.slice();
    commentsCopy[index].properties.likes+=1;
    this.setState({comments: commentsCopy});

  }

  handleEnter(text) {
    var commentsCopy = this.state.comments.slice();
    var emptyComment = {
      text: "",
      properties: {
        likes: 0,
        shares: 0
      }
    };
    emptyComment.text=text;
    commentsCopy.push(emptyComment);
    this.setState({comments: commentsCopy});
  }


  render() {
    return(
      <div className="container">
        <CreateComment handleEnter={this.handleEnter}/>
        <DisplayAll comments={this.state.comments} clickLike={this.clickLike}/>
      </div>
    )
  }
}

export default App;
