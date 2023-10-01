import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { books } from '../../data/LibraryBooks';

import NewBookCard from '../../components/Cards/NewBookCard';

const responsive = {
    // 0: { items: 1 },
    350: { items: 2 },
    568: { items: 3 },
};

const createItems = ([handleClick]) => {
    let deltaX = 0;
    let difference = 0;
    const swipeDelta = 20;

    return books.map((book, index) => (
        <div
            key={index}
            onMouseDown={(e) => (deltaX = e.pageX)}
            onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
            onClick={() => difference < swipeDelta && handleClick(index)}
        >
            <NewBookCard book={book} />
        </div>
    ));
};

// const data = books.map((book, index) => (
//     <div key={index} className="">
//         <NewBookCard book={book} />
//     </div>
// ));

const MyCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [items] = useState(createItems([setActiveIndex]));

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return [
        <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            items={items}
            activeIndex={activeIndex}
            responsive={responsive}
            onSlideChanged={syncActiveIndex}
        />,

        <div className="b-refs-buttons">
            <button onClick={slidePrev}>Prev</button>
            <button onClick={slideNext}>Next</button>
        </div>,
    ];
};

export default MyCarousel;
