import React from 'react'
import Cards from '../products/Cards'
import './Home.scss'
import Navbar from '../common/Navbar.jsx'

function Home() {
  

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
      
   
    </>
  )
}

export default Home
