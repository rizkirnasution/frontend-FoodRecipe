import React from 'react';
import daun from '../../../assets/home/Daun.svg';
import burger1 from "../../../assets/home/burger1.svg";
import chiken_kare from '../../../assets/home/chiken_kare.svg';
import banana_pop from '../../../assets/home/banana_pop.svg';
import bomb_chiken from '../../../assets/home/bomb_chiken.svg';
import coffe_lava from '../../../assets/home/coffe_lava.svg';
import indian_salad from '../../../assets/home/indian_salad.svg';
import sugar_salmon from '../../../assets/home/sugar_salmon.svg';
import "./home.css";
import Navbar from "./navbar/Navbar";
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../../../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import Footer from './footer/FooterTopandBottom';
import Popular from './popular/Popular';
import Card from '../../base/Card/Card';


const data = [
    {
        id: 1,
        src: coffe_lava,
        title: "coffe",
    },
    {
        id: 2,
        src: bomb_chiken,
        title: "coffe",
    },
    {
        id: 3,
        src: chiken_kare,
        title: "coffe",
    },
    
]

function Home() {
  return (
    <div className='body'>
    <div className="container custom">
        <Navbar />
            <div className="row gx-5 ">
                <div className="col-sm-6 col-xs-12">
                    <div className="title">
                        <h1>Discover Recipe & Delicious Food</h1>
                    <div className="conts-icon" >
                    <span>
                        <FontAwesomeIcon icon={ faMagnifyingGlass } className="icon-search" />
                    </span>
                  <input
                        type="text"
                        name="search"
                        className="form-control mb-3"
                        placeholder="Search"
                    />
                  </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                    <div className="container_img mt-2">
                        <img src={daun} alt="" width=""/>
                    </div>
                </div>
            </div>
            <Popular />
            <div className="container new-recipe">
                <div className="col-sm-3 popular">
                    <p>New Recipe</p> 
                </div>
                <div className="row mt-5 ">
                    <div className="col-sm-8 img-recipe mt-5">
                        <img src={burger1} alt="" width={440}/>
                    </div>
                    <div className="col-sm-4 align-self-center text-recipe ">
                        <h3>Healthy Bone Broth Ramen (Quick & Easy)</h3>
                        <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                        <button className='btn btn-warning text-white mt-3'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="container popular-recipe ">
                <div className="col-sm-3 popular mb-5">
                    <p>Popular Recipe</p>
                </div>
                <div className="row popular-recipe">
                    <div className="mb-5 d-flex justify-content-evenly  g-4 imagination">

                        {data.map((item)=>(
                        <div className="col" key={item.id}>
                            <Card 
                            src={item.src}
                            titleName={item.title}
                            />
                        </div>
                        ))
                        } 
                    </div>
                </div>
                
            </div>
    </div>    
        <Footer />
    </div>

        
    
  )
}

export default Home
