import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import './SignUp.scss'
function SignUp() {
  const navigate = useNavigate();
  const [credentials , setCredentials] = useState({name:"",username:"",email:"",password:""})
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
         body:JSON.stringify({name:credentials.name,username:credentials.username,email:credentials.email,password:credentials.password})
         
    })
    const json = await response.json();
    console.log(json);
    if(!json.success){
      alert("enter valid credentials")
     }
     else{
      navigate("/login");
     }
     
   }
   const changeHandler= (e)=>{
    e.preventDefault();
      setCredentials({...credentials,[e.target.name]:e.target.value})
   }
  return (
    <section className='page'>
      <form className='sign-up-box' onSubmit={submithandler}>
        <div className='heading'>
          <p><span>Phonexperts</span><br></br>
          Create new account</p>
        </div>
        <div className='inputs'>
           
           <input type="text" placeholder='name' name='name'onChange={changeHandler}></input>
           
           <input type="text" placeholder='username' name='username' onChange={changeHandler}></input>
           <button type='button'>check username</button>
           
           <input type="Email" placeholder='Email' name='email' onChange={changeHandler}/>
          
           <input type="text" placeholder='Password' name='password' onChange={changeHandler}/>
     
           
          
        </div>
         <button type='submit' className='submit-botton'>SIGN UP</button>
        
      </form>
      <h1>{credentials.name}===={credentials.username}====={credentials.email}===={credentials.password}</h1>
    </section>
  )
}

export default SignUp
