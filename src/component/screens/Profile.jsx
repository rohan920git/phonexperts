import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import './Profile.scss'
import { useNavigate } from 'react-router-dom';
import { IoMdContact } from "react-icons/io";
import Navbar from '../common/Navbar'
function Profile() {
  const token =  Cookies.get('authCookie');
  const [action, setAction] = useState("")
    const [activesection , setactivesection] = useState("profile")
    const [isloading,setloading] = useState(true);
    const [userdata, setuserdata] = useState(null);
    const [error , seterror] = useState(null);
    useEffect(()=>{
      const fetchdata = async()=>{
    if(token){   try{
        const response = await fetch(`http://localhost:5000/userprofile/${token}`,{
          cache: 'no-store'
        })
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        const result = await response.json();
        setuserdata(result[0]);
        
       }
       catch(err){
        seterror('Server not responding. Please try again later.');
       }
       finally{
        setloading(false)
       }
      }
      };
      fetchdata();

      }, [])
    const navigate = useNavigate();
   if(!token){
      return(
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
   if (error) {
    return <div className='loading'>Error: {error}</div>;
  }
   if(isloading){
    return(
      <div className='loading'>
        Loading...
      </div>
    )
   }
 
  return (
   <div className='profile-screen'>

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
    { action == "profile" &&(<ProfileCard data={userdata}></ProfileCard>) }
    { action == "" &&(<ProfileCard data={userdata}></ProfileCard>) }
    {action == "editprofile" && <EditProfile data={userdata}></EditProfile>}
    {action == "changepassword" && <ChangePassword data={userdata}></ChangePassword>}
    {action == "order" && <Orders data={userdata}></Orders>}
    </div>
    </div>
  
   </div>
    )
}
function ProfileCard({data}){
  return(
    <>
    <div className='profile-card' style={data.image_url ? { backgroundImage: `url(${data.image_url})`}:{}}></div>
    <div className='name-and-username'>
      <h3>{data.name_}</h3>
      <h5>{data.user_name}</h5>
    </div>
    <div className="email-phone">
      <h4> Email - {data.email}</h4>
      <h4> Phone - {data.phone_number}</h4>
    </div>
    </>
  )
}
function EditProfile({data}){
  const token =  Cookies.get('authCookie');
  const [userdata , setuserdata]= useState({name_:data.name_,user_name:data.user_name,email:data.email});
  const [namemessage,setnamemessgae]=useState("")
  const [message,setmessgae]=useState("")
  const [updating , setupdating] = useState("");
  const savename = async()=>{
    if(data.name_ !== userdata.name_){

    
    const fetchForsavename = async()=>{
          const response = await fetch(`http://localhost:5000/savename/${token}`,{
            method:"put",
            mode:"cors",
            headers:{
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({name:userdata.name_})
          })
          if(!response.ok){
            console.log("error occured"+ response);
          }
         const result = await response.json();
         setnamemessgae(result.message)
    }
    fetchForsavename();
  }

  }
  const saveuser_name = ()=>{
    if(data.user_name !== userdata.user_name){
              const fetchForsavename = async()=>{
              const response = await fetch(`http://localhost:5000/saveusername/${token}`,{
                method:"put",
                mode:"cors",
                headers:{
                  'Content-Type': 'application/json',
                },
                body:JSON.stringify({username:userdata.user_name})
              })
              if(!response.ok){
                setmessgae(response.message);
              }
             const result = await response.json();
             setmessgae(result.message)
        }
        fetchForsavename();
      
    }
  }
  const [image,setimage] = useState(null);
  const [error, seterror] = useState("");
  const submithandler = async()=>{
      console.log(image);
      const formdata = new FormData();
      formdata.append('image',image);
      setupdating("updating.....")
      const response = await fetch(`http://localhost:5000/saveprofile/${token}`,{
          method: 'POST',
          cache: 'no-store',
          body: formdata,
      })
   if(!response.ok){
    setupdating("error....")
     setTimeout(() => {
      setupdating("")
     },4000);  
    console.log(response);
   }    
   else{
      setupdating("updated...")
     setTimeout(() => {
      setupdating("")
     },4000);  
   }
  }
  const handlechange = (e) =>{
     const file = e.target.files[0];
     if(file){
         if(file.type.startsWith('image/')){
          setimage(file);
         }
         else{
          seterror("please select valid image file")
         }

     }
     else{
      seterror("please select image")
     }
  }
  return(
    <>
    <div className="edit-profile">
    <div className='profile-card' style={data.image_url ? { backgroundImage: `url(${data.image_url})`}:{}}></div>
    <input type='file' name='profileimage' accept="image/*" onChange={handlechange}/>
        <button type='submit' onClick={submithandler}>submit</button>
        <p className='updating-message'>{updating}</p>
    <div className="name">
      <label>Full name</label><br></br>
      <input type='text' value={userdata.name_} name='name_'
       onChange={(e)=>{
        e.preventDefault();
        setuserdata({...userdata,[e.target.name]:e.target.value})
       }}
      ></input>
      <p>{namemessage}</p>
      <button onClick={savename}>Save Changes</button>
    </div>
    <div className="name">
      <label>User Name</label><br></br>
      <input type='text' value={userdata.user_name} name="user_name"
      
       onChange={(e)=>{
        e.preventDefault();
        setuserdata({...userdata,[e.target.name]:e.target.value})
       }}
      ></input>
        <p>{message}</p>
      <button   onClick={saveuser_name}>Save Changes</button>
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
