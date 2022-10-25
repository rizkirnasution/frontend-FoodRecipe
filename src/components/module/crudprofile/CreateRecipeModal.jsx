import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { postRecipeActionCreator } from '../../../redux/action/creator/recipe';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import "./createrecipemodal.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { recipeModel } from "../../../utils/schema";
import { createFormData } from "../../../utils/form-data";

function ModalCreate({userId}) {

  const postRecipe = useSelector(state => state.recipe.post, shallowEqual)

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(recipeModel)
  });
  
  const dispatch = useDispatch()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] = useState('');
  const [video, setVideo] = useState([]);
  const [previewImage, setPreviewImage] = useState('');

  const onImageChange = (event)=>{
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setPreviewImage(URL.createObjectURL(img));
      setImage(img);
    }
  }

  const onVideChange = (event)=>{
    
    const vd = event.target.files;
    setVideo(vd);
  
  }
  const onRecipeSave = values => {
    const data = {}
        const file = {}

        data.creator_id = userId
        data.title = values?.title
        data.category = values?.category
        data.ingredient = values?.ingredient
        file.single = image
        file.multiple = video

        dispatch(postRecipeActionCreator(createFormData(file, data)))
        console.log(createFormData(file, data));
  };

  return (
    <>
      <button
        className="btn btn-warning text-white button-add"
        onClick={handleShow}
      >
        Create
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-warning text-white" closeButton>
          <Modal.Title>Create Recipe</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onRecipeSave)}>
          <Modal.Body>
            <input {...register("title")}
              className="form-control mt-3"
              type="text"
              placeholder="Recipe Name"
        
            />
            <input {...register("category")}
              className="form-control mt-3"
              type="text"
              placeholder="Category"
              
            />

              <input 
              className="form-control mt-3"
              type="file"
              placeholder="photo"
              onChange={onImageChange}
            />

            <input
              className="form-control mt-3"
              type="file"
              placeholder="video"
              multiple={true}
              onChange={onVideChange}
            />
            
            <textarea {...register("ingredient")}
              rows="4"
              cols="50"
              className="form-control mt-3"
              type="text"
              placeholder="Ingredients"
            
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
              Create
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalCreate;
