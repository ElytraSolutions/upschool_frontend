import React from 'react';
import FlipBook from './FlipBook';
type BookCardProps = {
    book: {
        id: number;
        thumbnail: string;
        first_name: string;
        title: string;
        country: string;
        categories: {
            name: string;
            id: number;
        }[];
    };
};
const BookImageSection: React.FC<BookCardProps> = ({ book }) => {
    const { first_name, title, country, categories } = book;
    console.log('book as prop received', book);
    return (
        <>
            <div className="flex flex-col md:flex-row md:justify-between text-blue-950">
                <div>
                    <div className="flex">
                        <div className="flex justify-center items-center">
                            <svg
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1.2em"
                                width="1.2em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
                            </svg>
                        </div>
                        <span className="mx-2 text-center">{first_name}</span>
                    </div>
                    <div className="text-4xl mt-3 font-bold">{title}</div>
                </div>
                <div className="text-left md:text-right">
                    <div>Author's Location: </div>
                    <div className=" bg-white pl-5 pr-3 py-2 mt-2 rounded-xl flex">
                        {/* TODO provide correct image path */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png"
                            alt="flag"
                            className="h-5 rounded"
                        ></img>
                        <div className="pl-2">{country}</div>
                    </div>
                </div>
            </div>
            <div>
                {/* <div className="bg-gray-200 p-4 text-white flex justify-center items-center pb-6 md:pb-8 lg:pb-10">
                    <img src={image} className="w-full md:w-1/2 lg:w-1/2"></img>
                </div> */}
                <div className="bg-gray-300 pt-4 text-white flex flex-col items-center mt-3 py-6 md:py-8 lg:py-10 relative mb-6">
                    <FlipBook />
                </div>
                <div
                    className="flex justify-center items-center flex-wrap text-blue-900 font-normal"
                    id="categoryElement"
                >
                    {categories?.map((category, index) => (
                        <div
                            className="mx-2 my-1 px-2 py-1 bg-white text-center text-xs rounded-xl"
                            key={index}
                        >
                            {category.name}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BookImageSection;
