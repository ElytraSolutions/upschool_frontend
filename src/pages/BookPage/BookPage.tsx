import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BookImageSection from './BookImageSection';
import BookDescriptionSection from './BookDescriptionSection';

const BookPage = () => {
    const location = useLocation();
    // console.log(location.state);
    const book = location.state;
    console.log('book', book);

    useEffect(() => {
        window.scrollTo(0, 0);
        // document.title = `${} | Upschool`;
    }, []);

    return (
        <>
            <div className="bg-gray-200 font-lexend">
                <div className="h-14 flex bg-gradient-to-r from-blue-950 to-red-900 text-white">
                    <div className="mx-auto w-4/5 flex items-center lg:w-2/3">
                        <span className="font-extrabold">Home / Library /</span>
                        <span>{' ' + book.title}</span>
                    </div>
                </div>
                <div className="mx-auto md:10/12 w-4/5 mt-6 lg:w-2/3">
                    <BookImageSection book={book} />
                    <BookDescriptionSection />
                </div>
            </div>
        </>
    );
};

export default BookPage;
