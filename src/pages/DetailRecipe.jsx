import React, {useState} from "react";
import {Link} from "react-router-dom"
import {Image } from "react-bootstrap"
import Navbar from "../components/base/navbar/NavbarProfileTop"
import Footer from "../components/module/footer/Footer"
import IcBookmark from "../assets/detailRecipe/ic-bookmark.svg"
import IcLikes from "../assets/detailRecipe/ic-likes.svg"
import IcPlay from "../assets/detailRecipe/ic-play.svg"
import IcProfileComments from "../assets/detailRecipe/ic-profilecomments.svg"
import Comments from "../assets/detailRecipe/ic-comments.svg"
// import Image from "next/image";
import Photo from "../assets/detailRecipe/photo.svg"

import styles from '../components/module/detailvideorecipe/detailvideorecipe.css'

function DetailRecipe(){

    const [imagePreview, setImagePreview] = useState("");
    return(
        <>
        

        <Navbar/>
       
                <main className="mt-5">
                <div className="container slide">
                <div className="row">
                    <div className="col-lg-12">
                    <h1 className="text-center mt-5">Cara Membuat Sandwhich</h1>
                    {/* {imagePreview && (
                        <Image
                        src={Photo}
                        width={500}
                        height={500}
                        layout="responsive"
                        alt="Picture of the resep"
                        className={`${styles.imageCover} img img-responsive`}
                        />
                    )} */}
                        <img src={Photo}  width={800} height={800}
                        //   layout="responsive"
                        alt="Picture of the resep"
                        className={`${styles.imageCover}`}/>

                    <div className={`${styles.captionLogo}`}>
                        <button className={`${styles.simpan} btn`}>
                        <img
                            src={IcBookmark}
                            width="25px"
                            alt=""
                            className={styles.icon}
                        />
                        </button>
                        <button className={`${styles.tangan} btn ms-2`}>
                        <img
                            src={IcLikes}
                            width="30px"
                            alt=""
                            className={styles.icon}
                        />
                        </button>
                    </div>
                    </div>
                    <div className="col-lg-4  mt-5">
                    <h4 className={`${styles.titleIng}`}>Ingredients</h4>
                    <ul className={`${styles.ingrediens}`}>
                        {/* {!ingrediens ? (
                        <p>Loading...</p>
                        ) : (
                        ingrediens.map((ingredient, idx) => {
                            return <li key={idx}>{ingredient}</li>;
                        })
                        )} */}
                    </ul>
                    </div>
                    <div className={`${styles.videoPlay} col-lg-12 `}>
                    <h3 className={`${styles.videoStep}`}>Video Step</h3>
                    <div className={`${styles.play}`}>
                        <Link href={`/detailRecipe/id`}>
                        <button className={`${styles.play} btn btn-warning `}>
                            <img src={IcPlay} width="10px" alt="Photo comments" />
                        </button>
                        </Link>
                    </div>
                    </div>
                    <div className="col-lg-12  mt-5">
                    <div className="form-floating">
                        <textarea
                        className={`${styles.coment} form-control`}
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        ></textarea>
                        <label htmlFor="floatingTextarea2">Comments</label>
                        <button className={`${styles.send} btn btn-warning `}>
                        Send
                        </button>
                    </div>
                    </div>
                    <div className="col-lg-1">
                    <h5 className={`${styles.coments}`}>Comment</h5>
                    <img
                        className={`${styles.imgComent}`}
                        src={Comments}
                        alt=""
                    />
                    </div>
                    <div className={`${styles.comen} col-lg-5 `}>
                    <h5>Rizki</h5>
                    <p>Nice recipe. simple and delicious, thankyou</p>
                    </div>
                </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default DetailRecipe