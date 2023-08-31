import React from 'react'
import image from '../assets/samsumg.jpg'
import './Cards.scss'
function Cards() {
  return (
    <>
    <div className='Card'>
          <div className='card_image'>
            <img src={image}></img>
          </div>
          <div className='details'>
            <span>Samsumg</span>
            <span>4.7</span>
            <button>Buy Now</button>
          </div>
    </div>
    </>
     )
}

export default Cards
