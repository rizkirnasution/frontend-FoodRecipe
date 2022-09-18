import React from "react";
import MyRecipe from "./MyRecipe";
import LikedRecipe from "./LikedRecipe";
import SavedRecipe from "./SavedRecipe";
import './recipe.css'

function ProfileNavbar(){
  
    return(
        <section className="recipe mx-4">
          <nav>
            <div className="nav nav-tabs mx-2" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">My Recipe</button>
              <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Like Recipe</button>
              <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Saved Recipe</button>

            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
            <MyRecipe />
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
            <LikedRecipe />
            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
            <SavedRecipe/>
            </div>
          </div>
        
      </section>

   
    );
  }

export default ProfileNavbar