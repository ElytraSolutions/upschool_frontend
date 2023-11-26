import React, { useState, useEffect } from 'react';
// import BookCard from '../../../components/Cards/BookCard';
import HomeBookCard from './HomeBookCard';
import { useSearchParams } from 'react-router-dom';
import BookCardSlider from './Slider';
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
    const [noOfBooksToShow, setNoOfBooksToShow] = useState(1);
    const MaxPage = 3;
    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    // console.log(dimensions);
    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };
    React.useEffect(() => {
        window.addEventListener('resize', handleResize, false);
    }, []);

    useEffect(() => {
        // set according to window.innerWidth
        if (dimensions.width >= 1920) {
            setNoOfBooksToShow(4);
        } else if (dimensions.width >= 1280) {
            setNoOfBooksToShow(3);
        } else if (dimensions.width >= 640) {
            setNoOfBooksToShow(2);
        } else {
            setNoOfBooksToShow(1);
        }
    }, [dimensions]);
    // useEffect(() => {
    //      console.log('no of books to show', noOfBooksToShow);
    //      console.log('page', page);
    // }, [noOfBooksToShow, page]);
    return (
        <div className="  flex flex-col h-[500px] xlarge:h-[650px] ">
            {/* header */}
            <div className=" px-5 w-full flex justify-between text-theme-color mb-4">
                <div className="flex gap-2 md:gap-4 items-center">
                    <h2 className="text-[0.8rem] xm:text-xl lg:text-2xl font-lexend font-semibold">
                        {topic}
                    </h2>
                    <p
                        className="inline-block underline underline-offset-4 text-[0.6rem] lg:text-base hover:cursor-pointer"
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
                <div className={` w-full flex justify-center gap-4 h-full `}>
                    {books
                        ?.slice(page, page + noOfBooksToShow)
                        .map((book, index) => {
                            return <HomeBookCard key={index} book={book} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default HomeSectionComponent;