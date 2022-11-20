import React, { useEffect, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import NavbarAfterLogin from "../components/base/navbarafterlogin/NavbarAfterLogin";
import Footer from "../components/module/footer/Footer";
import styles from "../components/module/detailvideorecipe/detailvideorecipe.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getRecipeByIdActionCreator,
  getRecipeByUserIdActionCreator,
} from "../redux/action/creator/recipe";

import "../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";

function DetailVideoRecipe() {
  const [videos, setVideos] = useState("");
  const { recipeid } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe.getById, shallowEqual);
  const [detailRecipe, setDetailRecipe] = useState({});
  const isMounted = useRef();

  useEffect(() => {
    if (!isMounted.current) {
      dispatch(getRecipeByIdActionCreator(recipeid));
      isMounted.current = true;
    } else {
      setDetailRecipe(recipe?.response);
    }
  }, [recipe]);

  // const splitIngredient = detailRecipe?.ingredient.split("\n");
  // console.log(splitIngredient);

  console.log(detailRecipe?.thumbnail);
  return (
    <div className="">
      <NavbarAfterLogin />

      <main className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt-5 ">
              <h5 className="mb-2">{detailRecipe?.title}</h5>
              <Player
                playsInline
                poster={detailRecipe?.thumbnail}
                src={videos}
              />
              ;<p className="text-secondary mt-2"></p>
            </div>
            <div className={`${styles.sugestion} col-lg-3 mb-5 mt-5`}>
              <h3 className={`${styles.next} mt-4`}>Next </h3>
              {detailRecipe?.videos?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles.imageStep} mt-3`}
                    onClick={() => {
                      setVideos(item.url);
                    }}
                  >
                    <img src={item.thumbnail} alt="Next Video 1" />
                    <h4 className={`${styles.step}  text-white`}>[Step 5]</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DetailVideoRecipe;
