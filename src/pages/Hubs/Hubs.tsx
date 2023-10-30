import { useEffect } from 'react';
import HubCard from '../../parts/PartsHubs/HubCard';
import resolveImgURL from '../../utlis/resolveImgURL';

// TODO: Replace this with data from the backend
const HubCards = [
    {
        id: 1,
        title: 'Journalist Team Hub',
        description:
            'In this resource hub, you will learn everything you need to know to get started as a journalist in your school community.',
        imgURL: resolveImgURL('/images/Hubs/HowToBecomeAJournalist.jpg'),
    },
    {
        id: 2,
        title: 'Advertising Team Hub',
        description:
            'In this resource hub, you will learn everything you need to know to get started as an advertising specialist in your school community.',
        imgURL: resolveImgURL('/images/Hubs/HowToBeAnAdvertisingSuperstar.jpg'),
    },
    {
        id: 3,
        title: 'Documentary Team Hub',
        description:
            'In this resource hub, you will learn everything you need to know to get started as a documentary film maker in your school community.',
        imgURL: resolveImgURL('/images/Hubs/HowToBeADocumentaryFilmMaker.jpg'),
    },
    {
        id: 4,
        title: 'Events Team Hub',
        description:
            'In this resource hub, you will learn everything you need to know to get started as an event planning guru in your school community.',
        imgURL: resolveImgURL('/images/Hubs/HowToPlanAmazingEvents.jpg'),
    },
    {
        id: 5,
        title: 'Creative Media Team Hub',
        description:
            'In this resource hub, you will learn everything you need to know to get started as a creative media specialist in your school community.',
        imgURL: resolveImgURL(
            '/images/Hubs/HowToBeACreativeMediaSpecialist.jpg',
        ),
    },
];

const Hubs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="h-full w-full">
            {/* Head Section */}
            <div className="bg-gradient-to-b text-white from-theme-color to-red-upschool p-1 sm:p-2 md:p-4 w-full h-full">
                <div className="flex justify-center h-full w-full ">
                    <div className="grid md:grid-cols-2 gap-5 w-full md:w-11/12 lg:w-10/12 xl:w-8/12  2xl:w-[1140px] sm:px-2 lg:px-4">
                        <div className="flex flex-col justify-center items-center text-center gap-6">
                            <p className=" font-lexend text-2xl sm:text-3xl md:text-4xl font-semibold">
                                Hubs
                            </p>
                            <p className="text-yellow-300 pb-5 font-medium">
                                You are in the right spot to learn something
                                new.
                            </p>
                            <p className="leading-normal text-sm">
                                Inside the walls of this virtual school are the
                                tools and inspiration to find your voice, engage
                                in your passions {'('}and discover new ones{')'}
                                , learn really cool new skills but most
                                importantly, we want you to use all of this for
                                good!
                            </p>
                            <p className="italic font-semibold  text-sm">
                                Go out and change the world for the better you
                                amazing human. We're counting on you!
                            </p>
                        </div>
                        <div className="justify-self-center">
                            <img
                                src={resolveImgURL(
                                    '/images/Hubs/rocket_hero_upschool_white.png',
                                )}
                                // src="/images/Hubs/rocket_hero_upschool_white.png"
                                alt="rocket-hero"
                                height="400"
                                width="400"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* HubCard Display Section */}
            <div className="flex justify-center h-full w-full">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 py-6 p-2 sm:px-2 lg:px-4">
                    {HubCards.map((Hub, index) => (
                        <HubCard key={index} Hub={Hub} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hubs;
