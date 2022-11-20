import React, { useEffect, useRef, useState } from "react";
import play from "../assets/detailRecipe/play.svg";
import "../components/module/detailrecipe/detailrecipe.css";
import comment from "../assets/detailRecipe/comment.png";
import NavbarAfterLogin from "../components/base/navbarafterlogin/NavbarAfterLogin";
import Footer from "../components/module/footer/Footer";
import Like from "../assets/detailRecipe/ic-likes.svg";
import Bookmark from "../assets/detailRecipe/ic-bookmark.svg";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getRecipeByIdActionCreator } from "../redux/action/creator/recipe";

function Detail() {
  const navigate = useNavigate();
  const { REACT_APP_NAME } = process.env;
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe.getById, shallowEqual);
  const [detailRecipe, setDetailRecipe] = useState({});
  const isMounted = useRef();

  useEffect(() => {
    if (!isMounted.current) {
      dispatch(getRecipeByIdActionCreator(id));
      isMounted.current = true;
    } else {
      setDetailRecipe(recipe?.response);
    }
  }, [recipe]);

  // const splitIngredient = detailRecipe?.ingredient.split("\n");
  // console.log(splitIngredient);
  console.log(detailRecipe?.ingredient);
  console.log(detailRecipe);

  return (
    <>
      <Helmet>
        <title>{REACT_APP_NAME} - Detail Recipe</title>
      </Helmet>
      <NavbarAfterLogin />
      <div className="small-middle-container">
        <div className="content my-3">
          <h1 className="text-center">{detailRecipe?.title}</h1>
          <div class="gallerypic">
            <img src={detailRecipe?.thumbnail} height="450" width="600" alt={detailRecipe?.title} className="pic img-fluid" />
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
          {detailRecipe?.ingredient}

          {/* <ul>
            {splitIngredient.map((item) => (
              <li className="list">{item}</li>
            ))}
          </ul> */}
        </div>
        <div className="my-4">
        <h3>Video Step</h3>
          <button className="btn btn-warning mb-3" onClick={() => navigate(`/DetailVideoRecipe/${detailRecipe?.id}`)}>
            <img src={play} />
          </button>
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
