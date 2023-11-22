import CharitiesSubSection from './CharitiesSubSection';

const CharitySection = ({ data }) => {
    return (
        <>
            {/* "bg-gray-100 flex flex-wrap justify-center rounded-lg" */}
            <div className="bg-gray-100 grid grid-cols-3 md:grid-cols-6 rounded-lg">
                {data.map((charity) => (
                    <CharitiesSubSection charity={charity} />
                ))}
            </div>
        </>
    );
};

export default CharitySection;
