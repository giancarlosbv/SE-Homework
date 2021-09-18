import React from 'react'
import DivTwo from './DivTwo'
const DivOne = (props) => {
    return (
        <div>
           <DivTwo name = {props.name}/>
        </div>
    )
}

export default DivOne
