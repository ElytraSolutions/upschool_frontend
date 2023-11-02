import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { RelatedBooks } from '../../data/LibraryBooks';
import { useNavigate } from 'react-router-dom';

const BooksPopUp = ({ showAuthorBookPopUp, setShowAuthorBookPopUp }) => {
    return (
        <Dialog open={showAuthorBookPopUp}>
            <DialogTitle className="bg-gray-100">
                <div className="w-full flex-row flex justify-between text-theme-color">
                    <div className="w-1/2">More from this author</div>
                    <div className="w-1/2 flex justify-end">
                        <button
                            className="px-2 bg-white rounded"
                            onClick={() => {
                                setShowAuthorBookPopUp(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                </div>
            </DialogTitle>
            <DialogContent className="bg-gray-100">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {RelatedBooks.map((book) => {
                        return (
                            <BookComponent
                                book={book}
                                setShowAuthorBookPopUp={setShowAuthorBookPopUp}
                            />
                        );
                    })}
                </div>
            </DialogContent>
        </Dialog>
    );
};

const BookComponent = ({ book, setShowAuthorBookPopUp }) => {
    const navigate = useNavigate();

    const convertToSlug = (title: string) => {
        const words = title.toLowerCase().split(' ');
        const slugTitle = words.join('-');

        return slugTitle;
    };

    const handleButtonClick = () => {
        setShowAuthorBookPopUp(false);
        const slugTitle = convertToSlug(book.title);
        navigate(`/library/${slugTitle}`, { state: book });
    };

    return (
        <>
            <div className="bg-white rounded-lg overflow-hidden flex flex-col justify-between text-theme-color">
                <div>
                    <div className="h-20 xs:h-28">
                        <img
                            className="h-full w-full object-fit"
                            alt="book"
                            loading="lazy"
                            src={book.image}
                        />
                    </div>
                    <div className="mt-1 mx-2">
                        <div className="font-bold text-[0.5rem] xs:text-xs">
                            {book.writer}
                        </div>
                        <div className="font-extrabold text-sm xs:text-lg line-clamp-1">
                            {book.title}
                        </div>
                    </div>
                </div>
                <div className="mx-2 mb-1">
                    <div className="bg-gray-100 inline-block px-2 rounded text-[0.4rem] xs:text-xs">
                        {book.country}
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleButtonClick}
                            className="w-full text-white bg-red-upschool my-2 rounded text-sm py-1 xs:text-base xs:py-2"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BooksPopUp;
