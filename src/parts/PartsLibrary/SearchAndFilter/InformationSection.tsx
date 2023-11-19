import { useSearchParams } from 'react-router-dom';
import useScreenWidthAndHeight from '../../../hooks/useScreenWidthAndHeight';

// TODO Replace this data with data from the backend
const data = [
    {
        title: 'Home',
        value: 'Home',
    },
    {
        title: 'All Books',
        number: 100,
        value: 'All Books',
    },
    {
        title: 'Best Sellers',
        number: 25,
        value: 'best_seller',
    },
    {
        title: 'Featured Books',
        number: 10,
        value: 'featured',
    },
    {
        title: 'Book Bundles',
        number: 17,
        value: 'Book Bundles',
    },
    {
        title: 'Recently Viewed',
        number: 21,
        value: 'Recently Viewed',
    },
];
type InformationSectionProps = {
    setIsFilterClicked?: (value: boolean) => void;
};

const InformationSection: React.FC<InformationSectionProps> = ({
    setIsFilterClicked,
}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectSection = searchParams.has('section')
        ? searchParams.get('section')
        : 'Home';
    const { isTabScreen } = useScreenWidthAndHeight();
    return (
        <>
            <div>
                <ul className=" p-2 sm:px-6 sm:py-3">
                    {data.map((category, index) => (
                        <li key={index} className="flex flex-col gap-2 pb-1">
                            <div
                                className={`flex flex-row items-center gap-1 font-semibold hover:cursor-pointer ${
                                    selectSection === category.title
                                        ? 'text-font-color'
                                        : 'text-gray-900/50'
                                } text-sm md:text-base font-lexend`}
                            >
                                <p
                                    onClick={() => {
                                        !isTabScreen &&
                                            setIsFilterClicked &&
                                            setIsFilterClicked(false);
                                        setSearchParams(
                                            (
                                                oldSearchParams: URLSearchParams,
                                            ) => {
                                                oldSearchParams.set(
                                                    'section',
                                                    category.value,
                                                );
                                                return oldSearchParams;
                                            },
                                        );
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    {category.title}
                                </p>
                                {category.number && (
                                    <p>{`(${category.number})`}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default InformationSection;
