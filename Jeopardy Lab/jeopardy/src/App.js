import './App.css';
import { Component } from 'react';
import { render } from 'react-dom';
class Header extends Component{
  render(){
    return (
      <div>

      </div>
    )
  }
}

class RandomButton extends Component{
  render(){
    return(
      <div> Hello World

      </div>
    )
  }

  JeopardyQuestions(params) {
    fetch("http://jservice.io/api/random?count=10")
        .then((response) => response.json())
        .then(data => console.log(data))
        // .then((data) => displayAnime(data))
        .catch((error) => console.log(error))
    return "done"
  }

}
class App extends Component{
  render(){
    return(
      <div>

      </div>
    )
  }
}
console.log(JeopardyQuestions)

export default App;
