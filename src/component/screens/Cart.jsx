import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { useSelector , useDispatch } from 'react-redux';
import Navbar from '../common/Navbar'
import img from "../assets/samsumg.jpg"
import './Cart.scss'
function Cart() {
    const [phone_data,setphone_data]=useState([]);

    useEffect(()=>{
    const ph_data = JSON.parse(Cookies.get('data'));
    setphone_data(ph_data);
    },[])
  const cart_data1 = useSelector(state => state.reducer.items)
     const set = new Set(cart_data1);
     const cart_data = [...set];
     console.log(cart_data)
  return (
  <div>
        <Navbar></Navbar><div className='cart-main'>
        <div className='items'>
        {
             
             phone_data.map(data =>{
               const found = cart_data.find((elem)=> elem === data.id)
              if(found){  return(
                     <div className='product'>
                      <CartCard data={data}></CartCard>
                     </div>
                 )}
               
                     return;
         
             })
           
         }
         {
        }
        
        </div>
        <div className='checkout'></div>
      </div>
</div>
  )
}
function CartCard({data}){
return(
  <>
  <div className='CartCard'>
   
      <img src={img} className='product-image'></img>

    <div className='product-name'> {data.p_name} </div>
    <div className='product-quantity'> 1</div>
    <div className='product-price'>{data.orignal_price}</div>
  </div>
  </>
)

}

export default Cart
