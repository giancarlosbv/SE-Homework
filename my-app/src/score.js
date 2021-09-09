import React from "react"

export default function Score(props){
    return(
        <div className="studentScores">
            <h3>{props.scores.date} score received: {props.scores.score}</h3>
        </div>
    )
}