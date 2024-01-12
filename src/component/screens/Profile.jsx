import React, { useState } from 'react'
import Cookies from 'js-cookie'
import './Profile.scss'
import { useNavigate } from 'react-router-dom';
import { IoMdContact } from "react-icons/io";
import Navbar from '../common/Navbar'
function Profile() {
    const [action, setAction] = useState("")
    const [activesection , setactivesection] = useState("profile")
    const navigate = useNavigate();
   const token =  Cookies.get('authCookie');
  
  return (
   <>
    {
      token ? (
        <div className="upperblock">
    <div className='upperblock_text'>
   <span> <IoMdContact></IoMdContact></span> MyAccount
    </div>
    <div className='content'>
    
      <div className='nevigation'>
        <div className={activesection == "profile" ? "active" :""} onClick={()=>{
          setAction("profile")
          setactivesection("profile")
        }}>Profile</div>
        <div className={activesection == "editprofile" ? "active" :""}
        onClick={()=>{
          setAction("editprofile")
          setactivesection("editprofile")

        }}>Edit Profile</div>
        <div className={activesection == "changepassword" ? "active" :""}
        onClick={()=>{
          setAction("changepassword")
          setactivesection("changepassword")
        }}>Change password</div>
        <div className={activesection == "order" ? "active" :""} 
        onClick={()=>{
          setAction("order")
          setactivesection("order")
        }}>Orders</div>
      </div>
    { action == "profile" &&(<ProfileCard></ProfileCard>) }
    { action == "" &&(<ProfileCard></ProfileCard>) }
    {action == "editprofile" && <EditProfile></EditProfile>}
    {action == "changepassword" && <ChangePassword></ChangePassword>}
    {action == "order" && <Orders></Orders>}
    </div>
    </div>
      ):(
        <div className='not-logged_in'>
        <p>
        You are not logged in to your account
        </p>
        <div className='buttons'><button onClick={()=> navigate('/login')}>Log-in</button>
        <button onClick={()=> navigate('/signup')}>Create new Account</button>
        <button onClick={()=> navigate('/home')}>back to home page </button>
        </div>
        </div>
      )
    }
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
    <div className='edit-photo-card'></div>
    <div className="name">
      <label>Full name</label><br></br>
      <input type='text' value={"Rohan baghel"}></input>
    </div>
    <div className="name">
      <label>User Name</label><br></br>
      <input type='text' value={"rohan920"}></input>
    </div>
    <div className="name email">
      <label>Email</label><br></br>
      <input type='text' value={"Rohanb158@GMAIL.COM"}></input>
    </div>

    </div>
    </>
  )
}
function ChangePassword(){
  return(
    <>
    <div className='changePassword-card'>
      <div className="changePassword">
      <label>Old password</label><br></br>
      <input type='password' value={"rohan920"}></input>
    </div>
    <div className="changePassword">
      <label>New password</label><br></br>
      <input type='password' value={"rohan920"}></input>
    </div>
    <div className="changePassword">
      <label>Re-enter New password</label><br></br>
      <input type='password' value={"rohan920"}></input>
    </div>
    </div>
    </>
  )
}
function Orders(){
 return(
  <>
  Hey this is cart 
  </>
 )
}

export default Profile
