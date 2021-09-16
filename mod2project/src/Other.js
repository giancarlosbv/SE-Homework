import React, { useState, useEffect } from 'react'

const Other = () => {

    let [count, setCount] = useState(0)

    useEffect(() => {

        console.log('useEffect 1')
        
        return () => console.log('cleanup running. component unmounted...')

    }, [])

    useEffect(() => {
        console.log('useEffect 2')
    }, [count])

    useEffect(() => {
        console.log('useEffect 3')
    })

    return (  
        
        <div>
            <h1>{ count }</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    );
}
 
export default Other;