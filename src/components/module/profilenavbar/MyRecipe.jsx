import React from "react";
import ProfileMyRecipe1 from "../../../assets/profile/profilemyrecipe1.svg"
import ProfileMyRecipe2 from "../../../assets/profile/profilemyrecipe2.svg"
import './recipe.css'


function MyRecipe(){
    return(
        <>
        {/* <div className="action">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-2 gx-4 mt-2">
            <div className="col mt-4">
                <div className="d-flex column mb-3 mx-3">
                    <div className="card-body p-2">
                        <img
                            src={ProfileMyRecipe1}
                            alt="My Recipe"
                        />
                    </div>
                    <div className="card-body p-2">
                        <img
                            src={ProfileMyRecipe2}
                            alt="My Recipe"
                        />
                    </div>
                </div>
           
            </div>
        </div>

        </div> */}
         <div className="row row-cols-2 row-cols-lg-5 align-items-center p-3 mt-1">
      <div className="col categories g-3">
        <div className="card card-1 text-center d-flex flex-colum">
          <img src={ProfileMyRecipe1} alt="Photo1" className="img-fluid" />
          <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
            <a href="/category/{category[0].id}">
              <p className="font-category"></p>
            </a>
          </div>
        </div>
      </div> 
      <div className="col categories g-3">
        <div className="card card-2">
          <img src={ProfileMyRecipe2} alt="Photo2" className="img-fluid" />
          <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
            <p className="font-category"></p>
          </div>
        </div>
      </div>
      <div className="col categories g-3">
        <div className="card card-3">
          <img src={ProfileMyRecipe1} alt="Photo3" className="img-fluid" />
          <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
            <p className="font-category"></p>
          </div>
        </div>
      </div>
    </div>

        </>
    )
}

export default MyRecipe