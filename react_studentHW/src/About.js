import React from "react";
import { Component } from "react";

const divStyle = {
    color:'black'
}

class About extends Component{

    render(){
        return(
            <div style = {divStyle}>
                <h2>About Page</h2>
                <main>
                    <p>This is the home page</p>
                </main>
            </div>
        )
    }
}

export default About