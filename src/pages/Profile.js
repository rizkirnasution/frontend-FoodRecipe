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
import ProfileNavbarTop from "../components/base/navbar/NavbarProfileTop";
import ModalCreate from "../components/module/crudprofile/CreateRecipeModal";
import NavbarAfterLogin from "../components/base/navbarafterlogin/NavbarAfterLogin";
import ModalUpdate from "../components/module/crudprofile/UpdateRecipeModal";

const Profile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [recipes, setRecipes] = useState([]);
  // const [getDetailProfile, setGetDetailProfile] = useState([]);
  const dispatch = useDispatch();

  //update profile
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    datas();
  }, []);

  const datas = async (id) => {
    const token = localStorage.getItem("token");
    const response = await axios.put(
      `https://food-recipe-production.up.railway.app/api/v1/profile/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data.name);
  };
  console.log(user);

  //recipes
  const fetch = async () => {
    const response = await axios
      .get(`https://food-recipe-production.up.railway.app/api/v1/recipe`)
      .catch((err) => console.log(err));

    dispatch(setRecipes(response.data.data));
    console.log(response.data);
    // return
  };

  console.log(recipes);
  useEffect(() => {
    fetch();
  }, []);

  // const getProfile = async () => {
  //   const token = localStorage.getItem("token");
  //   const response = await axios.get(`http://localhost:8080/api/v1/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   dispatch(setGetDetailProfile(response.data.data.name));
  //   console.log(response.data.data.name);
  // };

  // // const { fetchProfile } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   getProfile();
  // }, []);
  // console.log(user);

  const deleteProduct = async (id) => {
    Swal.fire({
      title: "Sure to Delete This Product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ffc107",
      confirmButtonText: "Yes",
      cancelButtonColor: "#6c757d",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(
            `https://food-recipe-production.up.railway.app/api/v1/recipe/${id}`
          )
          .then((res) => {
            fetch();
            // dispatch(deleteProduct(res));
            // navigate('/product')
            Swal.fire("Deleted!", "Product Delete Success!", "success");
            // console.log(res);
            setShow(false);
          })
          .catch((err) => {
            Swal.fire("Failed!", "Product Delete Failed!", "error");
            setShow(false);
          });
      }
    });
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
                src={profile}
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
          <p className="fs-5 mt-3">Rizki Nasution</p>
        </section>

        <div className="table-responsive mx-5 mb-5">
          <ModalCreate />
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
              {recipes.map((item, index) => (
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
                    <ModalUpdate />
                    <button
                      onClick={() => deleteProduct(item.id)}
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
          <Modal.Header closeButton>
            <Modal.Title className="bg-warning text-white">
              Edit Account
            </Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <input
                className="form-control mt-3"
                type="text"
                placeholder="Name"
                name="name"
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