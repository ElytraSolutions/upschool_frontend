import { useEffect } from 'react';
import HeaderSection from '../../../parts/PartsChallenges/PartsWriteALetterAndChangeTheWorld/HeaderSection';
import resolveImgURL from '../../../utlis/resolveImgURL';
import DescriptionSection from '../../../parts/PartsChallenges/PartsWriteALetterAndChangeTheWorld/DescriptionSection';

const detailsIntro = {
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

const detailsDescription = {
    id: 2,
    title: 'Brief Description of Challenge :',
    content:
        'Everyone has someone who inspires them, be it a family member, a historical figure, or a renowned personality. Upschool invites you to paint a portrait of your inspirational figure, and share with the world why they mean so much to you. Your mission is to paint a portrait, take a digital copy, and craft a compelling report about their significance in your life and the broader world.',
    steps: {
        title: 'Steps to Participate:',
        content: [
            {
                title: 'Step 1-Watch:',
                content: 'Watch the Video opposite for Inspiration',
            },
            {
                title: 'Step 2-Familiarise with the Template:',
                content:
                    'Download the provided template, read it carefully and understand how to craft your very own letter. ',
            },
            {
                title: 'Step 3-Choose Your Concern:',
                content:
                    'Think about pressing issues like climate change, educational reforms, animal rights, mental health awareness, or any other matter close to your heart.',
            },
            {
                title: 'Step 4-Select the Recipient:',
                content: 'Consider writing to figures such as:',
                list: [
                    'Local politicians or community leaders',
                    'CEOs of influential companies',
                    'Directors of non-profit organisations',
                    'Editors of newspapers or magazines',
                    'Prominent activists in your chosen filed',
                ],
            },
            {
                title: 'Step 5-Draft Your Letter:',
                content:
                    'Using the Upschool template, craft a passionate letter addressing your concerns.',
            },
            {
                title: 'Step 6-Mail and Wait:',
                content: 'Send your letter and hope for a resposnse',
            },
            {
                title: 'Step 7-Share with Upschool:',
                content:
                    'Submit your letter and even the response too, then receive your certificate and we will upload them to Upschool’s Wall of Impactful Letters (which will be created in the coming months).',
            },
            {
                title: 'Step 8-Certificate:',
                content:
                    'After your letter has been approved you will soon receive your certificate. Every approved letter will be featured on our Wall of Impactful Letters.',
            },
        ],
    },
    video: {
        title: 'The Power of the Pen',
        src: 'https://www.youtube.com/embed/wyWLdC_P3eo?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fupschool.co&widgetid=1',
        height: 360,
        width: 640,
    },
    carousel: [
        '/images/Challenges/Challenge/WriteALetterAndChangeTheWorld/Carousel1Letter.png',
        '/images/Challenges/Challenge/WriteALetterAndChangeTheWorld/Carousel2Prompts.png',
    ],
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
                    className=" object-cover h-[30rem] w-full"
                />
                <HeaderSection details={detailsIntro} />
                <DescriptionSection details={detailsDescription} />
            </div>
        </>
    );
};

export default Challenge;
