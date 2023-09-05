import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import {VscAccount} from 'react-icons/vsc'
function Navbar() {

  return (
    <div >
      <div className="navbars">
         <span>Phonexperts</span>
         <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Products</Link>
          </li>
          <li>
            <Link to={"/"}>about</Link>
          </li>
          <li>
            <Link to={"/"}>Phone Guide</Link>
          </li>
         </ul>
         <div className='searchbar'>
          <input placeholder='Search For phones'></input>
        
         </div>
         <div className='account'>
            <VscAccount></VscAccount>
          </div>         
      </div>
      
    </div>
  )
}

export default Navbar
