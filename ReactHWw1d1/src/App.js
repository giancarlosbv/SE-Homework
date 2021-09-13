// import logo from './logo.svg';
import './App.css';
import Box from './Box';

//exportByName must be within curly brackets


//step by step as you create components, create the relevant files with said 
//component must be a function or class ?
//create a function that returns a container div [MUST USE "className"] 
//use parentheses after return for JSX
//
function App() {
  return (
    <div className="App">
    <Box title = 'reviews' value = '1,281' className = "reviews"/>
    <Box title = 'Average Rating' value = '4.6' className = "averageRating"/>
    <Box title = 'sidebar' value = '' className = "sidebar"/>    
    <Box title = 'Sentiment Analysis' value = '960' className = "sentimentAnalysis"/>
    <Box title = 'visitors' value = '821' className = "visitors"/>
  
      {/*this is where the first 3 items will go <Wish/>
      <Wish here/>
      <Wish and here/> */}
      {/* grid will make all of these into one area together<Wish/>
      <Wish/>
      <Wish/>
      <Wish/>
      <Wish/>
      <Wish/> */}
    </div>
  )
}

export default App;
