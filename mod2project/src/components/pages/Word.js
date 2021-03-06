import React, { useState, useEffect, useRef } from 'react'
import thumbtack from '../../images/thumbtack.png'
import useLocalStorage from './useLocalStorage'

const Word = () => {

    // const envprocess = process.env.NODE_ENV


    const [dictionary, setDictionary] = useState({})

//     useEffect(()=> {
//         console.log('useEffect runs: API fetch')
//         fetch("https://wordsapiv1.p.rapidapi.com/words/${wordRef.current.value}/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
// 		"x-rapidapi-key": "5857d31fc6msh31bebdec004e9fep196ac1jsn638cdfcc7262"
// 	}
// })
// .then((response) => 
// 	response.json()
// )
// .then((data) => 
// 	setDictionary(data)
// )
// .catch((err) => 
// 	console.error("err")
// );



    //   }, [])
    // const [dictionary, setDictionary] = useLocalStorage('saveDefinition',{}
    //     // results: [definition:""]
    // )

    let wordRef = useRef()
    let testVariable = 'run'
    // let word = wordRef.current.value


    const handleSubmit = e => {
        e.preventDefault()
        console.log(wordRef.current.value, 'line 14')
        var rapidApiKey = process.env.REACT_APP_WORD_API_KEY;


        fetch(`https://wordsapiv1.p.rapidapi.com/words/${wordRef.current.value}/`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": rapidApiKey
            }
        })
            .then((response) =>
                response.json()
            )
            .then((data) =>
                setDictionary(data)
            )
            .catch((err) =>
                console.error("err")
            );

        // return (
        // <div>
        //     {dictionary.results.map((list, index) =>
        //         <ul>
        //             <li key={index}>{list.definition}</li>
        //         </ul>
        //     )}</div>
        // )
    }
    // console.log(dictionary)
    // console.log(dictionary.results[0].definition)
    // let wordDisplay = {worddictionary.results.definition}
    // console.log(wordDisplay)
    const renderDictionary = () => {
        if (Object.keys(dictionary).length === 0)
            return null 
        else return (
            <div>
                {dictionary.results.map((list, index) =>
                    <ul>
                        <li key={index}>{list.definition}</li>
                    </ul>
                )}</div>
        )


    }


    return (

        <div className="current">
            <img src={thumbtack} height='50vh' />
            <h1>Dictionary on demand</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="word">Choose a word:</label>
                <input
                    id="word"
                    ref={wordRef}
                    type="text"
                    required
                />
                <button>Define</button>
            </form>
            {/* {renderDictionary()} UNCOMMENT THIS WHEN FINISHED*/}


        </div>
    );
}

export default Word;