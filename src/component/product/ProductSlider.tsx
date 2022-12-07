import React from 'react'
import './product.css'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Image1 from '../../Assets/Images/product/one.png';
import Image2 from '../../Assets/Images/product/two.png';
import Image3 from '../../Assets/Images/product/three.png';
import Image4 from '../../Assets/Images/product/four.png';
import ImageBig from '../../Assets/Images/carrot.jpg';

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