import React from 'react'
import { Link } from 'react-router-dom'
import "./cardSearch.css"


function CardSearch({src, titleName, to}) {
  return (
    <div className="mb-2">
        <Link className="link" to={to}>
        <div className="card9">
            <div className='card4 '>
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

export default CardSearch