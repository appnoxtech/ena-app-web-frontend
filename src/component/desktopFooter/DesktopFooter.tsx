import React from 'react';
import Ena from '../../assets/images/enaLogo.jpg';
import './Desktop.css'

function DesktopFooter() {
  return (
    
    <div className='container-fluid main'>
        <div className='row container-fluid pt-4'>
        <div className='col-sm-6 row container-fluid  d-flex justify-content-center'>
            <div className='col-sm-6 row d-flex justify-content-evenly submain'>
                <div className='col-sm-4'>
                   <img className='imageProp ' src={Ena} alt='Ena' />
                </div>
                <div className='col-sm-4'>
                    <ul>
                        <li className='heading'>Menu</li>
                        <li>Naslovna</li>
                        <li>Proizvodi</li>
                        <li>Smrznutiprogram</li>
                        <li>Gastro proizvodi</li>
                        <li>Kategorije</li>
                        <li>Veleprodaja</li>
                    </ul>
                </div>
                <div className='col-sm-4'>
                    <ul>
                        <li className='heading'>Company</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
     <div className='col-sm-6 row container-fluid d-flex justify-content-center'>
        <div className='col-sm-6 row d-flex justify-content-evenly submain'>
            <div className='col-sm-6'>
               <ul>
                   <li className='heading'>Legal</li>
                   <li>Privacy Statement</li>
                   <li>Payment Methods</li>
               </ul>
            </div>
            <div className='col-sm-6'>
               <ul>
                   <li className='heading'>Join Our Newsletter</li>
                   <li>
                       <div className="input-group mb-3">
                           <input type="text" className="form-control" placeholder="Enter Your Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                           <button className="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                       </div>
                   </li>
               </ul>
            </div>
        </div>
        </div>
     </div>
     <div className='row copyright pt-4 pb-4'>
        <div>
        @2022, Ena Fruit d.o.o. Omaogucuje Shopify
        </div>
        <div>
            
        </div>
     </div>
    </div>
  )
}

export default DesktopFooter;