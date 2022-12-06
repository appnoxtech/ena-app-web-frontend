import React, { useEffect, useState } from 'react'
import './product.css'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Image1 from '../../assets/images/product/1.png';
import Image2 from '../../assets/images/product/2.png';
import Image3 from '../../assets/images/product/3.png';
import Image4 from '../../assets/images/product/4.png';
import ImageBig from '../../assets/images/carrot.jpg';

const images = [
  {
    original: ImageBig,
    thumbnail: Image1,
  },
  {
    original: Image2,
    thumbnail: Image2,
  },
  {
    original: Image3,
    thumbnail: Image3,
  },
  {
    original: Image4,
    thumbnail: Image4,
  },
];
const ProductSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(window.innerWidth < 768){
      setIsMobile(true)
    }
    else(
      setIsMobile(false)
    )
  }, [isMobile])
  return (
    <div className='productSliderMain'>
      <ImageGallery
        items={images}
        thumbnailPosition={isMobile ? 'bottom' :  'left'}
        showPlayButton={false}
        showThumbnails={isMobile ? false : true}
        showBullets={isMobile ? true : false}
        showFullscreenButton={false}
        showNav={false}
      />
    </div>
  )
}

export default ProductSlider