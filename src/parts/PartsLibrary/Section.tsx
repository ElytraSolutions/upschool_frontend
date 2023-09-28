import React, { useState } from 'react';
import NewBookCard from '../../components/Cards/NewBookCard';
import { books } from '../../data/LibraryBooks';
import BookCardSlider from '../../components/Slider/BookCardSlider';

type SectionProps = {
    topic: string;
};
const Section: React.FC<SectionProps> = ({ topic }) => {
    const [page, setPage] = useState(1);
    return (
        <>
            <div className="flex flex-col gap-2 text-theme-color">
                {/* Header */}
                <div className="flex flex-row gap-2  items-center justify-between p-2 md:pl-7">
                    {/* Title */}
                    <div className="flex flex-row  items-center gap-4 w-fit font-semibold">
                        <p className="text-2xl lg:text-3xl">{topic}</p>
                        {/* TODO determine where it goes when pressed */}
                        <p className="underline underline-offset-4 text-sm lg:text-base ">
                            View All {`>`}
                        </p>
                    </div>
                    {/* Slider component */}
                    <BookCardSlider page={page} setPage={setPage} />
                </div>
                {/* Books */}
                <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-5 w-fit p-2 md:pl-7">
                    {books.map((book, index) => (
                        <NewBookCard key={index} book={book} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Section;
