import React, { useContext, useState } from 'react'
import { SettingContext } from '../context/SettingsContext'
import Button from './Button'

const SetPomodoro = () => {

    const {updateExecute} = useContext(SettingContext)
    //default values of the 3 separate timers
    const [newTimer, setNewTimer] = useState({
        work: 25,
        short: 5,
        long: 15,
        active: 'work'
    })

    const handleChange = input => {
        //allows user to input new times for timer
        const { name, value } = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                    
                })

                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })

                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })

                break;
                default:
                    break;
        }
        console.log(newTimer)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateExecute(newTimer)
    }

    return (
        //pomodoro form
        <div className="form-container">
            <form noValidate>
                <div className='input-wrapper'>
                    <input className="input" name='work' onChange={handleChange} value={newTimer.work} />
                    <input className="input" name='shortBreak' onChange={handleChange} value={newTimer.short} />
                    <input className="input" name='longBreak' onChange={handleChange} value={newTimer.long} />
                </div>
        {/* set timer button */}
                <Button title='Set Timer' _callback={handleSubmit} />

            </form>
        </div>
    )
}

export default SetPomodoro
