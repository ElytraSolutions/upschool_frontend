import { RelatedBooks } from '../../data/LibraryBooks';
import RelatedBookSlider from './RelatedBookSlider';

const RelatedBooksComponent = () => {
    return (
        <div className=" p-4 px-4">
            <RelatedBookSlider topic="Related Books" books={RelatedBooks} />
        </div>
    );
};

export default RelatedBooksComponent;
