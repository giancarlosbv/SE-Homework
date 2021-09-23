import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingContext } from '../context/SettingsContext'
const CountdownAnimation = ({ key = 1, timer = 20, animate = true, children}) => {

    const {stopTimer} = useContext(SettingContext)
    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration = {timer*60}
            colors ={[
                ['#FFE6CC', 0.33],
                ['#FFE6CC', 0.33],
                ['#FFE6CC', 0.33]
                
                ]}
            strokeWidth={6}
            size = {100}
            trailColor='#0C0E1B'
            onComplete={() => {
                stopTimer()
                }}
        >
            {children}
        </CountdownCircleTimer>
    )
}

export default CountdownAnimation
