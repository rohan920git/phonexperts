import React, { useState } from 'react'
import image from '../assets/samsumg.jpg'
import { useNavigate } from 'react-router-dom';
import {ToastContainer , toast} from 'react-toastify'
import './Cards.scss'
import { useSelector , useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import Cookies from 'js-cookie';
function Cards(props) {
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const token  = Cookies.get("authCookie");

  const cardhandler = (e) =>{
    if (e.target.tagName.toLowerCase() !== 'button') {
       // Handle card click event
      navigate(`/product/${props.data.id}`);
    }
    
  }
  const buttonhandler = async ()=>{
    Dispatch(addToCart(props.data.id))
    if(token){
    const response = await fetch(`http://localhost:5000/addTocart/${token}`,{
      method: 'POST', // Using POST request to create a new resource in the database
      mode: 'cors', // no-cors, cors, *same-origin
     //  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      
      headers: {
          'Content-Type': 'application/json',
      },
     
          body:JSON.stringify({
            "product_id":props.data.id,
          })
          
     })
  
     
     if(!response.ok){
       toast("unable to connect to the server")
   
      }
      else{
        toast("item added successfully")
      }}
      else{
        toast("Item added successfully")
      }

  }
  return (
    <>
    <div className='Card' onClick={cardhandler}>
          <div className='card_image'>
            <img src={image} alt='phone'></img>
          </div>
          <div className='details'>
            <span>{props.data.p_name}</span>
            <span>₹{props.data.discounted_price}</span>
           <div><button onClick={()=>{
            buttonhandler();
            toast("item added successfully")
            navigate('/cart');
           }
          }>Buy Now</button>
            <button onClick={buttonhandler}>Add to cart</button></div>
          </div>
          <ToastContainer/>
    </div>
    </>
     )
}

export default Cards
