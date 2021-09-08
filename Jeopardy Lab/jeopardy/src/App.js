import './App.css';
import { Component } from 'react';
import React from 'react';



// Make another div in your HTML where you display the answer



// class Header extends Component{
//   render(){
//     return (
//       <div>

//       </div>
//     )
//   }
// }

// class RandomButton extends Component{
//   render(){
//     return(
//       <div> Hello World

//       </div>
//     )
//   }


// On click, have this button that will make a GET request (using fetch) to get random trivia data. Let's start you off with a win by giving you the URL: http://jservice.io/api/random
 



class App extends Component{
  state = {
    questions:{}
  }


 JeopardyQuestions=() =>{
    
    fetch("http://jservice.io/api/random?count=1")
        .then((response) => response.json())
        .then(data=> (data))
        .then(data => this.setState({questions:data[0]}))
        .catch((error) => console.log(error))
        
    return "done"
    
  }



displayQuestions =(data)=>{
//destructuring objects
   
    // console.log(question)
    // console.log(category.title)
    // console.log(`Points: ${value}`)
    
    // let question = data[0].question
    // let category = data[0].category.title
    // let points = `${data[0].value} points`
   
  }
  
  // Make a button labeled "Random Trivia Question" or "Get Question" or something descriptive.
  render(){
    console.log(this.state)
    let {question,category,value,answer} = this.state.questions
    // console.log(question,value)
    if(category){
      console.log(category.title)
    }
    return(
      <div>
      <button onClick={()=>this.JeopardyQuestions()}>Get Started</button>
      {this.state.questions&&category&&<div>{`Question: ${question}`}<br/><br/><br/><br/></div>}
      {this.state.questions&&category&&<div>{`Category: ${category.title}`}<br/><br/><br/><br/></div>}
      {this.state.questions&&category&&<div>{`Points: ${category.clues_count}`}<br/><br/><br/><br/></div>}
      {this.state.questions&&category&&<div>{`Answer: ${answer}`}<br/><br/><br/><br/></div>}
      
      
      
      </div>
    )
  }
  
}



class Question extends Component{

  // Make some html elements like a div where you will display the question, category and points. NOTE: You will need to look at the data that is returned to you and think back about how to access data from different datatypes (is it an array within an object? How do you access the info?).


  //key value pairs, question, points, category.title
  render(){
    return(
      <div><ul>

      </ul></div>
    )
  }
}
// console.log(JeopardyQuestions())

export default App;
