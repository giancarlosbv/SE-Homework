// import CountdownAnimation from "./components/CountdownAnimation";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SetPomodoro from "./components/SetPomodoro";

import Nav from "./components/Nav";

  function App() {
    return (
      <div>
      <div className='container'>

<h1>Pomodoro</h1>
<p>slogan</p>

<SetPomodoro />
{/* <CountdownCircleTimer/> */}
</div>
        <Nav/>
        


        
        </div>
    );
  }

export default App;

