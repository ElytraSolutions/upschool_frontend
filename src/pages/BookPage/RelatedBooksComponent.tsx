import { RelatedBooks } from '../../data/LibraryBooks';
import RelatedBookSlider from './RelatedBookSlider';

const RelatedBooksComponent = ({ setBook }) => {
    return (
        <div className="md:w-2/3 p-4 px-4">
            <RelatedBookSlider
                topic="Related Books"
                books={RelatedBooks}
                setBook={setBook}
            />
        </div>
    );
};

export default RelatedBooksComponent;
