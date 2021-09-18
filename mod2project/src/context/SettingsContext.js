import React, { createContext, useState } from 'react'

export const SettingContext = createContext()


const SettingsContextProvider = (props) => {
    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    const startTimer = () => setStartAnimate(true)
    const pauseTimer = () => setStartAnimate(false)
    const stopTimer = () => setStartAnimate(false)

    const updateExecute = (updatedSettings) => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    const setTimerTime = evaluate => {
        switch (evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work)
                break;
            case 'short':
                setPomodoro(evaluate.short)
                break;
            case 'long':
                setPomodoro(evaluate.long)
                break;

            default:
                setPomodoro(0)
                break;
        }
    }
    return (
        <SettingContext.Provider value={{ stopTimer, updateExecute }}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingsContextProvider
