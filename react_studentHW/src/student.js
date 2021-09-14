import React from 'react'
import Score from './score'
export default function Student(props){
  
  return(
    <div className="studentInfo">
        <h3>{props.student.name}</h3>
        <p>{props.student.bio}</p>
        <h4>Test Dates and Scores</h4>
        <p>{props.student.scores.map((scores, index)=> (
            <Score scores={scores} key = {index} />
        ))}
        </p>
    </div>
  )
};