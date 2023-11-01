import { useEffect } from 'react';
import HeaderSection from '../../../parts/PartsChallenges/PartsWriteALetterAndChangeTheWorld/HeaderSection';
import resolveImgURL from '../../../utlis/resolveImgURL';

const details = {
    id: 1,
    title: 'Write a Letter and Change the World with Upschool',
    headSection: [
        { title: 'Who is Offering This Project :', content: 'Upschool.co' },
        { title: 'Challenge Open to People :', content: 'Globally' },
        { title: 'Challenge is open :', content: 'Indefinitely' },
    ],
    description: {
        title: 'Brief Description of Challenge :',
        content: [
            'Do you want to make a difference? Upschool believes in the power of words, and we invite you to express your concerns about the world through a letter. Write to someone who can help bring about change and voice your opinions, feelings, and hopes. Remember there is no problem too small and no problem that you can’t solve with the power of the pen!',
            ' Once you have finished your letter, share it with the Upschool team and we will share it with the world!!!',
        ],
    },
    sdgs: {
        title: 'SDGs This Project Will be Working On:',
        content: [
            resolveImgURL('/images/global-goals/Goal-04.png'),
            resolveImgURL('/images/global-goals/Goal-05.png'),
        ],
    },
};

const Challenge = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="h-full w-full">
                <img
                    src="/images/Challenges/Challenge/WriteALetterAndChangeTheWorld/Thumbnail.png"
                    alt="Write a Letter and Change the World with Upschool"
                    width="2330"
                    height="475"
                    className=" object-cover h-[475px] w-full"
                />
                <HeaderSection details={details} />
            </div>
        </>
    );
};

export default Challenge;
