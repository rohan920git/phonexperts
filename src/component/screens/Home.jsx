import React, { useEffect, useState } from 'react'
import Cards from '../products/Cards'
import './Home.scss'
import Navbar from '../common/Navbar.jsx'
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
          <div className='on_banner_txt'>
            <span>this is smartphone</span>
            <button>Buy-Now</button>
          </div>
        </div>
        <div className='sub-banner'>
            <div className='sub-banner-main'>

            </div>
        </div>
        <span className='card-heading'>Top Rated phones</span>
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
    
      <button onClick={()=>{
        Dispatch(addToCart(1));
      }}> Log out</button>
      <button onClick={()=>{
        Dispatch(removeFromCart(1));
      }}> Log out</button>
      <button onClick={()=>{
        navigate(`/profile`);
      }}> somebody</button>
      <button onClick={()=>{
        navigate(`/login`);
      }}> Log out4</button>

    </>
  )
}

export default Home
