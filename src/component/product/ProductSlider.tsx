import React from 'react'
import './product.css'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Image1 from '../../assets/images/product/1.png';
import Image2 from '../../assets/images/product/2.png';
import Image3 from '../../assets/images/product/3.png';
import Image4 from '../../assets/images/product/4.png';
import ImageBig from '../../assets/images/product/carrot.png';

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
  return (
    <div className='productSliderMain'>
      <ImageGallery
        items={images}
        thumbnailPosition={'left'}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
      />
    </div>
  )
}

export default ProductSlider