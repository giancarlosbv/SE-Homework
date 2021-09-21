import React, { useState, useEffect } from 'react'
import thumbtack from '../../images/thumbtack.png'
const Home = () => {

    return ( 
        <div className="current">
        <img src = {thumbtack} height = '50vh'/>
            <h1>Home Page</h1>
            <p>Welcome to your corkboard!</p>
            <image src = "../images/thumbtack.png"/>
            {/* {data.map(item => <p key={item.id}>{ item.title }</p>)} */}
        </div>
    );
}
 
export default Home;