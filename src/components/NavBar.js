import React from 'react'
import { Link } from 'react-router-dom'
import ring from '../game-assets/ring.png'
import arrow from '../game-assets/arrow.png'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">

        <div className="navbar-brand">
          <Link to="/" className="home-nav"> <img src={ring} className="ring"/> Home</Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar link">
              <p className="navbar-menu">Menu <img src={arrow} className="arrow"/> </p>
            </a>
            <div className="navbar-dropdown">
              <Link to="/quiz-1" className="navbar-item">
            Quiz 1
              </Link>
              <Link to="quiz-2" className="navbar-item">
            Quiz 2
              </Link>
              
              <hr className="navbar-divider" />
              <a className="navbar-item">
                <Link to="/resources" className="navbar-item">
            Resources
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar


