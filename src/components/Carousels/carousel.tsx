import { Carousel as ResponsiveCarousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselProps {
    images: string[];
}

function Carousel({ images: images }: CarouselProps) {
    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-screen-lg w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/1 pt-10">
                    <ResponsiveCarousel
                        className="w-full"
                        showArrows={true}
                        showStatus={false}
                        showIndicators={false}
                    >
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} />
                            </div>
                        ))}
                    </ResponsiveCarousel>
                </div>
            </div>
        </>
    );
}

export default Carousel;
