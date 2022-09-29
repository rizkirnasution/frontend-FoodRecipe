import React, { useState, useEffect } from "react";
import profile from "../assets/profile/profilephoto.svg";
import editIcon from "../assets/profile/ic-edited-profile.svg";
// import Footer from "../footer/Footer"
import { Button, Modal, Form, Container } from "react-bootstrap";
import FooterAfter from "../components/module/footer/FooterAfter";
import ProfileNavbar from "../components/module/profilenavbar/index";
import NavbarAfterLogin from "../components/base/navbarafterlogin/NavbarAfterLogin";
import ProfileNavbarTop from "../components/base/navbar/NavbarProfileTop";
import "../components/module/profile/profile.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useDidUpdate } from "../custom-hooks/common";
import { getProfileActionCreator } from "../redux/action/creator/profile";

const Profile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [profiles, setProfiles] = useState()
  const profile = useSelector((state) => state.profile.get, shallowEqual);

  // useEffect(() => {
  //   dispatch(getProfileActionCreator());
  // }, [profile]);
  useEffect(() =>{
    dispatch(getProfileActionCreator())
}, [])
  useDidUpdate(() =>{
    if(profile?.isFulfilled){
        setProfiles(profile?.response)
    }
}, [profile])
console.log(profiles)
  // useDidUpdate(() => {
  //   dispatch(getProfileActionCreator());
  // }, []);

  return (
    <>
      {/* <ProfileNavbarTop /> */}
      <NavbarAfterLogin />
      <div className="container">
        <section className="profile ff-airbnb text-center mb-5">
          <div className="d-flex justify-content-center">
            <div className="position-relative">
              <img className="picture rounded-circle" src={profile} alt="Profile" />
              <img className="icon" src={editIcon} alt="Edit Icon" onClick={handleShow} />

              {/* <Button variant="warning" onClick={handleShow}>
            
              </Button> */}
            </div>
          </div>
          <p className="fs-5 mt-3">Rizki Romadhona Nasution</p>
        </section>
        <div className="">
          <ProfileNavbar />
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
                placeholder="No HP"
                name="nohp"
                // value={data.name}
                // onChange={handleChange}
              />

              <input
                className="form-control mt-3"
                type="file"
                placeholder="photo"
                name="photo"
                // onChange={handleUpload}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <button type="submit" className="btn btn-update">
                Update
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
