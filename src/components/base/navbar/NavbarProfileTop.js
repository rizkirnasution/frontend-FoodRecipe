import React from "react";
import {Link} from 'react-router-dom'



function NavbarProfileTop (){
    return(
        <div className="navbar fixed-top navbar-expand-md navbar-expand-sm navbar-expand-sm navbar-light py-2 py-md-4 mx-5 ff-airbnb">
             <ul className="navbar-nav me-auto">
        <li className="nav-item me-5">
          <Link to="/home" className="nav-link">
            <span>
              Home
            </span>
          </Link>
        </li>
          <>
            <li className="nav-item me-5">
              <Link to="/addRecipe" className="nav-link">
                <span >
                  Add Recipe
                </span>
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/profile" className="nav-link">
                <span >
                  Profile
                </span>
              </Link>
            </li>
          </>
      </ul>
        </div>


    //   <nav className="navbar navbar-expand-lg mt-3">
    //   <div className="container">
    //     {/* <a className="navbar-brand" href="#">Navbar</a> */}
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Add Recipe</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link">Profile</a>
    //         </li>
    //       </ul>
          
    //     </div>
    //   </div>
    // </nav>

            
    );
}

export default NavbarProfileTop

