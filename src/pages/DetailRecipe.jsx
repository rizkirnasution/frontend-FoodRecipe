import React, { useEffect, useState } from "react";
import play from "../assets/detailRecipe/play.svg";
import "../components/module/detailrecipe/detailrecipe.css";
import comment from "../assets/detailRecipe/comment.png";
import NavbarAfterLogin from "../components/base/navbarafterlogin/NavbarAfterLogin";
import Footer from "../components/module/footer/Footer";
import Like from "../assets/detailRecipe/ic-likes.svg";
import Bookmark from "../assets/detailRecipe/ic-bookmark.svg";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Detail() {
  const { REACT_APP_NAME } = process.env;
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetch = async () => {
    const response = await axios.get(`http://localhost:8080/api/v1/recipe/${id}`).catch((err) => console.log(err));

    dispatch(setRecipes(response.data.data));
    console.log(response.data.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  // const splitIngredient = recipes.ingredient.split("\n");
  // console.log(splitIngredient);

  return (
    <>
      <Helmet>
        <title>{REACT_APP_NAME} - Detail Recipe</title>
      </Helmet>
      <NavbarAfterLogin />
      <div className="small-middle-container">
        <div className="content my-3">
          <h1 className="text-center">{recipes.title}</h1>
          <div class="gallerypic">
            <img src={recipes.thumbnail} height="450" width="600" alt="[Gallery Photo]" className="pic img-fluid" />
            <span class="like">
              <div>
                <img src={Like} alt="like" className="icon" />
              </div>
            </span>
            <span class="bookmark">
              <div>
                <img src={Bookmark} alt="bookmark" className="icon" />
              </div>
            </span>
          </div>
        </div>
        <div className="my-4">
          <h3>Ingredients</h3>
          {recipes.ingredient}

          {/* <ul>
            {splitIngredient.map((item) => (
              <li className="list">{item}</li>
            ))}
          </ul> */}
        </div>
        <div className="my-4">
          <h3>Video Step</h3>
          <a href="/DetailVideoRecipe">
            <button className="btn btn-warning mb-3">
              <img src={play} />
            </button>
          </a>
        </div>
        <div>
          <label for="exampleFormControlTextarea1" class="form-label">
            Comment
          </label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <div className="d-flex align-items-center justify-content-center my-3">
            <button className="btn btn-warning mb-2">Send</button>
          </div>
          <div>
            <h3>Comment</h3>
            <div className="d-flex flex-row my-4">
              <img src={comment} className="commentPic" />
              <div className="flex-column mx-3">
                <div>
                  <h6>Ayudia</h6>
                </div>
                <div>
                  <p>Nice recipe. simple and delicious, thankyou</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
