import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"


function Card({src, titleName, to}) {
  return (
    <div className="">
        <Link className="link" to={to}>
        <div className="card4">
            <div className='card2'>
              <img src={src} className="img" alt="picture" />
              <div className="card-body">
                <h5 className="card-title">
                  {titleName}
                </h5>
              </div>
          </div>
        </div>
        </Link>
        
    </div>
  )
}

export default Card