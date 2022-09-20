import React from "react";
import pic from "../assets/detailRecipe/photo.svg";
import play from "../assets/detailRecipe/play.svg";
import "../components/module/detailrecipe/detailrecipe.css";
import comment from "../assets/detailRecipe/comment.png";
import NavbarAfterLogin from "../components/base/navbarafterlogin/NavbarAfterLogin";
import Footer from "../components/module/footer/Footer";
import Like from "../assets/detailRecipe/ic-likes.svg";
import Bookmark from "../assets/detailRecipe/ic-bookmark.svg";
import { Helmet } from "react-helmet-async";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { likerPostModel } from "../utils/schema";
import { useDidUpdate } from "../custom-hooks/common";
// import { postLikerActionCreator } from "../redux/action/creator/liker";
import { toast } from "react-toastify";
import { image } from "fontawesome";
import { createFormData } from "../utils/form-data";

const { REACT_APP_NAME } = process.env;

function Detail() {
  const liker = useSelector((state) => state.liker, shallowEqual);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(likerPostModel),
  });
  const onSubmit = (value) => {
    const files = {
      picture: image,
    };
    createFormData(files, value);
    // dispatch(postLikerActionCreator(value));
  };
  const toastId = React.useRef(null);

  useDidUpdate(() => {
    const toastOptions = {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };

    if (liker.post?.isPending) {
      toast.dismiss();

      toastId.current = toast.loading("Loading...", toastOptions);
    }

    if (liker.post?.isRejected) {
      toast.dismiss();

      toastId.current = toast.error(liker.post?.errorMessage, toastOptions);
    }

    if (liker.post?.isFulfilled) {
      toast.dismiss();

      toastId.current = toast.success("You like this recipe", toastOptions);
    }

    if (errors.recipe_id) {
      toast.dismiss(toastId.current);

      toast.error(`Error: ${errors.recipe_id?.message}`, toastOptions);
    }
  }, [liker, errors]);
  return (
    <>
      <Helmet>
        <title>{REACT_APP_NAME} - Detail Recipe</title>
      </Helmet>
      <NavbarAfterLogin />
      <div className="small-middle-container">
        <div className="content my-3">
          <h1 className="text-center">Loream Sandwich</h1>
          <div class="gallerypic">
            <img src={pic} height="450" width="600" alt="[Gallery Photo]" className="pic img-fluid" />
            <span class="like">
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <div onClick={handleSubmit(onSubmit)}>
                <img src={Like} alt="like" className="icon" {...register("recipe_id")} />
              </div>
              {/* <input type="submit" className="invisible" {...register("recipe_id")} /> */}
              {/* </form> */}
            </span>
            <span class="bookmark">
              <div onClick={handleSubmit(onSubmit)}>
                <img src={Bookmark} alt="bookmark" className="icon" {...register("recipe_id")} />
              </div>
            </span>
          </div>
        </div>
        <div className="my-4">
          <h3>Ingredients</h3>
          <ul>
            <li>2 Eggs</li>
            <li>2 Tbsp</li>
            <li>3 Slices Bread</li>
            <li>A Little Butter</li>
            <li>1/3 Carton Of Cress</li>
            <li>2-3 Slices Of Tomato Or A Lettuce Leaf And A Slice Of Ham Or Cheese</li>
            <li>Crisps, To Serve</li>
          </ul>
        </div>
        <div className="my-4">
          <h3>Video Step</h3>
          <div>
            <button className="btn btn-warning mb-3">
              <img src={play} />
            </button>
          </div>
          <div>
            <button className="btn btn-warning mb-3">
              <img src={play} />
            </button>
          </div>
          <div>
            <button className="btn btn-warning mb-3">
              <img src={play} />
            </button>
          </div>
          <div>
            <button className="btn btn-warning mb-3">
              <img src={play} />
            </button>
          </div>
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
