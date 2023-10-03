import React from 'react';
import NewBookCard from '../../../components/Cards/NewBookCard';

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
const SectionAllBooks: React.FC<SectionProps> = ({ topic, books }) => {
    return (
        <>
            <div className=" flex flex-col gap-2  pl-7 text-theme-color">
                <div className="flex flex-row  items-center gap-4 w-fit font-semibold p-2">
                    <p className="text-2xl lg:text-3xl">{topic}</p>
                </div>
                <div className="pl-5 w-full">
                    <div className="flex flex-wrap gap-7 w-[900px]">
                        {books.map((book, index) => (
                            <div key={index} className="">
                                <NewBookCard book={book} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionAllBooks;
