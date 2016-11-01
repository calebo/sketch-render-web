import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import Navigation from './Navigation'

export default React.createClass({
  render() {
    return (
        <div>
            <h1>Brisbane Times</h1>
            <Navigation />
            
            <ul role="nav">
                <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/repos">Repos</NavLink></li>
            </ul>

            {this.props.children || <Home/>}
        </div>
    )
  }
})
