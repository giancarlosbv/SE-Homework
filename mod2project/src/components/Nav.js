import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import TodoList from './pages/Todo'
import Other from './pages/Other'
import thumbtack from '../images/thumbtack.png'
const Nav = () => {
    return (

        <Router>


            <Link to='/' className="nav1 nav"><img src={thumbtack} height='50vh' />Home</Link>
            <Link to='/toDo' className="nav2 nav"><img src={thumbtack} height='50vh' />To-Do</Link>
            <Link to='/about' className="nav3 nav"><img src={thumbtack} height='50vh' />About</Link>
            <Link to='/other' className="nav4 nav"><img src={thumbtack} height='50vh' />Other</Link>
            <Link to='/other' className="nav5 nav"><img src={thumbtack} height='50vh' />Other</Link>
            <Link to='/other' className="nav6 nav"><img src={thumbtack} height='50vh' />Other</Link>


            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/toDo' component={TodoList} />
                {/* <Route path='/contact' component={Contact} /> */}
                <Route path='/other' component={Other} />
            </Switch>

        </Router>

    )
}

export default Nav
