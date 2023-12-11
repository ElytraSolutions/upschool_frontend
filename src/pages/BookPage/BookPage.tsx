import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import BookImageSection from './BookImageSection';
import BookDescriptionSection from './BookDescriptionSection';
import axiosInstance from '../../config/Axios';
import Loading from '../../components/Loading';

const defaultBook = {
    id: 0,
    thumbnail: '',
    first_name: '',
    title: '',
    country: '',
    categories: [
        {
            name: '',
            id: 0,
        },
    ],
};

const BookPage = () => {
    const location = useLocation();
    // console.log(location.state);
    const { id } = useParams();
    console.log('you are at: ', id);
    const [book, setBook] = useState<any>(null);
    console.log('book: ', book);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.state) {
            setBook(location.state);
        } else {
            (async () => {
                const res = await axiosInstance.get(`data/books/detail/${id}`);
                setBook(res.data.data);
            })();
        }
    }, [id, location.state]);

    if (!book) {
        document.title = 'Loading... | Upschool';
        return <Loading />;
    } else {
        document.title = `${book?.title} | Upschool`;
    }

    return (
        <>
            <div className="bg-gray-200 pb-[60px] font-lexend">
                <div className="h-14 flex bg-gradient-to-r from-blue-950 to-red-900 text-white">
                    <div className="mx-auto w-4/5 flex items-center gap-x-1 lg:w-2/3">
                        <span className="font-extrabold">
                            <Link to="/">Home</Link> /{' '}
                            <Link to="/library">Library</Link> /
                        </span>
                        <span>{book?.title}</span>
                    </div>
                </div>
                <div className="mx-auto md:10/12 w-4/5 mt-6 lg:w-2/3">
                    <BookImageSection book={book ? book : defaultBook} />
                    <BookDescriptionSection
                        description={book ? book.description : ''}
                        projectData={book ? book.project : {}}
                    />
                </div>
            </div>
        </>
    );
};

export default BookPage;
