import { useState, useEffect } from 'react'
import thumbtack from '../../images/thumbtack.png'
const About = () => {


    const [quote,setQuote] = useState([])

      // const Quote_API = 'https://quotes15.p.rapidapi.com/quotes/random/'

      useEffect(()=> {
        console.log('useEffect runs: API fetch')
        fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "5857d31fc6msh31bebdec004e9fep196ac1jsn638cdfcc7262"
	}
})
.then((response) => 
	response.json()
)
.then((data) => 
	setQuote(data.content)
)
.catch((err) => 
	console.error("err")
);



      }, [])

      const handleSubmit = e => {
          e.preventDefault()
          fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "5857d31fc6msh31bebdec004e9fep196ac1jsn638cdfcc7262"
	}
})
.then((response) => 
	response.json()
)
.then((data) => 
	setQuote(data.content)
)
.catch((err) => 
	console.error("err")
);
      }

    return ( 
        <div className = "current">
        <img src = {thumbtack} height = '50vh'/>
            <h1>Quotes to Ponder</h1>
            <p>{quote}</p>
        
        <button onClick={handleSubmit}>New Quote</button>

       
        </div>
        
    );
}
 
export default About;