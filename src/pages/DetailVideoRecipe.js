import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/base/navbar/NavbarProfileTop";
import NavbarAfterLogin from "../components/base/navbarafterlogin/NavbarAfterLogin";
import VideoUtama from "../assets/detailVideos/videoutama.svg";
import VideoStep1 from "../assets/detailVideos/video-step1.svg";
import VideoStep2 from "../assets/detailVideos/video-step-2.svg";
import VideoStep3 from "../assets/detailVideos/video-step-3.svg";
import Footer from "../components/module/footer/Footer";

import styles from "../components/module/detailvideorecipe/detailvideorecipe.css";
import moment from "moment";

function DetailVideoRecipe() {
  return (
    <div className="">
      <NavbarAfterLogin />

      <main className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt-5 ">
              <h5 className="mb-2">Judul Video</h5>
              {/* {video && ( */}
              <video
                // autoPlay
                width="700"
                className={`${styles.videos} mt-2`}
                controls
              >
                <source src={VideoUtama} />
              </video>
              {/* )} */}
              <h3 className={`${styles.titleVideo} mt-3 `}>Beef Steak with Curry Sauce - [Step 4] Cut the condiment and then mix it</h3>
              <p className="text-secondary mt-2">{/* {moment(create).format("LLLL")} */}</p>
            </div>
            <div className={`${styles.sugestion} col-lg-3 mb-5 mt-5`}>
              <h3 className={`${styles.next} mt-4`}>Next </h3>
              <div className={`${styles.imageStep} mt-3`}>
                <img src={VideoStep1} alt="Next Video 1" />
                <h4 className={`${styles.step}  text-white`}>[Step 5]</h4>
                <p className={`${styles.caption} `}>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</p>
                <p className={`${styles.subCaption}  text-secondary`}>HanaLohana - 3 month ago</p>
              </div>
              <div className={`${styles.imageStep} mt-5`}>
                <img src={VideoStep2} alt=" Next Video 2" />
                <h4 className={`${styles.step}`}>[Step 5]</h4>
                <p className={`${styles.caption} `}>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</p>
                <p className={`${styles.subCaption}  text-secondary`}>HanaLohana - 3 month ago</p>
              </div>
              <div className={`${styles.imageStep} mt-5`}>
                <img src={VideoStep3} alt="Next Video 3" />
                <h4 className={`${styles.step}  text-white`}>[Step 5]</h4>
                <p className={`${styles.caption} `}>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</p>
                <p className={`${styles.subCaption}  text-secondary`}>HanaLohana - 3 month ago</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DetailVideoRecipe;
