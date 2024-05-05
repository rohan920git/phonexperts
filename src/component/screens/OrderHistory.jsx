import React, { useEffect, useState } from 'react'
import img from '../assets/transparant.png'
import Cookies from 'js-cookie';
import Navbar from '../common/Navbar';
function OrderHistory() {
    const [data, setdata]= useState([]);
    const fetchData = async()=>{
    const token = Cookies.get("authCookie")
     try{
        const response = await fetch("http://localhost:5000/getorder",{
            method: 'POST', // Using POST request to create a new resource in the database
            mode: 'cors', // no-cors, cors, *same-origin
           //  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({token})     

        })
        const result = await response.json();
        if(!response.ok){
           console.log(response)
        }
        else{
            setdata(result)
        }
     }catch(err){
console.log(err)
     }
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
       <>
       <Navbar></Navbar>
       <div className='flex items-center justify-center mt-5 border-b  border-solid border-slate-400 shadow-md w-full h-100'>
        <span className='p-10 text-2xl'>Your orders</span>
       </div>
       {data.map((elem)=>( <OrderCard data={elem}></OrderCard>))}
      
       </>
                                        
  )
}
function OrderCard({data}){
    return (
        <>
        <div className='mt-5 w-full  gap-x-1.5 flex flex-col justify-center items-center'>
            <div className='bg-slate-200 border border-solid border-slate-400 shadow-md w-3/4 flex flex-row justify-around items-center'>
               <div className='flex flex-col justify-between items-center'>
                    <span className='text-slate-600'>order id</span>
                    <span className='text-slate-600'>{data.order_id?.substring(9)}</span>
               </div>
               <div className='flex flex-col justify-center items-center'>
                    <span className='text-slate-600'>Total</span>
                    <span className='text-slate-600'>{data.payment_amount}</span>
               </div>
               <div className='flex flex-col justify-center items-center'>
                    <span className='text-slate-600'>order status</span>
                    <span className='text-slate-600'>{data.order_status}</span>
               </div>
           
            </div>
            <div className='w-3/4 flex flex-row justify-between items-center border-l border-r border-b border-slate-200 shadow-md  '>
              <img src={img} width={100}></img>
              <div className=' gap-y-1.5 w-3/5 p-1.5 flex flex-col items-start justify-start'>
                <span className='text-slate-900'>{data.p_brand} {data.p_name}</span>
<button class=" text-sm bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
  Buy again
</button>
              </div>
              <div className='p-1.5'>
              <button class=" text-sm bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
  Write a Review
</button>
              </div>
            </div>
        </div>
        </>
    )
}

export default OrderHistory

