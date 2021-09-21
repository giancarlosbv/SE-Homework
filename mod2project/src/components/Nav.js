import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './pages/Home'
  import About from './pages/About'
  import Profile from './pages/Profile'
  import Other from './pages/Other'
const Nav = () => {
    return (

        <Router>

            <div className = "nav-container">
                <div className= "nav1"><Link to='/'>Home</Link></div>
                <div className="nav2"><Link to='/profile'>Profile</Link></div>
                <div className= "nav3"><Link to='/about'>About</Link></div>
                {/* <div><Link to='/contact'>Contact</Link></div> */}
                <div className= "nav4"><Link to='/other'>Other</Link></div>
                <div className= "nav5"><Link to='/other'>Other</Link></div>
                <div className= "nav6"><Link to='/other'>Other</Link></div>
            </div>

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
