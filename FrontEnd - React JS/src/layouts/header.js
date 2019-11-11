import React from "react"
import {Link} from "react-router-dom"

function Header(props){
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          ESAD
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/create-contact">Create Contacts</Link>
          <a className="navbar-item">View Contacts</a>
        </div>
      </div>
  </nav>
  )
}

export default Header