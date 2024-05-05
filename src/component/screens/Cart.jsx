import { useSelector , useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import {ToastContainer , toast} from 'react-toastify'
// import { useSelector , useDispatch } from 'react-redux';
import Navbar from '../common/Navbar'
import img from "../assets/samsumg.jpg"
import Popup from '../common/Popup';
import './Cart.scss'
import { removeFromCart } from '../../redux/actions';

function Cart() {
  const token = Cookies.get('authCookie');
    const [phone_data,setphone_data]=useState([]);
    const [total,setTotal] = useState(0);
    const [screenState , setscreen]= useState(1)
    const [name , setname] = useState();
    const [email , setemail] = useState();
    const [address, setaddress] = useState()
    const [pin , setpin] = useState();
    const [popup , setpopup] = useState(false);
    const [message , setmessage] = useState();
    const checkoutHandler = async()=>{
      let order;
      try{
        const response = await fetch('http://localhost:5000/generateorder',{
          method:"POST",
          mode:"cors",
          credentials:"include",
          headers: {
            'Content-Type': 'application/json',
        },

        body:JSON.stringify({amount:total,phone_data:cart_data[0],name,email,address,pin,token})
      
        })
        if(!response.ok){
         console.log(response) 
         const me = await response.json();
         setscreen(1);
         setmessage(me.message)
         setpopup(true);
         setTimeout(() => {
           setpopup(false);
         }, 1000);
        }
        else{
          order = await response.json();
        }
      }catch(err){
        console.log(err)
      }
      var options = {
        key: "rzp_test_EHTvWKSbnJinGK", // Enter the Key ID generated from the Dashboard
        amount: total, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Phonexperts", //your business name
        description: "purches Transaction",
        image: "https://example.com/your_logo",
        order_id: order?.response.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:5000/verifypayment",
        prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "Gaurav Kumar", //your customer's name
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#3399cc"
        }

    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();

    }
   
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
    

  if(!screenState){
    return (
      <div>
         <div class="font-[sans-serif] bg-gray-50">
      <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
    
        <div class="xl:col-span-2 h-max rounded-md p-8 sticky top-0">
          <h2 class="text-2xl font-bold text-[#333]">Complete your order</h2>
          <form class="mt-10">
            <div>
              <h3 class="text-lg font-bold text-[#333] mb-6">Personal Details</h3>
              <div class="grid sm:grid-cols-2 gap-6">
                <div class="relative flex items-center">
                  <input type="text" placeholder="First Name" onChange={(e)=>{setname(e.target.value)}}
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <div class="relative flex items-center">
                  <input type="text" placeholder="Last Name"
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"></path>
                  </svg>
                </div>
                <div class="relative flex items-center">
                  <input type="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path fill="none" stroke-miterlimit="10" stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
                <div class="relative flex items-center">
                  <input type="number" placeholder="Phone No."
                    class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                  <svg fill="#bbb" class="w-[18px] h-[18px] absolute right-4" viewBox="0 0 64 64">
                    <path
                      d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-bold text-[#333] mb-6">Shipping Address</h3>
              <div class="grid sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Address Line"
                   onChange={(e)=>{
                  setaddress(e.target.value)
                   }}
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                <input type="text" placeholder="City"
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                <input type="text" placeholder="State"
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
                <input type="text" placeholder="Zip Code"
                  onChange={(e)=>{
                    setpin(e.target.value)
                  }}
                  class="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none" />
              </div>
              <div class="flex gap-6 max-sm:flex-col mt-10">
                <button type="button" class="rounded-md px-6 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-[#333]">Cancel</button>
                <button type="button" class="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#333] text-white hover:bg-[#222]" onClick={checkoutHandler}>Complete Purchase</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {popup && <Popup message={{success:true,text:"item added to cart"}}></Popup>}
          {console.log(popup)
        
          }
          {cart_data[0]}
        </div>
    )
  }
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
        <button onClick={()=>{
          setscreen(0);
        }}>Place order</button>
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
