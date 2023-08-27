import React from 'react';
import { Carousel } from 'react-responsive-carousel';

function multiImageCarousel({ images }) {
    return (
        <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            className=" w-11/12 mx-auto custom-carousel "
        >
            {images.map((imageSet, index) => (
                <div key={index} className="  bg-[#24225450] p-4">
                    <div className="flex items-center justify-center">
                        {imageSet.map((image, subIndex) => (
                            <div key={subIndex} className="w-1/4 px-10">
                                <img
                                    src={image}
                                    alt={`Image ${subIndex + 1}`}
                                    className="w-full h-40 object-contain bg-[#fff] py-5 rounded-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default multiImageCarousel;
