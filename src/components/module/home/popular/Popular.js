import React from 'react'
import elips from "../../../../assets/home/elips.svg";
import pizza from '../../../../assets/home/pizza.svg';
import burger from '../../../../assets/home/Burger-King.svg';




function Popular() {
  return (
        <div className="row ">
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
  )
}

export default Popular
