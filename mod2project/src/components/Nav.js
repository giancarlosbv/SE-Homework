import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/Quote'
import TodoList from './pages/Todo'
import Word from './pages/Word'
import thumbtack from '../images/thumbtack.png'
import Time from './pages/Time';
const Nav = () => {
    return (

        <Router>


            <Link to='/' className="nav1 nav"><img src={thumbtack} height='50vh' />Home</Link>
            <Link to='/toDo' className="nav2 nav"><img src={thumbtack} height='50vh' />To-Do</Link>
            <Link to='/quote' className="nav3 nav"><img src={thumbtack} height='50vh' />Quotes to Ponder</Link>
            <Link to='/word' className="nav4 nav"><img src={thumbtack} height='50vh' />Post-it Dictionary</Link>
            <Link to='/time' className="nav5 nav"><img src={thumbtack} height='50vh' />Date and Time</Link>
            {/* <Link to='/word' className="nav6 nav"><img src={thumbtack} height='50vh' />Other</Link> */}


            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/quote' component={About} />
                <Route path='/toDo' component={TodoList} />
                <Route path='/word' component={Word} />
                <Route path='/time' component={Time} />
            </Switch>

        </Router>

    )
}

export default Nav
