import React, { useState } from 'react'
import { SettingContext } from "../../context/SettingsContext";
import Button from "../Button"
import CountdownAnimation from "../CountdownAnimation";
import SetPomodoro from "../SetPomodoro";
import { useContext, useEffect } from "react";
import thumbtack from '../../images/thumbtack.png'


const Pomodoro = () => {
    const {
        pomodoro,
        executing,
        setCurrentTimer,
        SettingBtn,
        children,
        startAnimate,
        startTimer,
        pauseTimer,
        updateExecute
      } = useContext(SettingContext)
      useEffect(()=> updateExecute(executing), [executing, startAnimate])


    return (
        <div className='pomodoro-container'>
        <img src = {thumbtack} height = '50vh'/>
        <h1>Pomodoro</h1>
        <div className="quote-container"><p>Pomodoro-ble</p></div>
        {pomodoro === 0 ?
        <SetPomodoro /> :
        <>
        <ul className ='labels'>
          <li>
            <Button 
              title='Work'
              activeClass={executing.active === 'work' && 'active-label'}
              _callback = {() => setCurrentTimer('work')}
            />
          </li>
          <li>
            <Button 
              title='Short Break'
              activeClass={executing.active === 'short' && 'active-label'}
              _callback = {() => setCurrentTimer('short')}
            />
          </li>
          <li>
            <Button 
              title='Long Break'
              activeClass={executing.active === 'long' && 'active-label'}
              _callback = {() => setCurrentTimer('long')}
            />
          </li>
        </ul>
        <Button title = 'Settings' _callback = {SettingBtn} />
        <div className = 'time-container'>
          <div className = "time-wrapper">
            <CountdownAnimation 
            key = {pomodoro}
            timer = {pomodoro}
            animate = {startAnimate}
            >
        {children}
            </CountdownAnimation>
          </div>
        </div>
        <div className = 'button-swrapper'>
          <Button title ='Start' className = {startAnimate && 'active'} _callback = {startTimer}/>
          <Button title ='Pause' className = {startAnimate && 'active'} _callback = {pauseTimer}/>
        </div>
        </>
        }
        
        </div>
            
        
    )
}

export default Pomodoro



