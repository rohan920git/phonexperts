import React from 'react'
import './SignUp.scss'
function SignUp() {
  return (
    <section className='page'>
      <div className='sign-up-box'>
        <div className='heading'>
          <p><span>Phonexperts</span><br></br>
          Create new account</p>
        </div>
        <div className='inputs'>
           
           <input type="text" placeholder='name'></input>
           
           <input type="Email" placeholder='Email'/>
          
           <input type="text" placeholder='password'/>
     
           
           <input type='password' placeholder='confirm password'></input>
        </div>
         <button type='submit' className='submit-botton'>SIGN UP</button>
        
      </div>
    </section>
  )
}

export default SignUp
