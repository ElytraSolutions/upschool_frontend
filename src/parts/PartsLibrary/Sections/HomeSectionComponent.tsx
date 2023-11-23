import React, { useState, useEffect } from 'react';
// import BookCard from '../../../components/Cards/BookCard';
import HomeBookCard from './HomeBookCard';
import { useSearchParams } from 'react-router-dom';
import BookCardSlider from '../../../components/Slider/BookCardSlider';
type SectionProps = {
    topic: string;
    value: string;
    books: {
        id: number;
        thumbnail: string;
        slug: string;
        first_name: string;
        title: string;
        country: string;
        categories: {
            name: string;
            id: number;
        }[];
    }[];
};

const HomeSectionComponent: React.FC<SectionProps> = ({
    topic,
    value,
    books,
}) => {
    const [_searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(0); // For showing progress dots in slider
    // const [noOfBooksToShow, setNoOfBooksToShow] = useState(0);
    const MaxPage = 3;

    useEffect(() => {
        // set according to window.innerWidth
    }, []);
    return (
        <div className="  flex flex-col h-[500px] xlarge:h-[650px] ">
            {/* header */}
            <div className=" px-5 w-full flex justify-between text-theme-color mb-4">
                <div className="flex gap-4 items-center">
                    <h2 className="text-base xm:text-xl lg:text-2xl font-lexend font-semibold">
                        {topic}
                    </h2>
                    <p
                        className="inline-block underline underline-offset-4 text-sm lg:text-base hover:cursor-pointer"
                        onClick={() => {
                            setSearchParams((oldSearchParams) => {
                                oldSearchParams.set('section', value);
                                return oldSearchParams;
                            });
                        }}
                    >
                        View All {`>`}
                    </p>
                </div>
                <BookCardSlider
                    page={page}
                    setPage={setPage}
                    MaxPage={MaxPage}
                />
            </div>

            {/* books */}
            <div className="w-full h-full overflow-hidden">
                <div className={`flex gap-4 h-full `}>
                    {books.slice(page, page + 3).map((book, index) => {
                        return <HomeBookCard key={index} book={book} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomeSectionComponent;
