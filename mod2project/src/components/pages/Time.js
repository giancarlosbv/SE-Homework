import {useState} from 'react'
import thumbtack from '../../images/thumbtack.png'

const Time = () => {

  
let time = new Date().toLocaleTimeString()
var today = new Date()
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

const [Ctime, setCTime] = useState(time)

const updateTime =() =>{
    time = new Date().toLocaleTimeString()
    setCTime(time)
}

setInterval(updateTime, 1000)
    return (
        <div className="current">
        <img src={thumbtack} height='50vh' />
            <h1>Date and Time</h1>
            <p>Date: {date} Time: {time}</p>
        </div>
    )
}

export default Time
