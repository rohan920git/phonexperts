import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import {ToastContainer , toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import './SignUp.scss'
import Navbar from '../common/Navbar'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
function SignUp() {
  const navigate = useNavigate();
  const [credentials , setCredentials] = useState({name:"",username:"",email:"",password:""})
  const [phonenumber , setphonenumber] = useState("");
  const  submithandler= async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/createuser",{
     method: 'POST', // Using POST request to create a new resource in the database
     mode: 'cors', // no-cors, cors, *same-origin
     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
     credentials: 'same-origin', // include, *same-origin, omit
     headers: {
         'Content-Type': 'application/json',
     },
     redirect: 'follow', // manual, *follow, error
     referrer: 'no-referrer', 
         body:JSON.stringify({name:credentials.name,username:credentials.username,phonenumber:phonenumber,email:credentials.email,password:credentials.password})
         
    })
    const json = await response.json();
    console.log(json);
    if(!json.success){
      toast(json.message);

     }
     else{
       toast("Account Created Sucessfully")
      setTimeout(()=>{
        
        navigate("/login");
      },2000)
     }
     
   }
   const changeHandler= (e)=>{
    e.preventDefault();
      setCredentials({...credentials,[e.target.name]:e.target.value})
   }
  return (
    <>
    <Navbar></Navbar>
    <section className='page'>
      
      <form className='sign-up-box' onSubmit={submithandler}>
        <div className='heading'>
          <p><span>Phonexperts</span><br></br>
          Create new account</p>
        </div>
        <div className='inputs'>
           
           <input type="text" placeholder='name' name='name'onChange={changeHandler}></input>
           
           <input type="text" placeholder='username' name='username' onChange={changeHandler}></input>
 
           <PhoneInput
           country={"in"}
           value={phonenumber}
           onChange={(phone)=>{setphonenumber("+"+phone)}}
           dropdownClass='dropdownnumber'
           autoFormat='true'
           ></PhoneInput>
           
           <input type="Email" placeholder='Email' name='email' onChange={changeHandler}/>
          
           <input type="password" placeholder='Password' name='password' onChange={changeHandler}/>
      
           
           <div dropd={{color:"black"}}>this is number {phonenumber}</div>
        </div>
         <button type='submit' className='submit-botton'>SIGN UP</button>
        
      </form>
      <ToastContainer/>
     
     </section>
     </>
  )
}

export default SignUp
