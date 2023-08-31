import React from 'react'
import './SignUp.scss'
function Login() {
  return (
    <div>
      <section className='page'>
      <div className='sign-up-box'>
        <div className='heading'>
          <p><span>Phonexperts</span><br></br>
          Log-in to your account</p>
        </div>
        <div className='inputs'>
          
           
           <input type="Email" placeholder='Email'/>
          
           <input type="text" placeholder='password'/>
     
         
        </div>
         <button type='submit' className='submit-botton'>Log In</button>
        
      </div>
    </section>
   
    </div>
  )
}

export default Login
