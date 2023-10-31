import React from 'react'
import image from '../assets/samsumg.jpg'
import './Cards.scss'
function Cards(props) {
  return (
    <>
    <div className='Card'>
          <div className='card_image'>
            <img src={image} alt='phone'></img>
          </div>
          <div className='details'>
            <span>{props.data.p_name}</span>
            <span>{props.data.orignal_price}</span>
            <button>Buy Now</button>
          </div>
    </div>
    </>
     )
}

export default Cards
