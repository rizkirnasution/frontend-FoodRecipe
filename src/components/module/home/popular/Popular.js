import React from 'react'
import elips from "../../../../assets/home/elips.svg";
import pizza from '../../../../assets/home/pizza.svg';
import burger from '../../../../assets/home/Burger-King.svg';




function Popular() {
  return (
    <>
    <div className="container  ">
            <div className="col-sm-3 popular">
                <div className="">
                    <p>Popular For You !</p>
                </div>
                    <img src={elips} alt="" className='elips'/>
            </div>
            <div className="col-sm-9 mt-2 img_popular">
                <img src={pizza} alt="" />
                <img src={burger} alt=""/>
            </div>
        </div>
        {/* <div className="container new-recipe">
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
    </div> */}
    </>
        
  )
}

export default Popular
