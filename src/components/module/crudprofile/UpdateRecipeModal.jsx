import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getRecipeByIdActionCreator, putRecipeActionCreator } from '../../../redux/action/creator/recipe';
import { useDidUpdate } from '../../../custom-hooks/common';
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import "./updaterecipemodal.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { recipeModel } from "../../../utils/schema";
import { createFormData } from "../../../utils/form-data";

function ModalEdit({ recipeId }) {
  const getRecipeById = useSelector(state => state.recipe.getById, shallowEqual)

  const putRecipe = useSelector(state => state.recipe.put, shallowEqual)
  const dispatch = useDispatch()

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(recipeModel)
  });

  const [image, setImage] = useState('');
  const [video, setVideo] = useState([]);
  const [previewImage, setPreviewImage] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        // const fileVideo = {}

        data.title = values?.title
        data.category = values?.category
        data.ingredient = values?.ingredient
        file.single = image
        // file.multiple = video

        dispatch(putRecipeActionCreator({
          id : getRecipeById.response?.id,
          value : createFormData(file, data)

        }))
        console.log(createFormData(file, data));
  };

  useEffect(() =>{
    dispatch(getRecipeByIdActionCreator(recipeId))
  }, [recipeId])

  useDidUpdate(() =>{
   
    if(putRecipe?.isFulfilled){
      dispatch(getRecipeByIdActionCreator(recipeId))
    }

  }, [putRecipe])

  
  return (
    <>
      <button
        className="btn btn-secondary text-light"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        Edit
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-warning text-white" closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onRecipeSave)}>
          <Modal.Body>
            <input {...register("title")}
              className="form-control mt-3"
              type="text"
              placeholder="Recipe Name"
              defaultValue={getRecipeById.response?.title}
            />
            <input {...register("category")}
              className="form-control mt-3"
              type="text"
              placeholder="Category"
              defaultValue={getRecipeById.response?.category}
            />
            
            <input 
              className="form-control mt-3"
              type="file"
              placeholder="photo"
              onChange={onImageChange}
            />

            {/* <input
              className="form-control mt-3"
              type="file"
              placeholder="video"
              multiple={true}
              onChange={onVideChange}
            /> */}

            <textarea {...register("ingredient")}
              rows="4"
              cols="50"
              className="form-control mt-3"
              type="text"
              placeholder="Ingredients"
              
              defaultValue={getRecipeById.response?.ingredient}
      
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
              Update
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalEdit;
