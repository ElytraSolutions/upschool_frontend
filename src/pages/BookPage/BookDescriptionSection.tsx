import AuthorsRecommendedProject from './AuthorsRecommendedProject';
import RelatedBooksComponent from './RelatedBooksComponent';

const BookDescriptionSection = ({ setBook }) => {
    // replace with the book description
    const bookDescription =
        'Excepteur excepteur deserunt cupidatat reprehenderit in consectetur ut magna commodo. \
        Officia nulla aliquip proident cupidatat laboris quis eiusmod officia fugiat do anim. Dolore \
        ad dolor consectetur dolor esse laborum in eu eu nulla exercitation nostrud laborum. Id Lorem fugiat\
         tempor exercitation deserunt sit veniam ullamco ex officia pariatur laborum consequat. Voluptate \
         aliqua velit laboris ad anim ut.';

    return (
        <>
            <br />
            <div className="flex flex-wrap text-blue-950">
                <div className="md:w-2/3 p-4 px-4">
                    <div className="text-md sm:text-xl">{bookDescription}</div>
                    <div className="flex justify-between sm:m-4 font-bold flex-wrap">
                        <button className="bg-pink-700 hover:bg-pink-900 text-white py-2 px-4 my-1 font-thin text-left sm:text-sm text-xs">
                            BUY PAPERBACK
                            <span className="block text-left font-bold">
                                AUD $20.0
                            </span>
                        </button>
                        <button className="bg-pink-700 hover:bg-pink-900 text-white py-2 px-4 my-1 font-thin sm:text-sm text-xs">
                            BUY HARDBACK
                            <span className="block text-left font-bold">
                                AUD $20.0
                            </span>
                        </button>
                        <button className="bg-pink-700 hover:bg-pink-900 text-white py-2 px-4 my-1 font-thin text-left sm:text-sm text-xs">
                            BUY EBOOK
                            <span className="block text-left font-bold">
                                AUD $20.0
                            </span>
                        </button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-pink-700 py-2 px-4 my-1 border border-pink-700 sm:text-sm text-xs">
                            REPORT ISSUE
                        </button>
                    </div>
                    <div className="text-gray-500 text-sm">What to expect?</div>
                </div>
                <AuthorsRecommendedProject />
                <RelatedBooksComponent setBook={setBook} />
            </div>
        </>
    );
};

export default BookDescriptionSection;
