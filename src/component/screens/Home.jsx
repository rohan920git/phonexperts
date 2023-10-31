import React, { useEffect, useState } from 'react'
import Cards from '../products/Cards'
import './Home.scss'
import Navbar from '../common/Navbar.jsx'
import Cookies from 'js-cookie';

const cookieremover = ()=>{
  if (Cookies.get('authCookie')) {
    Cookies.remove('authCookie');
    console.log('Cookie removed successfully');
  } else {
    console.log('Cookie not found');
  }
}
function Home() {
  const [phone_data, set_ph_data] = useState([])
  useEffect( ()=>{
    fetch_data();
    
   },[])

  const fetch_data = async ()=>{
    fetch("http://localhost:5000/getdata")
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      set_ph_data(data);
      console.log(data);
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
    
  }


  return (
    <>
    
      <div > <Navbar></Navbar></div>
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
        <span>Top Rated phones</span>
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
    
      <button onClick={cookieremover}> Log out</button>
    </>
  )
}

export default Home
