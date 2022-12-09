import React, { useEffect, useState } from 'react'
import './product.css'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Image1 from '../../Assets/images/product/one.png';
import Image2 from '../../Assets/images/product/two.png';
import Image3 from '../../Assets/images/product/three.png';
import Image4 from '../../Assets/images/product/four.png';
import ImageBig from '../../Assets/images/carrot.jpg';

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