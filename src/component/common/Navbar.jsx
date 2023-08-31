import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import {VscAccount} from 'react-icons/vsc'
function Navbar() {
  return (
    <div>
      <navbar className="navbar">
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
         </ul>
         <div className='searchbar'>
          <input placeholder='Search For phones'></input>
        
         </div>
         <div className='account'>
            <VscAccount></VscAccount>
          </div>         
      </navbar>
      
    </div>
  )
}

export default Navbar
