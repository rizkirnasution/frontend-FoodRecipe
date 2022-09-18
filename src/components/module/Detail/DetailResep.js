import React from "react";
import pic from "../../../assets/detailRecipe/photo.svg";
import play from "../../../assets/detailRecipe/play.svg";
import "./Detail.css";
import comment from "../../../assets/detailRecipe/comment.png";

function Detail() {
  return (
    <div className="small-middle-container">
      <div>
        <h1 className="text-center">Loream Sandwich</h1>
        <div className="d-flex align-items-center justify-content-center my-3">
          <img src={pic} className="picture img-fluid" />
        </div>
      </div>
      <div>
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
      <div>
        <h3>Video Step</h3>
        <div>
          <button className="btn btn-warning mb-2">
            <img src={play} />
          </button>
        </div>
        <div>
          <button className="btn btn-warning mb-2">
            <img src={play} />
          </button>
        </div>
        <div>
          <button className="btn btn-warning mb-2">
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
  );
}

export default Detail;
