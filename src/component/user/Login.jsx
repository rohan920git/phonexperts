import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {ToastContainer , toast} from 'react-toastify'
import './SignUp.scss'
import Navbar from '../common/Navbar';

function Login() {
  const navigate = useNavigate();
  const [credentials , setcredentials] = useState({email:"",password:""});
 
  const handlechange = (e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value});
  }
  const handlesubmit = async (e)=>{
    e.preventDefault();
 
    const response = await fetch("http://localhost:5000/login",{
     method: 'POST', // Using POST request to create a new resource in the database
     mode: 'cors', // no-cors, cors, *same-origin
    //  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
     credentials: 'include', // include, *same-origin, omit
     
     headers: {
         'Content-Type': 'application/json',
     },
    //  redirect: 'follow', // manual, *follow, error
    //  referrer: 'no-referrer', 
         body:JSON.stringify({email:credentials.email,password:credentials.password})
         
    })
    const json = await response.json();
    console.log(json);

    if(!json.success){
      toast(json.message)
  
     }
     else{
      navigate("/home");
     }
     
  }
  return (
    <div>
          <Navbar></Navbar>
      <section className='page' >
      <form onSubmit={handlesubmit} className='sign-up-box'>
        <div className='heading'>
          <p><span>Phonexperts</span><br></br>
          Log-in to your account</p>
        </div>
        <div className='inputs'>
          
           
           <input type="Email" placeholder='Email' name='email' onChange={handlechange} required/>
          
           <input type="password" placeholder='password'name='password'onChange={handlechange} required/>
    
     
        </div>
         <button type='submit' className='submit-botton' >Log In</button>
        
      </form>
    </section>
   <ToastContainer/>

    </div>
    
  )
}

export default Login
