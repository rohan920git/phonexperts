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
  const [phone_data, set_ph_data] = useState(null)
  useEffect( ()=>{
    fetch_data();
    
   },[])

  const fetch_data = async ()=>{
    const response = await fetch("http://localhost:5000/getdata");
    const data = await response.json();
 set_ph_data(data);
 console.log(phone_data);
    
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
          
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </div>

      </section>
      {/* <iframe src='https://www.flipkart.com/poco-c31-royal-blue-64-gb/p/itm19effae969b86?pid=MOBG73E7GKQK4KZP'></iframe> */}
    
      <button onClick={cookieremover}> Log out</button>
    </>
  )
}

export default Home
