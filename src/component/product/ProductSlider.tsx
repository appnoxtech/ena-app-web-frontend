import React, { useEffect, useState } from 'react'
import './product.css'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FC } from 'react';
// import Image1 from '../../assets/images/one.png';
// import Image2 from '../../assets/images/two.png';
// import Image3 from '../../assets/images/three.png';
// import Image4 from '../../assets/images/four.png';
// import ImageBig from '../../assets/images/carrot.jpg';

const ProductSlider:FC<any>= ({productInfo}) => {
  const [isMobile, setIsMobile] = useState(false);
  const images = [
    {
      original:productInfo.image,
      thumbnail:productInfo.image,
    },
    {
      original:productInfo.image,
      thumbnail:productInfo.image,
    },
    {
      original:productInfo.image,
      thumbnail:productInfo.image,
    },
    {
      original:productInfo.image,
      thumbnail:productInfo.image,
    },
  ];

  useEffect(() => {
    if(window.innerWidth < 768){
      setIsMobile(true)
    }
    else(
      setIsMobile(false)
    )
  }, [isMobile])
  return (
    <div className='productSliderMain  '>
      {/* <ImageGallery
        items={images}
        thumbnailPosition={isMobile ? 'bottom' :  'left'}
        showPlayButton={false}
        showThumbnails={isMobile ? false : true}
        showBullets={isMobile ? true : false}
        showFullscreenButton={false}
        showNav={false}
      /> */}

      <img src={productInfo.image} className='img-fluid mx-auto'/>
    </div>
  )
}

export default ProductSlider