import React, { useState, useEffect } from "react";
import profile from "../../../assets/profile/profilephoto.svg";
import editIcon from "../../../assets/profile/ic-edited-profile.svg"
// import Footer from "../footer/Footer"
import { Button, Modal, Form, Container} from "react-bootstrap";
import FooterAfter from "../footer/FooterAfter"
import ProfileNavbar from "../profilenavbar/index"
import ProfileNavbarTop from "../../base/navbar/NavbarProfileTop"
import './profile.css'


const Profile =()=>{

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
      
      <>
      <ProfileNavbarTop />
      <div className="">
        
        <section className="profile ff-airbnb text-center mb-5">
          <div className="d-flex justify-content-center">
            <div className="position-relative">
              <img
                  className="picture rounded-circle"
                  src={profile}
                  alt="Profile"
              />
                <img className="icon" src={editIcon} alt="Edit Icon" onClick={handleShow}/>
              
              {/* <Button variant="warning" onClick={handleShow}>
            
              </Button> */}
            </div>
          </div>
          <p className="fs-5 mt-3">Rizki Romadhona Nasution</p>
          
        </section>
        <div className="">
        <ProfileNavbar/>
        </div>
        


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update User</Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body>
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="name"
                        name="name"
                        // value={data.name}
                        // onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="condition"
                        name="condition"
                        // value={data.condition}
                        // onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="merk"
                        name="merk"
                        // value={data.merk}
                        // onChange={handleChange}
                    />
                    <input 
                        className="form-control mt-3"
                        type="text"
                        placeholder="stock"
                        name="stock"
                        // value={data.stock}
                        // onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="tex"
                        placeholder="price"
                        name="price"
                        // value={data.price}
                        // onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="file"
                        placeholder="photo"
                        name="photo"
                        // onChange={handleUpload}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="descriptions"
                        name="descriptions"
                        // value={data.descriptions}
                        // onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="category_id"
                        name="category_id"
                        // value={data.category_id}
                        // onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="transactions_id"
                        name="transactions_id"
                        // value={data.transactions_id}
                        // onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <button type="submit" className="btn btn-primary">Create</button>
                </Modal.Footer>
            </form>
        </Modal>
      </div>
      <FooterAfter/>
      </>
   
   
    )
}

export default Profile;
