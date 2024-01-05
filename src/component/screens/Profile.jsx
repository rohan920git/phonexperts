import React from 'react'
import Cookies from 'js-cookie'
import './Profile.scss'
import { useNavigate } from 'react-router-dom';
import { IoMdContact } from "react-icons/io";
import Navbar from '../common/Navbar'
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
    
  return (
   <>
   <div className="upperblock">
    <div className='upperblock_text'>
   <span> <IoMdContact></IoMdContact></span> MyAccount
    </div>
    <div className='content'>
      <div className='nevigation'>
        <div className='active'>Profile</div>
        <div>Edit Profile</div>
        <div>Change password</div>
        <div>Orders</div>
      </div>
      <EditProfile></EditProfile>
    </div>
    </div>
   {/* {
    Cookies.get('authCookie') ? <h1>logged in </h1>:
    <h1>logIn to your account</h1>
   } */}
   
   </>
    )
}
function ProfileCard(){
  return(
    <>
    <div className='profile-card'></div>
    <div className='name-and-username'>
      <h3>Rohan Baghel</h3>
      <h5>rohan920i</h5>
    </div>
    <div className="email-phone">
      <h4> Email - Rohanb158@gmail.com</h4>
      <h4> Phone - +917999268498</h4>
    </div>
    </>
  )
}
function EditProfile(){
  return(
    <>
    <div className="edit-profile">
      

    </div>
    </>
  )
}

export default Profile
