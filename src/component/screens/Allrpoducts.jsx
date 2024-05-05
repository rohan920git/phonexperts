import React, { useState } from 'react'

function Allrpoducts() {
    const [image,setimage] = useState(null);
    const [error, seterror] = useState("");
    const submithandler = async()=>{
        console.log(image);
        const formdata = new FormData();
        formdata.append('image',image);
        const response = await fetch('http://localhost:5000/profileupload',{
            method: 'POST',
            body: formdata,
        })
     if(!response.ok){
        console.log(response);
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
  return (
    <div>
        <input type='file' name='profileimage' accept="image/*" onChange={handlechange}/>
        <button type='submit' onClick={submithandler}>submit</button>
        <br />
        {error}
    </div>
  )
}

export default Allrpoducts
