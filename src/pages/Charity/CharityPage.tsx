import CharityProjectCard from './CharityProjectCard';
import CharityPageImageSection from '../../components/Cards/Charity/CharityPageImageSection';
import { useLocation, useParams } from 'react-router-dom';
import { charity } from '../../data/CharityCardData';
import { useEffect } from 'react';

function CharityPage() {
    const location = useLocation();
    const charityState = location.state;
    const { slug } = useParams();

    let currentCharity;

    const convertToSlug = (title: string) => {
        const words = title.toLowerCase().split(' ');
        const slugTitle = words.join('-');

        return slugTitle;
    };

    if (charityState) {
        currentCharity = charityState;
    } else {
        currentCharity = charity.find(
            (item) => convertToSlug(item.slug) === slug,
        );
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {console.log(currentCharity)}
            <div className="grid gap-y-5 pb-10">
                <CharityPageImageSection
                    name={currentCharity.name}
                    links={currentCharity.links}
                    cover={currentCharity.cover}
                    logo={currentCharity.logo}
                />
                <div className="grid gap-y-6 grid-cols-14">
                    <div className="flex p-2 justify-center lg:col-span-10 lg:col-start-3 col-span-12 col-start-2">
                        <div className="flex max-w-[1200px]">
                            <div className="text-theme-color text-base tracking-normal leading-relaxed font-sans-serif">
                                {currentCharity.content.map(
                                    (item: string, index: number) => (
                                        <p className="mb-4" key={index}>
                                            {item}
                                        </p>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-10 lg:col-start-3 col-span-12 col-start-2">
                        <div className="flex justify-start pl-2">
                            <p className="font-bold text-[28px] font-sans-serif text-theme-color">
                                Projects
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-10 lg:col-start-3 col-span-12 col-start-2 flex grid gap-y-5">
                        <CharityProjectCard />
                        <CharityProjectCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CharityPage;
