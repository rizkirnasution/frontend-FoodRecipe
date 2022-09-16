import React from 'react'
import { Link } from 'react-router-dom'
import './addrecipe.css'
import Navbar from "../../../base/navbar/NavbarProfileTop"
import Footer from "../../../module/footer/Footer"

function AddRecipe(){
    return(
        <>
        <Navbar/>
        <div className="add mb-5 ff-airbnb">
        {/* add */}
        {/* <section className="add ff-airbnb"> */}
          {/* {errors.length > 0 && (
            <div className="alert alert-danger mx-0">
              <ul className="m-0">
                {errors.map((error, index) => (
                  <li key={index}>{error.msg}</li>
                ))}
              </ul>
            </div>
          )} */}
          <form>
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
                // onChange={inputChangeHandler}
                required
                // value={form.title}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="ingredients"
                className="form-label me-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Required"
              >
                Ingredients
              </label>
              <textarea
                className="form-control"
                id="ingredients"
                rows="10"
                placeholder="Ingredients"
                // onChange={inputChangeHandler}
                required
                // defaultValue={form.ingredients}
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
                // onChange={photoChangeHandler}
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
                // onChange={videoChangeHandler}
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
        {/* </section> */}
      </div>
      <Footer/>
        </>
    )
}
export default AddRecipe