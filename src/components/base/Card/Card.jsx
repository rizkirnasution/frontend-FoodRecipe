import React from 'react'
import "./card.css"


function Card({src, titleName}) {
  return (
    <div className="mb-5 d-flex justify-content-evenly  g-4 imagination">
        <div>
            <img src={src} alt="img" />
            <p className='title-popular-recipe'>{titleName}</p>
        </div>
    </div>
  )
}

export default Card