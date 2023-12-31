import { useSelector , useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import {ToastContainer , toast} from 'react-toastify'
// import { useSelector , useDispatch } from 'react-redux';
import Navbar from '../common/Navbar'
import img from "../assets/samsumg.jpg"
import './Cart.scss'
import { removeFromCart } from '../../redux/actions';
function Cart() {
    const [phone_data,setphone_data]=useState([]);
    const [total,setTotal] = useState(0);
   
    useEffect(()=>{
    const ph_data = JSON.parse(Cookies.get('data'));
    setphone_data(ph_data);
   

    },[])
   
    const cart_data1 = useSelector(state => state.reducer.items)
    const set = new Set(cart_data1);
    const cart_data = [...set];
    useEffect(()=>{
      let totaltemp = 0 ;
  
      phone_data.map(data =>{
        const found = cart_data.find((elem)=> elem === data.id)
        if(found){
                 totaltemp = totaltemp + data.discounted_price
               } 
      }
      )
      setTotal(totaltemp);
    },[cart_data])
    


  return (
  <div>
    <Navbar></Navbar>
     <div className='cart-main'>
        <div className='items'>
             <h3>Cart Items</h3>
        {
               phone_data.map(data =>{
               const found = cart_data.find((elem)=> elem === data.id)
               if(found){ 
                 
                 return(
                   <div className='product'>
                      <CartCard data={data}></CartCard>
                     </div>
                 )}
               
                
         
             })
            
           
         }
    
        
        </div>
        <div className='checkout'>
         <h3>Check-Out</h3>
         <div className='promocode'>
          <label>Enter a promocode</label><br></br>
           <input type='text' placeholder='promocode'></input>
           <button>Apply</button> 
         </div>
         <div className='price-other'>
          <div className='price-details'>
           <label>Price</label>
           <label>₹{total}</label>
          </div>
          <div className='discount-details'>
           <label>Discount</label>
           <label>₹0</label>
          </div>
          <div className='price-details'>
           <label>Shipping Charge</label>
           <label>₹0</label>
          </div>
          <div className='payble-details'>
           <label>Total Payble</label>
           <label>₹{total}</label>
          </div>
         </div>
      <div className='proceed'>
        <button>Place order</button>
      </div>

        </div>
      </div>
        <ToastContainer/>
</div>
  )
}
function CartCard({data}){
  const token = Cookies.get("authCookie")
  const Dispatch = useDispatch();
  const removeCart = async (product_id) => {
    const response = await fetch(`http://localhost:5000/removeFromCart/${token}`,{
      method: 'POST', // Using POST request to create a new resource in the database
      mode: 'cors', // no-cors, cors, *same-origin
     //  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      
      headers: {
          'Content-Type': 'application/json',
      },
     
          body:JSON.stringify({
            "product_id":product_id,
          })
          
     })
  
     
     if(!response.ok){
       toast("unable to connect to the server")
   
      }
      else{
        toast("Item Removed successfully")
      }
       
  }
return(
  <>
  <div className='CartCard'>
   
      <img src={img} className='product-image'></img>

    <div className='product-name'> {data.p_name} </div>
    <div className='product-quantity'>1</div>
    <div className='product-price'>₹{data.discounted_price}</div>
    <button onClick={()=>{
      Dispatch(removeFromCart(data.id));
      if(token){
      removeCart(data.id);
      }
    }} className='remove-product'>remove</button>
  </div>

  </>
)

}

export default Cart
