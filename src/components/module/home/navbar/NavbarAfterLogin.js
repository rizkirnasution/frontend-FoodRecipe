import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import user_icon from '../../../../assets/home/User-icon.svg' 
import { logoutActionCreator } from '../../../../redux/action/creator/auth';
import './navbar.css'



function NavbarAfterLogin() {
    const dispacth = useDispatch()
  return (
    <div className="container">
        <nav className="navbar  navbar-expand-lg bg-transaparent sticky-top">
        <div className="container">
        <a class="navbar-brand" href="/">Food Recipe</a>
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
                    <a className="nav-link " aria-current="page" href="/home">Home</a>
                    </li>
                    <li className="nav-item mx-3">
                    <a className="nav-link" href="/addRecipe">Add Recipe</a>
                    </li>
                    <li className="nav-item mx-3">
                    <a className="nav-link " href='/profile'>Profile</a>
                    </li>
                </ul>
                <div className="d-flex" >
                    <div className="container_user ">
                        <div className="container_user_img mt-4">
                            <img src={user_icon} alt="" />
                        </div> 
                        <span></span>
                    </div>
                    {
                        localStorage.getItem("@acc_token") && (

                        <div
                        className='text-decoration-none login'>
                        <p className='m-auto ms-2 '><span 
                            
                        className='text-decoration-none text-white'
                        ><button
                        className='bg-transparent border-0 text-white me-2'
                        onClick={() => dispacth(logoutActionCreator())}

                        >Logout</button></span></p>
                        </div>
                        )
                    }
                   
                </div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default NavbarAfterLogin