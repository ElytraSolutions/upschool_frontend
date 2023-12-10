import { useState, useCallback, useEffect } from 'react';
import AuthorsRecommendedProject from './AuthorsRecommendedProject';
import RelatedBooksComponent from './RelatedBooksComponent';
import ProjectPopup from '../../components/PopupPayment/ProjectPopup';
import { Link } from 'react-router-dom';
import ExpectPopup from './ExpectPopup';

const BookDescriptionSection = ({ description }) => {
    // replace with the book description
    const [expectPopup, setExceptPopup] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);

    const openExpectPopup = useCallback(() => {
        setExceptPopup(true);
    }, []);

    const closeExpectPopup = useCallback(() => {
        setExceptPopup(false);
    }, []);

    const openPopup = useCallback(() => {
        setPopupVisible(true);
    }, []);

    const closePopup = useCallback(() => {
        setPopupVisible(false);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isPopupVisible ? 'hidden' : 'unset';
    }, [isPopupVisible]);

    useEffect(() => {
        document.body.style.overflow = expectPopup ? 'hidden' : 'unset';
    }, [expectPopup]);

    // const bookDescription =
    //     'Excepteur excepteur deserunt cupidatat reprehenderit in consectetur ut magna commodo. \
    //     Officia nulla aliquip proident cupidatat laboris quis eiusmod officia fugiat do anim. Dolore \
    //     ad dolor consectetur dolor esse laborum in eu eu nulla exercitation nostrud laborum. Id Lorem fugiat\
    //      tempor exercitation deserunt sit veniam ullamco ex officia pariatur laborum consequat. Voluptate \
    //      aliqua velit laboris ad anim ut.';

    return (
        <>
            <br />
            <div className="flex flex-col md:grid md:grid-cols-7 lg:grid-cols-6 md:grid-rows-4  xl:grid-rows-5 gap-x-10 gap-y-2 text-blue-950 h-full w-full">
                <div className="md:col-span-4 md:row-span-2 h-full w-full ">
                    <div className="text-md sm:text-xl mt-4 mb-6">
                        {description}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-4 font-bold flex-wrap">
                        <button
                            onClick={openPopup}
                            className="bg-red-upschool hover:bg-pink-900 text-white py-2 px-4 my-1 font-normal text-left sm:text-sm text-xs"
                        >
                            BUY PAPERBACK
                            <span className="block text-left font-regular text-[1.1rem]">
                                AU $59.0
                            </span>
                        </button>
                        <button
                            onClick={openPopup}
                            className="bg-red-upschool text-left hover:bg-pink-900 text-white py-2 px-4 my-1 font-normal sm:text-sm text-xs"
                        >
                            BUY HARDBACK
                            <span className="block text-left font-regular text-[1.1rem]">
                                AU $49.0
                            </span>
                        </button>
                        <button
                            onClick={openPopup}
                            className="bg-red-upschool hover:bg-pink-900 text-white py-2 px-4 my-1 font-normal text-left sm:text-sm text-xs"
                        >
                            BUY EBOOK
                            <span className="block text-left font-regular text-[1.1rem]">
                                AU $5.0
                            </span>
                        </button>
                        <button className="hover:bg-gray-300 text-red-upschool py-2 px-4 my-1 border border-red-upschool sm:text-sm text-xs">
                            <Link to="/report-a-problem">REPORT ISSUE</Link>
                        </button>
                    </div>
                    <div className="flex gap-2 items-center">
                        <button
                            className="flex flex-cols gap-2 items-center"
                            onClick={openExpectPopup}
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 0C4.02979 0 0 4.03124 0 9C0 13.9717 4.02979 18 9 18C13.9702 18 18 13.9717 18 9C18 4.03124 13.9702 0 9 0ZM9 3.99194C9.84179 3.99194 10.5242 4.67434 10.5242 5.51613C10.5242 6.35792 9.84179 7.04032 9 7.04032C8.15821 7.04032 7.47581 6.35792 7.47581 5.51613C7.47581 4.67434 8.15821 3.99194 9 3.99194ZM11.0323 13.2097C11.0323 13.4502 10.8373 13.6452 10.5968 13.6452H7.40323C7.16273 13.6452 6.96774 13.4502 6.96774 13.2097V12.3387C6.96774 12.0982 7.16273 11.9032 7.40323 11.9032H7.83871V9.58064H7.40323C7.16273 9.58064 6.96774 9.38566 6.96774 9.14516V8.27419C6.96774 8.0337 7.16273 7.83871 7.40323 7.83871H9.72581C9.9663 7.83871 10.1613 8.0337 10.1613 8.27419V11.9032H10.5968C10.8373 11.9032 11.0323 12.0982 11.0323 12.3387V13.2097Z"
                                    fill="black"
                                    fill-opacity="0.3"
                                />
                            </svg>

                            <div className="text-gray-500 text-base underline font-nunito ">
                                What to expect?
                            </div>
                        </button>
                    </div>
                </div>
                <div className="md:col-span-3 lg:col-span-2 md:row-span-4 xl:row-span-5 h-full w-full mt-4">
                    <AuthorsRecommendedProject />
                </div>
                <div className="md:col-span-4 md:row-span-2 xl:row-span-3 h-full w-full">
                    <RelatedBooksComponent />
                </div>
            </div>
            {isPopupVisible && <ProjectPopup onClose={closePopup} />}
            {expectPopup && <ExpectPopup onClose={closeExpectPopup} />}
        </>
    );
};

export default BookDescriptionSection;
