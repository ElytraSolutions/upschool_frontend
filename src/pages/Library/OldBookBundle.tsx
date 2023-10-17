import { NavLink } from 'react-router-dom';
import { BookList } from '../../data/BookBundleList';

// TODO This needs to be fetched from backend
const information = [
    { tiltle: 'Paperback', price: 399, donation: 0 },
    { tiltle: 'Hardback', price: 549, donation: 0 },
    { tiltle: 'eBooks', price: 50, donation: 0 },
];
export default function BookBundle() {
    return (
        <>
            <div className="flex flex-row justify-center">
                <div className="w-[95%] lg:w-5/6 xl:w-2/3 flex flex-col gap-6 py-3 px-2 xs:px-5 sm:px-6 lg:px-7">
                    {/* photo */}
                    <div className="w-full h-full">
                        <img
                            src="/images/LibraryBackground.png"
                            alt="LibraryBackground"
                            loading="lazy"
                        />
                    </div>
                    {/* BuyOption */}
                    {/* TODO implement logic what they perform */}
                    <div className="flex flex-col xm:flex-row  md:justify-start gap-1 text-white">
                        {information.map((inf, index) => (
                            <div
                                key={index}
                                className=" bg-red-custom flex flex-col gap-2 w-full xm:w-fit p-2 h-full"
                            >
                                <p className="md:text-xs lg:text-sm">
                                    Buy in {inf.tiltle}
                                </p>
                                <p className="md:text-xs lg:text-base font-semibold">
                                    AU ${inf.price}
                                </p>
                                <p className="md:text-xs lg:text-sm">
                                    Donation: AU ${inf.donation}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* description */}
                    <div className="flex flex-col w-full text-theme-color">
                        <h1 className="text-base md:text-lg lg:text-2xl font-bold">
                            Values for a Better Tomorrow Book Bundle
                        </h1>
                        <p className="font-light text-sm lg:text-base">
                            Enjoy a handpicked selection of 10 books from the
                            Upschool Library that explore essential values
                            through the eyes of a child. Each book comes with
                            downloadable resources that can be used in any
                            learning setting.
                            <br />
                            <br />
                            These books feature in Upschool's free 10-week
                            course, Values for a Better Tomorrow. By purchasing
                            these books you are supporting the voice of a young
                            author whilst raising funds to support critical
                            projects around the world.
                        </p>
                    </div>
                    {/* Book bundle table */}
                    <table className=" border-collapse text-xs xs:text-sm lg:text-base text-left w-fit h-full text-theme-color ">
                        <thead>
                            <tr>
                                <th className="border border-b-2 border-theme-color p-2 pr-3 sm:pr-6 ">
                                    Book Name
                                </th>
                                <th className="border border-b-2 border-theme-color p-2 pr-3 sm:pr-6  ">
                                    Value Explored
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {BookList.map((book, index) => (
                                <tr
                                    key={index}
                                    className=" last:border-b border-theme-color font-light "
                                >
                                    <td className="border-x  border-theme-color p-2 pr-3 sm:pr-6">
                                        {index + 1}. {book.name}
                                    </td>
                                    <td className="border-x  border-theme-color p-2 pr-3 sm:pr-6">
                                        {book.category}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Return back to library */}
                    <div className="w-fit my-2 mr-3 text-theme-color">
                        <NavLink
                            to="/library"
                            className="flex flex-row justify-start gap-1 items-center"
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                    />
                                </svg>
                            </span>
                            <span>Back to the library</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
