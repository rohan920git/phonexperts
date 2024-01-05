import React, { useEffect, useState } from 'react'
import Navbar from '../common/Navbar'
import Cookies from 'js-cookie'
import './Product.scss'
import {ToastContainer , toast} from 'react-toastify'
import { useSelector , useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Product() {
  const {id} = useParams();
  const token = Cookies.get("authCookie")

    const Dispatch = useDispatch();
    const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
   
    
      
      const fetch_data = async ()=>{
        try{ const response = await fetch(`http://localhost:5000/getdetails/${id}`)
      if(!response.ok){
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProductData(data);

    }
    catch (error){
      console.log(error)
    }
    finally{
      setIsLoading(false);
    }
  }
  fetch_data();
 
},[])
 const addCart = async (product_id)=>{

  const response = await fetch(`http://localhost:5000/addTocart/${token}`,{
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
      toast("Item added successfully")
    }


 }
 const buyNow = async (product_id)=>{
  addCart(product_id);
  navigate('/cart')
 }
  return (
    <>
       {
        isLoading ? <div>
          loading
        </div> : (
          productData !== [] ? (  <> <Navbar></Navbar>
           
          <div className='product-info'>
               <div className='product-image'>
                <div className='act-image'></div>
               </div>
               <div className='product-description'>
                <div className='product-name'>
                <h3>{productData[0].p_brand} {productData[0].p_name} ({productData[0].color}, {productData[0].rom}GB)  ({productData[0].ram}GB)</h3>
                </div>
                <div className='product-price'>
                  <h3>₹{productData[0].discounted_price}</h3> 
                  <h5>₹{productData[0].orignal_price}</h5> 
                </div>
                <div className='description'>
                  <table>
                 
                    <td>Description</td>
                   
                    <td>
                    {productData[0].p_des}    
                    </td>
              
                  
                
                  
                  </table>
                
              
                </div>
                <div className='product-specification'>
                  <table>
                  <tr>
                    <td>Brand</td>
                    <td>
                     {productData[0].p_brand}
                    </td>
                </tr>
                  <tr>
                    <td>Ram</td>
                    <td>
                      {productData[0].ram}GB
                    </td>
                </tr>
                <tr>
                    <td>Rom</td>
                    <td>
                       {productData[0].rom}GB
                    </td>
                </tr>
                <tr>
                    <td>Color</td>
                    <td>
                       {productData[0].color}
                    </td>
                </tr>
                <tr>
                    <td>battary</td>
                    <td>
                      {productData[0].battery}mAH
                    </td>
                </tr>
                <tr>
                    <td>processor</td>
                    <td>
                      {productData[0].processor}
                    </td>
                </tr>
                <tr>
                    <td>menufecturer</td>
                    <td>
                      {productData[0].p_brand}
                    </td>
                </tr>
                <tr>
                    <td>camera</td>
                    <td>
                      {productData[0].camera}
                    </td>
                </tr>
                <tr>
                    <td>secondry camera</td>
                    <td>
                      {productData[0].frontcamera}
                    </td>
                </tr>
                <tr>
                    <td>primary camera</td>
                    <td>
                      {productData[0].rearcamera}
                    </td>
                </tr>
                <tr>
                    <td>Operating System</td>
                    <td>
                      {productData[0].operatingsystem}
                    </td>
                </tr>
                <tr>
                    <td>supported networks</td>
                    <td>
                      {productData[0].supportednetwork}
                    </td>
                </tr>
                <tr>
                    <td>Wifi version</td>
                    <td>
                      {productData[0].wifiversion}
                    </td>
                </tr>
                <tr>
                    <td>NFC</td>
                    <td>
                      {productData[0].nfc}
                    </td>
                </tr>
                <tr>
                    <td>Sim support</td>
                    <td>
                      {productData[0].simcard}
                    </td>
                </tr>
                  </table>
                </div>
                <div className='buy-options'>
            <button className='cart-button' onClick={()=>{
               Dispatch(addToCart(productData[0].id))
             if(token){

             addCart(productData[0].id);
            }
            else{
              toast("Item added successfully")
            }
            
            }}>Cart</button>
            <button className='buy-button'
             onClick={()=>{
              if(token){
              buyNow(productData[0].id)
              }
              else{
                navigate('/cart');
              }
             }}
            >Buy</button>
          </div>
     </div>
          
          </div>
          <div className='product-reviews'>
            
          </div>
          </>
        ): <div>no such product found</div>
        )
        
      }
      <ToastContainer></ToastContainer>
    </>
  )
}

export default Product
