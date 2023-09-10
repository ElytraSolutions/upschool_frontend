import { BookCard } from '../../components/Cards/BookCard';
import { books } from '../../data/LibraryBooks';

export default function Library() {
    return (
        <>
            <div className="grid  gap-1 xs:grid-cols-2 xs:gap-2 justify-items-center sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
                {books.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </>
    );
}
