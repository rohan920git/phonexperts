import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.scss'
import Navbar from '../common/Navbar';
import Popup from '../common/Popup';

function Login() {
  const navigate = useNavigate();
  const [credentials , setcredentials] = useState({email:"",password:""});
  const [popup , setpopup] = useState(false);
  const [popupdetails , setpoppudetails] = useState({});
 
  const handlechange = (e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value});
  }
  const handlesubmit = async()=>{
       try{
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
    
      setpoppudetails({success:false,text:json.message})
      setpopup(true);
      setTimeout(() => {
        setpopup(false);
      },1000);
   
     }
     else{
      setpoppudetails({success:true,text:"successfully logged in"})
      setpopup(true);
      setTimeout(() => {
        setpopup(false);
      },1000);
      navigate("/home");
     }
    }
    catch(error){
      console.log("mil gaya")
        console.log(error)
    }
  }
  return (
    <div>
          <Navbar></Navbar>
      <section className='page' >
      <form onSubmit={(e)=>{
         e.preventDefault();
         handlesubmit();
      }} className='sign-up-box'>
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
    {popup && <Popup message={popupdetails}></Popup>}

    </div>
    
  )
}

export default Login
