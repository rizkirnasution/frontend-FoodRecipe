import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"


function Card({src, titleName, to}) {
  return (
    <div className="mb-5 d-flex justify-content-evenly  g-4 imagination">
        {/* <div>
            <img src={src} alt="img" />
            <p className='title-popular-recipe'>{titleName}</p>
        </div> */}
        <Link className="link" to={to}>
            <div className='card1'>
              <img src={src} className="img-fluid img" alt="picture" />
              <div className="card-body">
                <h5 className="card-title">
                  
                  {titleName}
                </h5>
              </div>
          </div>
        </Link>
        
    </div>
  )
}

export default Card