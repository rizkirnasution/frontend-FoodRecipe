import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../../base/navbar/NavbarProfileTop"
import Video from "../../module/detailvideorecipe/Video"

function DetailVideoRecipe(){
    return(
      
        <div className="">
        <Navbar/>
            
            {/* <main className="mt-5">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 mt-5 ">
                <h5 className="mb-2">Coba</h5>
                {video && (
                    <video
                    // autoPlay
                    width="700"
                    className={`${styles.videos} mt-2`}
                    controls
                    >
                    <source src={video} />
                    </video>
                )}
                <h3 className={`${styles.titleVideo} mt-3 `}>{title}</h3>
                <p className="text-secondary mt-2">
                    {moment(create).format("LLLL")}
                </p>
                </div>
                <div className={`${styles.sugestion} col-lg-3 mb-5 `}>
                <h3 className={`${styles.next}`}>Next </h3>
                <div className={`${styles.imageStep} mt-3`}>
                    <img src="/assets/Rectangle 90.png" alt="" />
                    <h4 className={`${styles.step}  text-white`}>[Step 5]</h4>
                    <p className={`${styles.caption} `}>
                    Beef Steak with Curry Sauce - [Step 5] Saute condiments
                    together until turn brown
                    </p>
                    <p className={`${styles.subCaption}  text-secondary`}>
                    HanaLohana - 3 month ago
                    </p>
                </div>
                <div className={`${styles.imageStep} mt-5`}>
                    <img src="/assets/Rectangle 330.png" alt="" />
                    <h4 className={`${styles.step}`}>[Step 5]</h4>
                    <p className={`${styles.caption} `}>
                    Beef Steak with Curry Sauce - [Step 5] Saute condiments
                    together until turn brown
                    </p>
                    <p className={`${styles.subCaption}  text-secondary`}>
                    HanaLohana - 3 month ago
                    </p>
                </div>
                <div className={`${styles.imageStep} mt-5`}>
                    <img src="/assets/Rectangle 91.png" alt="" />
                    <h4 className={`${styles.step}  text-white`}>[Step 5]</h4>
                    <p className="">
                    Beef Steak with Curry Sauce - [Step 5] Saute condiments
                    together until turn brown
                    </p>
                    <p className={`${styles.subCaption}  text-secondary`}>
                    HanaLohana - 3 month ago
                    </p>
                </div>
                </div>
            </div>
            </div>
        </main> */}





         </div>
       
     
    );
}

export default DetailVideoRecipe