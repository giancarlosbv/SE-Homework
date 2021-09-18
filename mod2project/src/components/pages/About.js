import { useState, useEffect } from 'react'

const About = () => {

    let [winWidth, setWinWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWinWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            console.log('useEffect runs: Event listener removed')
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return ( 
        <>
            <h1>About Page</h1>
            <p>Width: { winWidth }</p>
        </>
    );
}
 
export default About;