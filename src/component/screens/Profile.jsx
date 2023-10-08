import React from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';


function Profile() {
    const navigate = useNavigate();
    const cookieremover = ()=>{
    
        if (Cookies.get('authCookie')) {
          Cookies.remove('authCookie');
          console.log('Cookie removed successfully');
        } else {
          console.log('Cookie not found');
        }
        navigate("/home")
    
      }
    
  if(Cookies.get('authCookie')){return (
    <div>
      true
      <button onClick={cookieremover}> Log out</button>
      
      
    </div>
    
  )}
  else{
    return(
        <div>
         false
        </div>
    )
  }
}

export default Profile
