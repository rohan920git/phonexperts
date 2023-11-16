import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { useSelector , useDispatch } from 'react-redux';
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
        {
             
            phone_data.map(data =>{
              const found = cart_data.find((elem)=> elem === data.id)
             if(found){  return(
                    <div className='product'>
                      {data.p_name}<br>
                      </br>
                      {data.orignal_price}<br></br>
                    </div>
                )}
              
                    return;
        
            })
          
        }
  {
    
  }
    </div>
  )
}

export default Cart
