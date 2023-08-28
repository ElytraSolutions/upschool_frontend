import Carousel from '../components/Carousels/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [];

function CarouselFramework() {
    return (
        <>
            <Carousel images={images} />
        </>
    );
}

export default CarouselFramework;
