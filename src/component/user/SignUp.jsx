import React, { useState } from 'react'
import './SignUp.scss'
function SignUp() {
  const [credentials , setCredentials] = useState({name:"",username:"",email:"",password:""})
   const  submithandler= ()=>{

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
