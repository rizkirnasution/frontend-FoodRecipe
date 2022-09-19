import React from 'react'
import { Link } from 'react-router-dom'
import './addrecipe.css'
import Navbar from "../../../base/navbar/NavbarProfileTop"
import NavbarAfterLogin from "../../../base/navbarafterlogin/NavbarAfterLogin"
import Footer from "../../../module/footer/Footer"

function AddRecipe(){
    return(
        <>
        <NavbarAfterLogin/>
        <div className="add col-8 col-sm-8 col-md-8 col-lg-8 ff-airbnb mb-5">
          <form >
            <div className="mb-3">
              <label
                htmlFor="title"
                className="form-label me-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Required"
              >
                Title
              </label>
              <input
                type="text"
                className="form-control form-control-sm p-3"
                id="title"
                placeholder="Title"
           
                required
          
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="ingredient"
                className="form-label me-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Required"
              >
                Ingredient
              </label>
              <textarea
                className="form-control"
                id="ingredients"
                rows="10"
                placeholder="Ingredient"
             
                required
           
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo" className="form-label me-2">
                Photo
              </label>
              <input
                type="file"
                className="form-control form-control-sm p-3"
                id="photo"
                placeholder="Photo"
           
              />
            </div>
            <div className="mb-3">
              <label htmlFor="video" className="form-label me-2">
                Video
              </label>
              <input
                type="file"
                className="form-control form-control-sm p-3"
                id="video"
                placeholder="Video"
           
              />
            </div>
            <div className="d-flex justify-content-center">
       
            <button
                  type="submit"
                  className="btn w-100 text-light mb-2"
                >
                  Post
            </button>
          
            </div>
           
          </form>
 
      </div>
      <Footer/>
        </>
    )
}
export default AddRecipe