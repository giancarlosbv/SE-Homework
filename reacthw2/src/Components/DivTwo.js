import React from 'react'
import DivThree from './DivThree'
const DivTwo = (props) => {
    return (
        <div>
            <DivThree name ={props.name}/>
            <DivThree name = {props.name}/>
        </div>
    )
}

export default DivTwo
