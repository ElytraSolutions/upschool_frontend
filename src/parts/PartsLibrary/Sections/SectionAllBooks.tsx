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
const SectionShowBooks: React.FC<SectionProps> = ({ topic, books }) => {
    return (
        <>
            <div className=" flex flex-col gap-2  pl-2 lg:pl-6 text-theme-color">
                <div className="flex flex-row  items-center gap-4 w-fit font-semibold p-2">
                    <p className="text-base xm:text-xl lg:text-2xl font-lexend">
                        {topic}
                    </p>
                </div>
                <div className=" xm:pl-2 sm:pl-4 tab:pl-2 lg:pl-3 xl:pl-5 w-full">
                    <div className="flex flex-wrap justify-center xm:justify-start gap-5 sm:gap-7 tab:gap-4 lg:gap-7 w-[220px] xss:w-[270px] xm:w-[510px] sm:w-[600px] tab:w-[570px] lg:w-[600px] xl:w-[900px]">
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

export default SectionShowBooks;
