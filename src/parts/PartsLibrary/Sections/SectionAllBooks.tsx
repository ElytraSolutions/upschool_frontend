import React, { useEffect } from 'react';
import BookCard from '../../../components/Cards/BookCard';

type SectionProps = {
    topic: string;
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
const SectionShowBooks: React.FC<SectionProps> = ({ topic, books }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className=" flex flex-col gap-2 text-theme-color">
                <div className=" font-semibold">
                    <p className="text-base xm:text-xl lg:text-2xl font-lexend">
                        {topic}
                    </p>
                </div>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxlarge:grid-cols-4  gap-5 sm:gap-7 tab:gap-4 lg:gap-7 w-fit ">
                        {books?.map((book, index) => (
                            <BookCard key={index} book={book} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionShowBooks;
