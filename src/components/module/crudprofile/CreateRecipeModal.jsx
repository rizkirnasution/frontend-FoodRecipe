import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import "./createrecipemodal.css";

function ModalCreate() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    title: "",
    ingredient: "",
    category: "",
  });

  const [thumbnail, setThumbnail] = useState(null);

  const handleUploadThumbnail = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const [video_thumbnail, setVideoThumbnail] = useState(null);

  const handleUploadVideo = (e) => {
    setVideoThumbnail(e.target.files[0]);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleCreate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("ingredient", data.ingredient);
    formData.append("category", data.category);
    formData.append("thumbnail", thumbnail);
    formData.append("video_thumbnail", video_thumbnail);

    axios
      .post(
        "https://food-recipe-production.up.railway.app/api/v1/recipe",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        Swal.fire("Created!", "Product Created Success!", "success");
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Failed!", "Product Create Failed!", "error");
        setShow(false);
      });
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
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleCreate}>
          <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Recipe Name"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="Category"
              name="category"
              value={data.category}
              onChange={handleChange}
            />

            <input
              className="form-control mt-3"
              type="file"
              placeholder="photo"
              name="photo"
              onChange={handleUploadThumbnail}
            />

            <input
              className="form-control mt-3"
              type="file"
              placeholder="video thumbnail"
              name="video_thumbnail"
              onChange={handleUploadVideo}
            />
            <textarea
              rows="4"
              cols="50"
              className="form-control mt-3"
              type="text"
              placeholder="Ingredients"
              name="ingredient"
              value={data.ingredient}
              onChange={handleChange}
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
