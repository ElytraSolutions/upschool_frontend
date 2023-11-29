import { useEffect } from 'react';
import ChallengeCard from '../../parts/PartsChallenges/ChallengeCard';
import resolveImgURL from '../../utlis/resolveImgURL';

// TODO fetch data from backend according to the need
const ChallengesDetail = [
    {
        id: 1,
        title: "Jane Goodall's Roots & Shoots Book Illustration Challenge",
        description:
            'The team at the Jane Goodall Institute has written a book and they would like children across the globe to be the illustrators.',
        imgURL: resolveImgURL(
            '/images/Challenges/GlobalBookIllustrationChallenge.png',
        ),
    },
    {
        id: 2,
        title: 'Donate Your Old Books & Help a Community in Need',
        description:
            'We are currently building libraries for communities in India, Pakistan, Nepal and Bangladesh and we need to fill them with books. Can you help?',
        imgURL: resolveImgURL('/images/Challenges/GlobalBookDrive.png'),
    },
    {
        id: 3,
        title: 'Design a Poster to Change the World!',
        description:
            'Are you ready to make a lasting impact on the world? We invite you to participate in our design challenge and create a poster that has the power to change lives.',
        imgURL: resolveImgURL(
            '/images/Challenges/DesignAPosterToChangeTheWorld.png',
        ),
    },
    {
        id: 4,
        title: 'Paint Your Inspirational Icon and Feature in the Upschool Portrait Gallery! ',
        description:
            "Together, let's paint a picture of inspiration and celebrate the figures that drive us forward!",
        imgURL: resolveImgURL(
            '/images/Challenges/PaintYourInspirationalIconAndFeatureInTheUpschoolPortraitGallery.png',
        ),
    },
    {
        id: 5,
        title: 'Write a Letter and Change the World with Upschool',
        description:
            'Together, we can influence change and pave the way for a brighter future!',
        imgURL: resolveImgURL(
            '/images/Challenges/WriteALetterAndChangeTheWorld.png',
        ),
        routePath: 'write-a-letter-and-change-the-world-with-upschool',
    },
];

const Challenges = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Challenges | Upschool';
    }, []);
    return (
        <>
            <div>
                <div
                    className=" bg-cover bg-bottom h-full w-full"
                    style={{
                        backgroundImage: `url(${resolveImgURL(
                            '/images/Challenges/ChallengesThumbnail.jpg',
                        )})`,
                    }}
                >
                    <div className="flex justify-center items-center px-2 sm:px-6 py-16 h-full w-full bg-theme-color/70">
                        <div className="flex flex-col gap-7 text-center text-white">
                            <p className="text-2xl  sm:text-4xl lg:text-6xl font-semibold font-lexend">
                                Choose a Challenge:
                                <br />
                                Change the World
                            </p>
                            <p className="">
                                On this page are real world projects that need
                                your help! Get involved in one today and change
                                the world!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-2 sm:p-6">
                    <div className="grid md:grid-cols-3 gap-7 lg:gap-10">
                        {ChallengesDetail.map((challenge) => (
                            <ChallengeCard
                                key={challenge.id}
                                challenge={challenge}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Challenges;
