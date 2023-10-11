import React from 'react'
import Navbar from '../common/Navbar'
import './Product.scss'
import { VscBracketDot } from 'react-icons/vsc'
function Product() {
  return (
    <>
      <Navbar></Navbar>
      <div className='product-info'>
           <div className='product-image'>
            <div className='act-image'></div>
           </div>
           <div className='product-description'>
            <div className='product-name'>
            <h3>SAMSUNG Galaxy S23 Plus 5G (Cream, 512 GB)  (8 GB RAM)</h3>
            </div>
            <div className='product-price'>
              <h3>₹1999</h3> 
              <h5>₹1,04,999</h5> 
            </div>
            <div className='description'>
              <table>
             
                <td>Description</td>
               
                <td>
                
Give yourself a smartphone that recognises your emotions and responds appropriately. The Samsung Galaxy S23 Plus 5G's enhanced AI and Nightography feature produces low-light photos and videos that are vivid and colourful from dusk to dawn and back again. The Snapdragon processor in this phone also offers quick video streaming and gaming. Additionally, adaptive 120 Hz makes scrolling fluid, and Eye Comfort Shield guards against eye fatigue even while looking in low light.

                </td>
          
              
            
              
              </table>
            
          
            </div>
            <div className='product-specification'>
              <table>
              <tr>
                <td>Brand</td>
                <td>
                  Samsung
                </td>
            </tr>
              <tr>
                <td>Ram</td>
                <td>
                   8gb
                </td>
            </tr>
            <tr>
                <td>Rom</td>
                <td>
                   138gb
                </td>
            </tr>
            <tr>
                <td>Color</td>
                <td>
                   black
                </td>
            </tr>
            <tr>
                <td>battary</td>
                <td>
                   4000 mAh
                </td>
            </tr>
            <tr>
                <td>processor</td>
                <td>
                   Snapdragon 888+
                </td>
            </tr>
            <tr>
                <td>menufecturer</td>
                <td>
                   Samsung pvt ltd
                </td>
            </tr>
              </table>
            </div>
            <div className='buy-options'>
        <button className='cart-button'>Cart</button>
        <button className='buy-button'>Buy</button>
      </div>
 </div>
      
      </div>
      <div className='product-reviews'>
        
      </div>
    </>
  )
}

export default Product
