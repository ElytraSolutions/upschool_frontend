import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookImageSection from './BookImageSection';
import BookDescriptionSection from './BookDescriptionSection';

const BookPage = () => {
    const location = useLocation();
    const [book, setBook] = useState(location.state);
    console.log(book);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <div className="bg-gray-200">
                <div className="h-14 flex bg-gradient-to-r from-blue-950 to-red-900 text-white">
                    <div className="mx-auto w-4/5 flex items-center sm:w-2/3">
                        <b>/ Home / Online Books / </b> {book.title}
                    </div>
                </div>
                <div className="mx-auto w-4/5 mt-6 sm:w-2/3">
                    <BookImageSection book={book} />
                    <BookDescriptionSection setBook={setBook} />
                </div>
            </div>
        </>
    );
};

export default BookPage;
