import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar is-dark">
      <div className="container">

        <div className="navbar-brand">
          <Link to="/"> Home</Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
          Quizzes
            </a>
            <div className="navbar-dropdown">
              <Link to="/quiz-1" className="navbar-item">
            Quiz 1
              </Link>
              <a className="navbar-item">
            Quiz 2
              </a>
              <a className="navbar-item">
            Quiz 3
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
            Report an issue
              </a>
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


