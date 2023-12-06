import { RelatedBooks } from '../../data/LibraryBooks';
import RelatedBookSlider from './RelatedBookSlider';

const RelatedBooksComponent = () => {
    return (
        //px-4 removed only
        <div className=" py-4">
            <RelatedBookSlider topic="Related Books" books={RelatedBooks} />
        </div>
    );
};

export default RelatedBooksComponent;
