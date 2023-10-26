import { Charities } from '../../data/Charities';
import CharitiesSubSection from './CharitiesSubSection';

const CharitySection = () => {
    return (
        <>
            <div className="bg-gray-100 flex flex-wrap justify-start rounded-lg">
                {Charities.map((charity) => (
                    <CharitiesSubSection charity={charity} />
                ))}
            </div>
        </>
    );
};

export default CharitySection;
