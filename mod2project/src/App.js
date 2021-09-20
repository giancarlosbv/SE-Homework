import CountdownAnimation from "./components/CountdownAnimation";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SetPomodoro from "./components/SetPomodoro";
import { useContext, useEffect } from "react";
import Nav from "./components/Nav";
import { SettingContext } from "./context/SettingsContext";
import Button from "./components/Button";


  function App() {
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
      <div>
      <div className='container'>

<h1>Pomodoro</h1>
<p>slogan</p>
{pomodoro == 0 ?
<SetPomodoro /> :
<>
<ul classname ='labels'>
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
{/* <CountdownCircleTimer/> */}
</div>
        <Nav/>
        


        
        </div>
    );
  }

export default App;

