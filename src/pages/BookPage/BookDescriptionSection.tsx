import { useState, useCallback, useEffect } from 'react';
import AuthorsRecommendedProject from './AuthorsRecommendedProject';
import RelatedBooksComponent from './RelatedBooksComponent';
import ProjectPopup from '../../components/PopupPayment/ProjectPopup';

const BookDescriptionSection = () => {
    // replace with the book description

    const [isPopupVisible, setPopupVisible] = useState(false);

    const openPopup = useCallback(() => {
        setPopupVisible(true);
    }, []);

    const closePopup = useCallback(() => {
        setPopupVisible(false);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isPopupVisible ? 'hidden' : 'unset';
    }, [isPopupVisible]);

    const bookDescription =
        'Excepteur excepteur deserunt cupidatat reprehenderit in consectetur ut magna commodo. \
        Officia nulla aliquip proident cupidatat laboris quis eiusmod officia fugiat do anim. Dolore \
        ad dolor consectetur dolor esse laborum in eu eu nulla exercitation nostrud laborum. Id Lorem fugiat\
         tempor exercitation deserunt sit veniam ullamco ex officia pariatur laborum consequat. Voluptate \
         aliqua velit laboris ad anim ut.';

    return (
        <>
            <br />
            <div className="flex flex-col md:grid md:grid-cols-7 lg:grid-cols-6  md:grid-rows-4  xl:grid-rows-5 gap-2 text-blue-950 h-full w-full overflow-scroll">
                <div className="md:col-span-4 md:row-span-2 h-full w-full ">
                    <div className="text-md sm:text-xl">{bookDescription}</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:m-4 font-bold flex-wrap">
                        <button className="bg-red-upschool hover:bg-pink-900 text-white py-2 px-4 my-1 font-thin text-left sm:text-sm text-xs">
                            BUY PAPERBACK
                            <span className="block text-left font-bold">
                                AU $59.0
                            </span>
                        </button>
                        <button className="bg-red-upschool text-left hover:bg-pink-900 text-white py-2 px-4 my-1 font-thin sm:text-sm text-xs">
                            BUY HARDBACK
                            <span className="block text-left font-bold">
                                AU $49.0
                            </span>
                        </button>
                        <button
                            onClick={openPopup}
                            className="bg-red-upschool  over:bg-pink-900 text-white py-2 px-4 my-1 font-thin text-left sm:text-sm text-xs"
                        >
                            BUY EBOOK
                            <span className="block text-left font-bold">
                                AU $5.0
                            </span>
                        </button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-red-upschool py-2 px-4 my-1 border border-red-upschool sm:text-sm text-xs">
                            REPORT ISSUE
                        </button>
                    </div>
                    <div className="text-gray-500 text-sm">What to expect?</div>
                </div>
                <div className="md:col-span-3 lg:col-span-2 md:row-span-4 xl:row-span-5 h-full w-full ">
                    <AuthorsRecommendedProject />
                </div>
                <div className="md:col-span-4 md:row-span-2  xl:row-span-3 h-full w-full ">
                    <RelatedBooksComponent />
                </div>
            </div>
            {isPopupVisible && <ProjectPopup onClose={closePopup} />}
        </>
    );
};

export default BookDescriptionSection;
