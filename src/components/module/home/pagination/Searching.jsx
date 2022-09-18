import React from 'react'
import { Link } from 'react-router-dom'
import "./search.css"
import banana_pop from '../../../../assets/home/banana_pop.svg';
import Footer from "../footer/FooterTopandBottom"
import { Dropdown } from "react-bootstrap";

function Searching() {
  return (
    <>
        <div className="container">
          <nav className="navbar bg-tranparent mt-3">
            <div className="container d-flex ">
              <Link to="/home" className='a-search'>
                <p className="navbar-brand a-search ">Food Recipe</p>
              </Link>
              <div className="d-flex search-container ">
                <form className="d-flex form-search" role="search">
                  <input className="form-control input-search " type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-warning btn-custom" type="submit">Search</button>
                </form>
              </div>
            </div>
            
          </nav>
          <div className='my-5'>
            <Dropdown>
              <Dropdown.Toggle className='btn-yellow yellow ms-3' variant = "warning" id="dropdown-basic">
                Sorting Name
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <button className="btn btn-info me-3" >
                    Name Z-A
                  </button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button className="btn btn-success">
                    Name A-Z
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
          <div className="container justify-content-center my-5">
              <div className="row row-cols-sm-2 row-cols-md-3 g-4 ">
                    <img src={banana_pop} alt=""  />
                    <img src={banana_pop} alt=""  />
                    <img src={banana_pop} alt=""  />
                    <img src={banana_pop} alt=""  />
              </div>
          </div>
          <div className="d-flex flex-row my-5 justify-content-evenly">
            <button className="btn yellow btn-nav ">
              <span>&larr;</span>
            </button>
            <p>
              {/* {pagination.currentPage}/{pagination.totalPage} */}
              1/2
            </p>
            <button className="btn yellow btn-nav" >
              &rarr;
            </button>
          </div>
        </div>
          <Footer/>
    </>
    

  )
}

export default Searching