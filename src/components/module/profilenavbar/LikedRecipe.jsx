import React from "react";
import ProfileMyRecipe1 from "../../../assets/profile/profilemyrecipe1.svg"
import ProfileMyRecipe2 from "../../../assets/profile/profilemyrecipe2.svg"


function LikedRecipe(){
    return(
        <>
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

export default LikedRecipe