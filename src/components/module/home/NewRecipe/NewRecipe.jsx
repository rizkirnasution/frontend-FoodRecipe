import React from 'react'
import burger1 from "../../../../assets/home/burger1.svg";

function NewRecipe() {
  return (
    <div className="container ">
        <div className="col-sm-3 popular">
            <p>New Recipe</p> 
        </div>
        <div className="row mt-5 new-recipe">
            <div className="col-sm-8 img-recipe mt-5">
                <img src={burger1} alt=""/>
            </div>
            <div className="col-sm-4 align-self-center text-recipe ">
                <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
                <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                <button className='btn btn-warning text-white mt-3'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default NewRecipe
