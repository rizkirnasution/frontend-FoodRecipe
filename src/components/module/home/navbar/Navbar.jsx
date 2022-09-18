import React from 'react'
import user_icon from '../../../../assets/home/User-icon.svg' 
import './navbar.css'

function Navbar() {
  return (
    <div className="container">
        <nav className="navbar  navbar-expand-lg bg-transaparent sticky-top">
        <div className="container">
        <a class="navbar-brand" href="#">Food Recipe</a>
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
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item mx-3">
                    <a className="nav-link" href="#">Add Recipe</a>
                    </li>
                    <li className="nav-item mx-3">
                    <a className="nav-link " href='#'>Profile</a>
                    </li>
                </ul>
                <div className="d-flex" >
                    <div className="container_user ">
                        <div className="container_user_img mt-4">
                            <img src={user_icon} alt="" />
                        </div> 
                        <span></span>
                    </div>
                    <p className='m-auto ms-2'><a href="#" className='text-decoration-none text-white'>Login</a></p>
                </div>
            </div>
        </div>
    </nav>
    </div>
    

  )
}

export default Navbar
