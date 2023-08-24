import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images=[
    "/images/ourframework/1.jpg",
    "/images/ourframework/2.jpg",
    "/images/ourframework/3.jpg",
    "/images/ourframework/4.jpg",
    "/images/ourframework/5.jpg",
    "/images/ourframework/6.jpg",
    "/images/ourframework/7.jpg",
    "/images/ourframework/8.jpg",
    "/images/ourframework/9.jpg",
    "/images/ourframework/10.jpg",
    "/images/ourframework/11.jpg",
    "/images/ourframework/12.jpg",
    "/images/ourframework/13.jpg",
    "/images/ourframework/14.jpg",
    "/images/ourframework/15.jpg",
    "/images/ourframework/16.jpg",
    "/images/ourframework/17.jpg",
    "/images/ourframework/18.jpg",
    "/images/ourframework/19.jpg",
    "/images/ourframework/20.jpg",
    "/images/ourframework/21.jpg",
    "/images/ourframework/22.jpg",
    "/images/ourframework/23.jpg",
    "/images/ourframework/24.jpg",
    "/images/ourframework/25.jpg",
    "/images/ourframework/26.jpg",
    "/images/ourframework/27.jpg",
    "/images/ourframework/28.jpg",
    "/images/ourframework/29.jpg",
    "/images/ourframework/30.jpg",
    "/images/ourframework/31.jpg",
    "/images/ourframework/32.jpg",
    "/images/ourframework/33.jpg",
]


function CarouselFramework() {
  return (
    <>
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} />
        </div>
      )) }
    </Carousel>
    </>
    
  )
}

export default CarouselFramework