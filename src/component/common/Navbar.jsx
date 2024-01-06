import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import {VscAccount} from 'react-icons/vsc'
import { FiShoppingCart } from "react-icons/fi"
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux' 
function Navbar() {
  const cart_data1 = useSelector(state => state.reducer.items)
  const [loggedin, setLoggedIN] = useState([]);
  const navigate = useNavigate();
  const cartHandler =()=>{

        navigate(`/cart`);

  }
  useEffect(()=>{
  setLoggedIN(cart_data1);
  },[cart_data1])

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
         <div className='cart'>
        
          <FiShoppingCart onClick={cartHandler}/>
         { loggedin.lenght > 0 && (
         <div
             style={{
              position: 'absolute',
              top: '10px',
              right: '6px',
              backgroundColor: 'red',
              borderRadius: '20%',
              padding: '4px',
              color: 'white',
            }}
            
          ></div>)
        }
         </div>
         <div className='account'>
            <VscAccount  onClick={()=>{
              navigate(`/profile`);
            }}></VscAccount>
          </div>         
      </div>
      
    </div>
  )
}

export default Navbar
