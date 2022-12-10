import React, { useEffect, useState } from 'react'
import './product.css'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
// import Image1 from '../../assets/images/one.png';
// import Image2 from '../../assets/images/two.png';
// import Image3 from '../../assets/images/three.png';
// import Image4 from '../../assets/images/four.png';
// import ImageBig from '../../assets/images/carrot.jpg';

const images = [
  {
    original: 'https://drhealthbenefits.com/wp-content/uploads/2017/06/carrot-leaves.jpg',
    thumbnail: 'https://drhealthbenefits.com/wp-content/uploads/2017/06/carrot-leaves.jpg',
  },
  {
    original: 'https://drhealthbenefits.com/wp-content/uploads/2017/06/carrot-leaves.jpg',
    thumbnail: 'https://drhealthbenefits.com/wp-content/uploads/2017/06/carrot-leaves.jpg',
  },
  {
    original: 'https://drhealthbenefits.com/wp-content/uploads/2017/06/carrot-leaves.jpg',
    thumbnail: 'https://drhealthbenefits.com/wp-content/uploads/2017/06/carrot-leaves.jpg',
  },
  {
    original: 'https://drhealthbenefits.com/wp-content/uploads/2017/06/carrot-leaves.jpg',
    thumbnail: 'https://drhealthbenefits.com/wp-content/uploads/2017/06/carrot-leaves.jpg',
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