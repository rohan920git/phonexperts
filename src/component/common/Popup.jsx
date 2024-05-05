import React from "react";
import "../products/Cards.scss"
function Popup({message}){
    return(
    
      <div className='popup-content'>
         <div className='popup-message'>
        { message.success ? (<>
            <h1>Success</h1>
            <div className='icon-success'></div>
            </>
        ):(<>
            <h1>Faild....</h1>
           <div className='icon-faild'></div>
           </>
        )}
           
           <div className='message'>
            <p>{message.text}</p>
           </div>
         </div>
      </div>
      
    )
  }
  export default Popup;