import React, { useEffect, useState } from 'react'
import Cards from '../products/Cards'
import './Home.scss'
import Navbar from '../common/Navbar.jsx'
import image from '../assets/transparant.png'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions';

function Home() {
  // const items =  useSelector(state => state.reducer.items);s
  const token = Cookies.get('authCookie');
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const [phone_data, set_ph_data] = useState([])
  const [isloading , setloading] = useState(true);
  const test = async() =>{
   try{
    const response = await fetch("http://localhost:5000/test",{
      method:"POST",
      mode:"cors",
      
      body:JSON.stringify({"hey":"rohan"})
     
      
    })
   }
   catch(err){
    console.log(err)
   }
  }
   
  useEffect( ()=>{
    const fetch_data = async ()=>{
      fetch("http://localhost:5000/getdata")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // console.log(response.json());
        return response.json();
      })
      .then((data) => {
        set_ph_data(data);
         setloading(false)
        Cookies.set('data',JSON.stringify(data))
  
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
      
    }
    fetch_data();
    
   },[])
  useEffect( ()=>{
    fetch_cart();
  },[token])
  const fetch_cart = async ()=>{
    if(Cookies.get("authCookie")){
      fetch(`http://localhost:5000/cart_items/${token}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }
      )
      .then((data)=>{
         let tempcart = [];
   
         data.map((ob,index)=>{
        tempcart = [...tempcart ,ob.product_id]
         })
         Dispatch(addToCart(tempcart));
      })
      .catch((err)=>{
        console.log(err);
      })   
    }
  }
  

 if(isloading){
  return <div className='loading'>loading...</div>
 }

  return (
    <>
    <Navbar></Navbar>
    
  
      <section className='body'>
        <div className='banner'>
        <div class="bg-white dark:bg-slate-200 flex relative z-20 items-center overflow-hidden z-0">
        <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-slate-400 dark:text-slate-800 mb-12">
                </span>
                <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-slate-800 text-slate-800">
                    Be on
                    <span class="text-5xl sm:text-7xl">
                        Time
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-slate-800 dark:text-slate-800">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div class="flex mt-8">
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-slate-800 text-md mr-4 hover:bg-pink-400">
                        Get started
                    </a>
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-slate-800 hover:bg-pink-500 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="https://www.tailwind-kit.com/images/object/10.png" class="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
        </div>
        <div className='sub-banner'>
            <div className='sub-banner-main'>

            </div>
        </div>
        <h3 className='card-heading'>Top Rated phones</h3>
        <div className='cards'>
          {
            phone_data !== [] ? phone_data.map((data)=>{
              return(
                <div key={data.id}>
                <Cards data={data} ></Cards>
                
                </div>
              )
            }):""
          }
        </div>
      </section>
     
      {/* <iframe src='https://www.flipkart.com/poco-c31-royal-blue-64-gb/p/itm19effae969b86?pid=MOBG73E7GKQK4KZP'></iframe> */}

    </>
  )
}

export default Home
