import React, { useState, useEffect } from 'react';
import RelatedBooksCard from './RelatedBooksCard';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import BookCardSlider from '../../components/Slider/BookCardSlider';

type RelatedBookSliderProps = {
    topic: string;
    books: {
        id: number;
        image: string;
        writer: string;
        title: string;
        country: string;
        categories: string[];
    }[];
};

const RelatedBookSlider: React.FC<RelatedBookSliderProps> = ({
    topic,
    books,
}) => {
    const [page, setPage] = useState(0); // For showing progress dots in slider
    const { isXtraLarge, isXtraSmall } = useScreenWidthAndHeight();
    const [sliderContainer, setSliderContainer] = useState<HTMLElement | null>(
        null,
    ); // For getting the width of the slider container
    useEffect(() => {
        // This code will be executed after the DOM has fully loaded.

        setSliderContainer(
            document.getElementById('sliderContainerBestSellers'),
        );
        // Rest of your slider setup and manipulation code here

        // Cleanup code (if needed) when the component unmounts
        return () => {
            // Cleanup code here if necessary
        };
    }, []);
    const slider: HTMLElement | null | undefined =
        document.getElementById('SliderBestSellers');
    const cards: HTMLCollectionOf<HTMLLIElement> | undefined =
        slider?.getElementsByTagName('li');
    const elementsToShow: number = isXtraLarge ? 3 : 2; // Number of cards to show in the slider
    const sliderContainerWidth: number = sliderContainer?.clientWidth || 0;
    const cardWidth: number = sliderContainerWidth / elementsToShow;
    if (slider) {
        slider.style.width = cardWidth * (cards?.length || 0) + 'px';
        slider.style.transition = 'margin';
        slider.style.transitionDuration = '1s';
    }
    for (let i = 0; cards && i < cards.length; i++) {
        const card = cards[i];
        card.style.width = cardWidth + 'px';
    }

    const next = () => {
        if (
            slider &&
            -slider.style.marginLeft.slice(0, -2)! <=
                cardWidth * ((cards?.length || 0) - 1 - elementsToShow)
        ) {
            slider.style.marginLeft =
                (+slider.style.marginLeft.slice(0, -2) || 0) - cardWidth + 'px';
        }
    };

    const prev = () => {
        if (
            slider &&
            +slider.style.marginLeft.slice(0, -2) !== 0 &&
            -slider.style.marginLeft.slice(0, -2) >= 0
        ) {
            slider.style.marginLeft =
                (+slider.style.marginLeft.slice(0, -2) || 0) + cardWidth + 'px';
        }
    };
    return (
        <>
            <div className=" flex flex-row  items-center gap-2 xm:gap-4 w-fit font-semibold">
                <p className=" text-base xm:text-xl lg:text-2xl font-lexend">
                    {topic}
                </p>
            </div>
            <div className="p-2 w-fit xss:w-full">
                {/* w-[220px] xss:w-[270px] xm:w-[510px] sm:w-[600px] tab:w-[570px] lg:w-[600px] xl:w-[900px] */}
                <div
                    id="sliderContainerBestSellers"
                    className="w-full overflow-hidden"
                >
                    <ul id="SliderBestSellers" className="flex w-full">
                        {books.slice(0, 6).map((book, index) => (
                            <li key={index} className="w-[126px] sm:w-full">
                                <div className="flex flex-row  h-full">
                                    <RelatedBooksCard book={book} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col gap-2 text-theme-color w-fit">
                    {/* Header */}
                    <div>
                        <div className="flex flex-row gap-2  items-center justify-between">
                            {/* Title */}

                            {/* Slider component */}
                            {!isXtraSmall && (
                                <div className=" pr-3">
                                    <BookCardSlider
                                        page={page}
                                        setPage={setPage}
                                        next={next}
                                        prev={prev}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    {isXtraSmall && (
                        <div className="flex flex-row justify-between items-center px-2 pl-2">
                            <div className=" ">
                                <BookCardSlider
                                    page={page}
                                    setPage={setPage}
                                    next={next}
                                    prev={prev}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default RelatedBookSlider;
