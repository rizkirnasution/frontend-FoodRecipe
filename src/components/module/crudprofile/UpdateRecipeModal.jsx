import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function ModalEdit({ id, title, ingredient, category}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState({
        id,
        title,
        ingredient,
        category
    });

    const [thumbnail, setThumbnail] = useState(null);

    const handleUploadThumbnail = (e)=>{
        setThumbnail(e.target.files[0]);
    };

    const [video, setVideo] = useState(null);

    const handleUploadVideo = (e)=>{
        setVideo(e.target.files[0]);
    };

    console.log(data);

    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data);
    };
    
    const handleCreate = (e)=>{
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', data.title)
        formData.append('ingredient', data.ingredient)
        formData.append('category', data.category)
        formData.append('thumbnail', thumbnail)
        formData.append('video', video)
        axios
        .put(
            `http://localhost:8080/api/v1/recipe/${id}`,
            formData,
            {
                headers:{
                    "Content-Type":"multipart/form-data",
                },
            }
        )
        .then((res)=>{
            console.log(res);
            Swal.fire("Updated!", "Product Update Succes!", "success");
            setShow(false)
        })
        .catch((err)=>{
            console.log(err)
            Swal.fire("Failed!", "Product Update Failed!", "error");
            setShow(false)
        })
    };
    
    return(
        <>
            <button
                className="btn btn-dark text-light"
                style={{ marginRight: "10px" }}
                onClick={handleShow}
            >
                Edit
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Recipe</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleCreate}>
                    <Modal.Body>
                        <input 
                            className="form-control mt-3"
                            type="text"
                            placeholder="title"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                        />
                        <input 
                            className="form-control mt-3"
                            type="text"
                            placeholder="ingredient"
                            name="ingredient"
                            value={data.ingredient}
                            onChange={handleChange}
                        />
                        <input 
                            className="form-control mt-3"
                            type="text"
                            placeholder="category"
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
                            placeholder="video"
                            name="video"
                            onChange={handleUploadVideo}
                        />
                      
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button type="submit" className="btn btn-primary">
                            Edit
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default ModalEdit;