import axios from "axios";
import Swal from "sweetalert2";
// import Footer from "../footer/Footer"
import "../components/module/profile/profile.css";
import React, { useState, useEffect } from "react";
import profile from "../assets/profile/profilephoto.svg";
import editIcon from "../assets/profile/ic-edited-profile.svg";
import { Button, Modal, Form, Container } from "react-bootstrap";
import FooterAfter from "../components/module/footer/FooterAfter";
import ProfileNavbar from "../components/module/profilenavbar/index";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useDidUpdate } from '../custom-hooks/common';
import { deleteRecipeActionCreator, getRecipeByUserIdActionCreator } from '../redux/action/creator/recipe';
import { getProfileActionCreator, putProfileActionCreator } from '../redux/action/creator/profile';
import ProfileNavbarTop from "../components/base/navbar/NavbarProfileTop";
import ModalCreate from "../components/module/crudprofile/CreateRecipeModal";
import NavbarAfterLogin from "../components/base/navbarafterlogin/NavbarAfterLogin";
import ModalUpdate from "../components/module/crudprofile/UpdateRecipeModal";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { profileModel } from "../utils/schema";
import { createFormData } from "../utils/form-data";


const Profile = () => {
  const getProfile = useSelector(state => state.profile.get, shallowEqual)
  const putProfile = useSelector(state => state.profile.put, shallowEqual)
  
 
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(profileModel)
  });
  
  const dispatch = useDispatch()
  const getRecipeByUser = useSelector(state => state.recipe.getByUserId, shallowEqual)
  const postRecipe = useSelector(state => state.recipe.post, shallowEqual)
  const putRecipe = useSelector(state => state.recipe.put, shallowEqual)
  const deleteRecipe = useSelector(state => state.recipe.delete, shallowEqual)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  const onProfileSave = values => {
    const data = {}
        const fileImage = {}

        data.name = values?.name
        fileImage.single = image

        dispatch(putProfileActionCreator({
          id : getProfile.response?.id,
          value : createFormData(fileImage, data)
        }))
  };

  const onImageChange = (event)=>{
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setPreviewImage(URL.createObjectURL(img));
      setImage(img);
    }
  }

  useEffect(() =>{
    dispatch(getProfileActionCreator())
  }, [])

  useDidUpdate(() =>{
    if(putProfile?.isFulfilled){
      dispatch(getProfileActionCreator())

    }
    if(getProfile?.isFulfilled || postRecipe?.isFulfilled || putRecipe?.isFulfilled || deleteRecipe?.isFulfilled){
      dispatch(getRecipeByUserIdActionCreator(getProfile.response?.id))
    }

  }, [putProfile, getProfile, postRecipe, putRecipe, deleteRecipe])

  console.log(previewImage)

  const onDeleteRecipe = (id) => {
   dispatch(deleteRecipeActionCreator(id))
  };
  return (
    <>
      {/* <ProfileNavbarTop /> */}

      <NavbarAfterLogin />
      <div className="container">
        <section className="profile ff-airbnb text-center mb-5">
          <div className="d-flex justify-content-center">
            <div className="position-relative">
              <img
                className="picture rounded-circle"
                src={getProfile.response?.picture || `https://ui-avatars.com/api/?name=${getProfile.response?.name}`}
                alt="Profile"
              />
              <img
                className="icon"
                src={editIcon}
                alt="Edit Icon"
                onClick={handleShow}
              />

              {/* <Button variant="warning" onClick={handleShow}>
            
              </Button> */}
            </div>
          </div>
          <p className="fs-5 mt-3">{getProfile.response?.name}</p>
        </section>

        <div className="table-responsive mx-5 mb-5">
          <ModalCreate userId={getProfile.response?.id}/>
          <table className="table align-middle text-center mb-5">
            <thead className="bg-warning text-white ">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Title</th>
                <th scope="col">Category</th>
                <th scope="col">Photo</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {getRecipeByUser.response?.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>

                  <td>
                    <img
                      className=""
                      src={item.thumbnail}
                      alt=""
                      width={80}
                      height={55}
                    />
                  </td>
                  <td>
                    <ModalUpdate recipeId={item.id}/>
                    <button
                      onClick={() => onDeleteRecipe(item.id)}
                      className="btn btn-danger mx-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="">
          <ProfileNavbar />
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="bg-warning">
            <Modal.Title className="text-white">
              Edit Account
            </Modal.Title>
          </Modal.Header>
         <form onSubmit={handleSubmit(onProfileSave)}>
            <Modal.Body>
              <input {...register("name")}
                className="form-control mt-3"
                type="text"
                placeholder="Name"
                defaultValue={getProfile.response?.name}
                // onChange={handleChange}
              />

              <input
                className="form-control mt-3"
                type="file"
                placeholder="photo"
                onChange={onImageChange}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="btn btn-secondary button-close"
                onClick={handleClose}
              >
                Close
              </Button>
              <button
                type="submit"
                className="btn btn-warning text-white button-add"
              >
                Edit
              </button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
      <FooterAfter />
    </>
  );
};

export default Profile;