import { useState, useEffect, useRef } from 'react'

const Profile = () => {

    let [rgb, setRgb] = useState([255,255,255])
    let [count, setCount] = useState(0)

    // React.createRef()
    
    let mount = useRef()
    let renderCount = useRef(0)

    useEffect(() => {
        renderCount.current++
        console.log(renderCount)

        if (!mount.current) {
            mount.current = true
            return
        }


        console.log(mount)

        console.log('useEffect runs')
    }, [rgb, count])

    const changeTheme = () => setRgb([randomNum(), randomNum(), randomNum()])
    const randomNum = () => Math.floor(Math.random() * 255)
    const increment = () => setCount(count + 1)

    return ( 
        <div className='profile' style={{ backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`}}>
            <h1>Profile Page</h1>
            <h2>{ count }</h2>
            <button onClick={changeTheme}>Change Theme</button>
            <button onClick={increment}>Add</button>
        </div>
    );
}
 
export default Profile;