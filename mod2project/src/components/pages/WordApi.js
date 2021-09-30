import React from 'react'

const WordApi = () => {
    return (
        fetch(`https://wordsapiv1.p.rapidapi.com/words/${wordRef.current.value}/`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key": "5857d31fc6msh31bebdec004e9fep196ac1jsn638cdfcc7262"
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
            )
    )
}

export default WordApi
