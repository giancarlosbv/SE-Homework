import React, {createContext, useState} from "react"
import DivOne from "./Components/DivOne"
const stateContext = React.createContext(

  {
    tardis: {
      name: 'Time and Relative Dimension in Space',
      caps: false,
    }

  })
const App = (props) => {

  const [state, setState] = useState({

    tardis: {
      name: 'Time and Relative Dimension in Space',
      caps: false,
    }

  })

const changeIt = (text) => {
    if (state.tardis.caps) {
      setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }


  return (
    <div>
      <DivOne name={state.name} />
    </div>
  )

}


//     have it render a div
// move the h3 to inside the div in this component
// work on passing the data from state down
// work on getting the click function work properly

export default App