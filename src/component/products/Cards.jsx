import React, { useState } from 'react'
import image from '../assets/samsumg.jpg'
import { useNavigate } from 'react-router-dom';
import './Cards.scss'
import { useSelector , useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
function Cards(props) {
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const clickhadler = () =>  {

    Dispatch(addToCart(1)); 
  }
  const [buttonclicked, setbuttonclicked]= useState(false);
  const cardhandler = (e) =>{
    if (e.target.tagName.toLowerCase() !== 'button') {
       // Handle card click event
      navigate(`/product/${props.data.id}`);
    }
    
  }
  const buttonhandler = ()=>{
    Dispatch(addToCart(props.data.id))
    setbuttonclicked(true)

  }
  return (
    <>
    <div className='Card' onClick={cardhandler}>
          <div className='card_image'>
            <img src={image} alt='phone'></img>
          </div>
          <div className='details'>
            <span>{props.data.p_name}</span>
            <span>{props.data.discounted_price}</span>
           <div><button>Buy Now</button>
            <button onClick={buttonhandler}>Add to cart</button></div>
          </div>
    </div>
    </>
     )
}

export default Cards
