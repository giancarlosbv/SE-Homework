import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from '../Home'
  import About from '../About'
  import Profile from '../Profile'
  import Other from '../Other'
const Nav = () => {
    return (

        <Router>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/about'>About</Link></li>
                {/* <li><Link to='/contact'>Contact</Link></li> */}
                <li><Link to='/other'>Other</Link></li>
            </ul>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/profile' component={Profile} />
                {/* <Route path='/contact' component={Contact} /> */}
                <Route path='/other' component={Other} />
            </Switch>

        </Router>

    )
}

export default Nav