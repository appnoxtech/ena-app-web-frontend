import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Auth.css'
import '../../../assets/global/global.css'
import verifyImg from '../../../assets/images/114809-success.gif'
import banner from '../../../assets/images/bannerH.png'
import EnaLogo from '../../../assets/images/enaLogoGreen.png'
import bannerforphone from '../../../assets/images/banner.png'
import ButtonComp from '../../../component/Common/buttonComp/ButtonComp'

function Passchanged() {
  const heading = 'Password Changed'
  const navigate = useNavigate()

  const navigationHandler = () => {
    navigate('/login')
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-4 text-center d-none d-lg-block'>
              <img src={banner} className='img-fluid w-75 p-3 pt-0' />
            </div>
            <div className='col-4 text-center d-none d-md-block d-lg-none'>
              <img src={bannerforphone} className='img-fluid w-100 p-3 pt-' />
            </div>
            <div className='col-12 text-center d-lg-none d-sm-block d-md-none'>
              <img src={EnaLogo} className='img-fluid w-50 p-3 mt-5 pt-5' />
            </div>
            <div className='col-lg-8 col-md-8 col-sm-12'>
              <div className='col-10 mx-auto mt-3 pt-0 text-center'>
                <img src={verifyImg} alt='verifyImg' width='20%' />
                <p className='mt-1 h3 fontWeight-700'>{heading}</p>
                <p className='h6'>
                  Password has been changed
                  <br />
                  successfully.
                </p>
                <ButtonComp
                  navigationHandler={navigationHandler}
                  type='button'
                  class='btn w-100 h-100 mt-4 fontWeight-600 button1'
                  btvalue='Back to Login'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Passchanged
