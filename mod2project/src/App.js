// import CountdownAnimation from "./components/CountdownAnimation";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SetPomodoro from "./components/SetPomodoro";

function App() {
  return (
    <div className='container'>
      <h1>Pomodoro</h1>
      <p>slogan</p>
      
      <SetPomodoro/>
      {/* <CountdownCircleTimer/> */}
    </div>
  );
}

export default App;
