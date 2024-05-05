import React, { useState } from 'react'
import image from '../assets/transparant.png'
import { useNavigate } from 'react-router-dom';

import './Cards.scss'
import { useSelector , useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import Cookies from 'js-cookie';
import Popup from '../common/Popup';
function Cards(props) {
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const token  = Cookies.get("authCookie");
  const [popup , setpopup] = useState(false);
  
  const cardhandler = (e) =>{

      navigate(`/product/${props.data.id}`);

    
  }
  const buttonhandler = async (e)=>{
   e.stopPropagation()
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
 
  }
  
      setpopup(true);
      setTimeout(() => {
        setpopup(false);
      }, 1000);
      console.log("clicked")
  }
  return (
    <>
    {/* <div className='Card' >
          <div className='card_image' onClick={cardhandler}>
            <img src={image} alt='phone'></img>
          </div>
          <div className='details'>
            <span>{props.data.p_name}</span>
            <span>₹{props.data.discounted_price}</span>
           <div><button onClick={(e)=>{
            buttonhandler(e);
            navigate('/cart');
           }
          }>Buy Now</button>
            <button onClick={buttonhandler}>Add to cart</button>
            </div>
          </div>
          {popup && <Popup message={{success:true,text:"item added to cart"}}></Popup>}
          {console.log(popup)}
    </div> */}

  
  <article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-slate-200">
    <div>
      <img class="object-cover h-64 w-full" src={image} alt="Converse sneakers" />
    </div>

    <div class="flex flex-col gap-1 mt-4 px-4">
      <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-800">{props.data.p_name}</h2>
    
      <span class="font-semibold text-slate-800 dark:text-slate-800">₹{props.data.discounted_price}</span>
    </div>

    <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
      <button class="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-slate-800 dark:text-slate-800">
        <span class="text-base" onClick={buttonhandler}>Add to Cart</span>
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
    {popup && <Popup message={{success:true,text:"item added to cart"}}></Popup>}
          {console.log(popup)}
  </article>


    </>
     )
}


export default Cards
