import React, { useState, useEffect } from 'react';
import NewBookCard from '../../../components/Cards/NewBookCard';
import BookCardSlider from '../../../components/Slider/BookCardSlider';

type SectionProps = {
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
const SectionBestSellers: React.FC<SectionProps> = ({ topic, books }) => {
    const [page, setPage] = useState(0); // For showing progress dots in slider
    const [sliderContainer, setSliderContainer] = useState<HTMLElement | null>(
        null,
    ); // For getting the width of the slider container
    useEffect(() => {
        // This code will be executed after the DOM has fully loaded.

        setSliderContainer(document.getElementById('sliderContainerFeatured'));
        // Rest of your slider setup and manipulation code here

        // Cleanup code (if needed) when the component unmounts
        return () => {
            // Cleanup code here if necessary
        };
    }, []);
    const slider: HTMLElement | null | undefined =
        document.getElementById('SliderFeatured');
    const cards: HTMLCollectionOf<HTMLLIElement> | undefined =
        slider?.getElementsByTagName('li');
    const elementsToShow: number = 3; // Number of cards to show in the slider
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
            <div className="flex flex-col gap-2 text-theme-color">
                {/* Header */}
                <div className="p-2 pl-7">
                    <div className="flex flex-row gap-2  items-center justify-between ">
                        {/* Title */}
                        <div className="flex flex-row  items-center gap-4 w-fit font-semibold">
                            <p className="text-2xl lg:text-3xl">{topic}</p>
                            {/* TODO determine where it goes when pressed */}
                            <p className="underline underline-offset-4 text-sm lg:text-base ">
                                View All {`>`}
                            </p>
                        </div>
                        {/* Slider component */}
                        <div className="pr-3">
                            <BookCardSlider
                                page={page}
                                setPage={setPage}
                                next={next}
                                prev={prev}
                            />
                        </div>
                    </div>
                </div>
                <div className="pl-7 p-2">
                    <div
                        id="sliderContainerFeatured"
                        className="w-[900px] overflow-hidden "
                    >
                        <ul id="SliderFeatured" className="flex w-full">
                            {books.slice(0, 6).map((book, index) => (
                                <li key={index} className="w-full">
                                    <div className="flex flex-row justify-center h-full">
                                        <NewBookCard book={book} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionBestSellers;
