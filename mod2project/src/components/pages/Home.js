import React, { useState, useEffect } from 'react'
import thumbtack from '../../images/thumbtack.png'
const Home = () => {

    return ( 
        <div className="current">
        <img src = {thumbtack} height = '50vh'/>
            <h1>Welcome to Corkboard</h1>
            <p>A bit-sized way to keep your tasks on track.</p>
            <p>Click somewhere to get started</p>
            {/* {data.map(item => <p key={item.id}>{ item.title }</p>)} */}
        </div>
    );
}
 
export default Home;