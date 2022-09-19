import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className="container mt-3">
        <nav className="navbar navbar-expand-lg bg-transaparent sticky-top">
        <div className="container">
    
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-3">
                    {/* <Link to="/home" >
                         <a className="nav-link" aria-current="page" href="#">Home</a>
                    </Link> */}
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                    </li>
                    <li className="nav-item mx-3">
                    <a className="nav-link" href="/addRecipe">Add Recipe</a>
                    </li>
                    <li className="nav-item mx-3">
                    <a className="nav-link" href='/profile'>Profile</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    

  )
}

export default Navbar
