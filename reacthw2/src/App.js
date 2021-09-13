import { Component } from 'react';

class App extends Component {
  render() {
    return(
        <div>
            <Div1/>
        </div>
    )
}
}


class Div1 extends Component{
    render() {
        return(
            <div>
                <Div2/>
            </div>
        )
    }
}
    class Div2 extends Component{
        render() {
            return(
                <div>
                    <Div3/>
                    <Div3/>
                    <Div3/>
                  
                </div>
            )
        }
    }
        class Div3 extends Component{
                    
        state = {
        tardis: {
          name: 'Time and Relative Dimension in Space',
          caps: false,
        }
      }
    
    
    changeIt = (text) => {
      if (this.state.tardis.caps) {
        this.setState({
          tardis: {
            name: text.toLowerCase(),
            caps: false
          }
        })
      } else {
        this.setState({
          tardis: {
            name: text.toUpperCase(),
            caps: true
          }
        })
      }
    }

    render(){
        return (
            <div>
            <h3>
            {this.state.tardis.name}</h3>
            <button onClick={() => this.changeIt(this.state.tardis.name)}>Change it!</button>
            </div>
        )
    }
  }
                    
                
            
//     have it render a div
// move the h3 to inside the div in this component
// work on passing the data from state down
// work on getting the click function work properly

  export default App