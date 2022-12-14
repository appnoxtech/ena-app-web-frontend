import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './Footer.css'
import Ena from '../../assets/images/enaLogo.png'
import { NavLink } from 'react-router-dom'

function DesktopFooter(prop:any) {
  return (
    <div className={prop.class}> 
      <div className='row py-2'>
        <div className='col-lg-12 d-flex justify-content-end align-item-center'>
          <div className='col d-flex justify-content-center'>
            <ul>
              <img className='' src={Ena} alt='Ena' width={90} height={46} />
            </ul>
          </div>
          {/* <div className='col'>
            <ul className='p-0'>
              <li className='footer_heading'>Menu</li>
              <li>Naslovna</li>
              <li>Proizvodi</li>
              <li>Smrznutiprogram</li>
              <li>Gastro proizvodi</li>
              <li>Kategorije</li>
              <li>Veleprodaja</li>
            </ul>
          </div> */}
          {/* <div className='col'>
            <ul>
              <li className='footer_heading'>Company</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div> */}
          {/* <div className='col'>
            <ul className='p-0'>
              <li className='footer_heading'>Legal</li>
              <li>Privacy Statement</li>
              <li>Payment Methods</li>
            </ul>
          </div> */}
        </div>
        {/* <div className='col-lg-4'>
          <ul>
            <li className='footer_heading'>Join Our Newsletter</li>
            <li>
              <div className='input-group mb-3 sub_email'>
                <input
                  type='text'
                  className='form-control rounded-start-3'
                  placeholder='Enter Your Email Address'
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
                <button
                  className='btn btn-outline-secondary sub_button rounded-3'
                  type='button'
                  id='button-addon2'
                >
                  Subscribe
                </button>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
      {/* <div className='row pb-3'>
        <div className='col-12 col-md-6 pb-0'>
          <ul>
            <li>&#169;2022, Ena Fruit d.o.o. Omaogucuje Shopify</li>{' '}
          </ul>
        </div>
        <div className='col-12 col-md-6 text-end'>
          <NavLink to=''><FaFacebook size={30} className='m-3 icon_link' /></NavLink>
          <NavLink to=''><FaInstagram size={30} className='me-3 icon_link' /></NavLink>
        </div>
      </div> */}
    </div>
  )
}

export default DesktopFooter



//  container-fluid footer mt-5 d-none d-lg-block d-md-block