// This is for the sustainable development goals page
import { useState } from 'react';
import SDGImg from '../../../public/images/global-goals/SDG-main.png';
import TextField from '@mui/material/TextField';
import resolveImgURL from '../../utlis/resolveImgURL';
import Goals from './Goals';
import Faq from './Faq';

const goals = [
    {
        index: 1,
        title: 'End Poverty',
        goalImage: '/images/global-goals/Goal-01.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-1.jpg',
        youtube_url: 'https://www.youtube.com/embed/TfOJ7HNo-qE?rel=0',
    },
    {
        index: 2,
        title: 'Zero Hunger',
        goalImage: '/images/global-goals/Goal-02.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-2.jpg',
        youtube_url: 'https://www.youtube.com/embed/JjE76M0a054?rel=0',
    },
    {
        index: 3,
        title: 'Good Health & Wellbeing',
        goalImage: '/images/global-goals/Goal-03.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-3.jpg',
        youtube_url: 'https://www.youtube.com/embed/JMfDkjO2ZcE?rel=0',
    },
    {
        index: 4,
        title: 'Quality Education',
        goalImage: '/images/global-goals/Goal-04.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-4.jpg',
        youtube_url: 'https://www.youtube.com/embed/4HXyJmY--gM?rel=0',
    },
    {
        index: 5,
        title: 'Gender Equality',
        goalImage: '/images/global-goals/Goal-05.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-5.jpg',
        youtube_url: 'https://www.youtube.com/embed/vz7IUDOYvXk?rel=0',
    },
    {
        index: 6,
        title: 'Clean Water & Sanitation',
        goalImage: '/images/global-goals/Goal-06.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-6.jpg',
        youtube_url: 'https://www.youtube.com/embed/7x2Ch-aMqEY?rel=0',
    },
    {
        index: 7,
        title: 'Affordable & Clean Energy',
        goalImage: '/images/global-goals/Goal-07.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-7.jpg',
        youtube_url: 'https://www.youtube.com/embed/6QrO7r0yrro?rel=0',
    },
    {
        index: 8,
        title: 'Decent Work & Economic Growth',
        goalImage: '/images/global-goals/Goal-08.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-8.jpg',
        youtube_url: 'https://www.youtube.com/embed/xcZamDv2DZQ?rel=0',
    },
    {
        index: 9,
        title: 'Industry, Innovation & Infrastructure',
        goalImage: '/images/global-goals/Goal-09.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-9.jpg',
        youtube_url: 'https://www.youtube.com/embed/NFgqm7kbvsY?rel=0',
    },
    {
        index: 10,
        title: 'Reduced Inequalities',
        goalImage: '/images/global-goals/Goal-10.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-10.jpg',
        youtube_url: 'https://www.youtube.com/embed/6DlQq2xLw_0?rel=0',
    },
    {
        index: 11,
        title: 'Sustainable Cities & Communities',
        goalImage: '/images/global-goals/Goal-11.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-11.jpg',
        youtube_url: 'https://www.youtube.com/embed/r2myzbWQIJA?rel=0',
    },
    {
        index: 12,
        title: 'Responsible Consumption & Production',
        goalImage: '/images/global-goals/Goal-12.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-12.jpg',
        youtube_url: 'https://www.youtube.com/embed/2MxKrGXAyH8?rel=0',
    },
    {
        index: 13,
        title: 'Climate Action',
        goalImage: '/images/global-goals/Goal-13.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-13.jpg',
        youtube_url: 'https://www.youtube.com/embed/x68J435E0S4?rel=0',
    },
    {
        index: 14,
        title: 'Life Below Water',
        goalImage: '/images/global-goals/Goal-14.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-14.jpg',
        youtube_url: 'https://www.youtube.com/embed/pMp2raQ3pwg?rel=0',
    },
    {
        index: 15,
        title: 'Life On Land',
        goalImage: '/images/global-goals/Goal-15.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-15.jpg',
        youtube_url: 'https://www.youtube.com/embed/P-vXJ387FRY?rel=0',
    },
    {
        index: 16,
        title: 'Peace, Justice & Strong Institutions',
        goalImage: '/images/global-goals/Goal-16.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-16.jpg',
        youtube_url: 'https://www.youtube.com/embed/-3cDFEw1bhY?rel=0',
    },
    {
        index: 17,
        title: 'Partnerships for the Goals',
        goalImage: '/images/global-goals/Goal-17.png',
        goalGraphic: '/images/global-goals/SDG_report_2021_Goal-17.jpg',
        youtube_url: 'https://www.youtube.com/embed/DpwY5xt-B4M?rel=0',
    },
];

const faqs = [
    {
        question: 'How do I know if my submission has been published?',
        answer: 'The best way is to keep an eye on our various channels, as listed above in the ‘Where do the submissions get published?’ question.',
        isTerm: false,
    },
    {
        question: 'What information do you publish?',
        answer: 'Your personal information is safe with us. We do not sell, rent, or lease your personal information to any third party individual, government agency, or company at any time unless compelled to do so by law.',
        isTerm: false,
    },
    {
        question: 'Will my submission be published exactly as I wrote it?',
        answer: 'We will try our best – but if we need to cut it down a little bit or fix any spelling and grammar issues, we reserve the right to do so. ',
        isTerm: false,
    },
    {
        question: 'Who can submit a response?',
        answer: 'We are happy to take submissions from anyone!',
        isTerm: false,
    },
    {
        question: 'Children - please read this.',
        answer: 'If you are under 18 years of age, you must have the permission of your classroom teacher, a parent or guardian to submit a “Dear World…” post.',
        isTerm: false,
    },
    {
        question: 'Terms & Conditions (ADULTS)',
        answer: 'Submissions are published (and not limited to) social media, our website, partner websites, print publications, product packaging and more. If we use the words you submit on any products, you understand you cannot make any royalty claims for the use of these words. By entering your submission, you declare that the words are your own words and are not copied from another source.We may publish your full name if you tell us you are a teacher, parent or member of the community. If you are a student, only your first name will be published. If you enter your country, state, city, school name or school class, we may publish that too.',
        isTerm: true,
    },
    {
        question: 'Terms & Conditions (CHILDREN)',
        answer: 'Children, you are not permitted to submit a response without the permission of a parent, teacher or guardian. Please speak to one of these people prior to submitting your response. ',
        isTerm: true,
    },
];

const GlobalGoals = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="bg-[#f4f4f4]">
            <div className="max-w-[1100px] ml-auto mr-auto ">
                <div className="flex flex-col items-center justify-center pt-[2rem]">
                    <img className="m-[2rem]" src={SDGImg} />
                    <div className="text m-4">
                        <p className="font-lexend font-light text-font-color mb-4 text-[1.1rem]">
                            The{' '}
                            <span className="font-bold">
                                Sustainable Development Goals (SDGs){' '}
                            </span>{' '}
                            or <span className="font-bold">Global Goals</span>{' '}
                            are a collection of 17 interlinked global goals
                            designed to be a “blueprint to achieve a better and
                            more sustainable future for all”. The SDGs were set
                            up in 2015 by the United Nations General Assembly
                            (UN-GA) and are intended to be achieved by the year
                            2030.
                        </p>
                        <p className="font-lexend font-light text-font-color mb-4 text-[1.1rem]">
                            Read through the following 17 UN SDG Global Goals
                            and consider making a submission to our “Dear
                            World…” page, where you can share your hopes and
                            dreams for the future. Each submission may be
                            featured in an upcoming book, social media post or
                            shared with the public in some other way.
                        </p>
                        <p className="font-lexend font-light text-font-color mb-4 text-[1.1rem]">
                            We value your thoughts and look forward to reading
                            what you believe we need to do today to create the
                            future you want to live in!{' '}
                        </p>
                    </div>
                    <iframe
                        width="100%"
                        className="lg:h-[630px] md:h-[480px] sm:h-[400px] h-[60vw] p-[1rem]"
                        src="https://www.youtube.com/embed/M-iJM02m_Hg?rel=0"
                        title="UN Sustainable Development Goals - Overview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
            {goals.map((goal, i) => {
                return (
                    <Goals
                        key={i}
                        index={goal.index}
                        title={goal.title}
                        goalImage={goal.goalImage}
                        goalGraphic={goal.goalGraphic}
                        youtube_url={goal.youtube_url}
                    />
                );
            })}
            <div className=" bg-theme-color p-[5vw]" id="form-main">
                <div className="form max-w-[700px] ml-auto mr-auto bg-[#f3f3fe] px-[2rem] py-[3rem]">
                    <img
                        className="mb-8"
                        src={resolveImgURL(
                            '/images/global-goals/dear-world-logo..png',
                        )}
                    />
                    <p className="mb-8">
                        Wrtie your message to the world here and it may get
                        published
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-rows-3 grid-cols-6 gap-4 max-w-[500px] w-full"
                    >
                        <TextField
                            className="bg-white col-span-6"
                            type="text"
                            label="Name"
                            required
                            onChange={handleChange}
                            value={formData.name}
                            name="name"
                        />
                        <TextField
                            className="bg-white col-span-6"
                            type="number"
                            label="Age"
                            required
                            onChange={handleChange}
                            value={formData.age}
                            name="age"
                        />
                        <TextField
                            className="bg-white col-span-6"
                            type="email"
                            label="Email"
                            onChange={handleChange}
                            value={formData.email}
                            name="email"
                            required
                        />
                        <button className="bg-[#2e69ff] py-[.8rem] text-white float-right w-full  col-start-5 col-end-7 rounded-md">
                            Next
                        </button>
                    </form>
                </div>
            </div>
            <div className="max-w-[1100px] ml-auto mr-auto p-[1rem] pb-[2rem]">
                <h1 className="font-lexend text-[2rem] font-semibold text-font-color pb-[20px] pt-[2rem]">
                    FAQ's
                </h1>
                {faqs.map((faq, i) => {
                    return (
                        <Faq
                            key={i}
                            question={faq.question}
                            answer={faq.answer}
                            isTerm={faq.isTerm}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default GlobalGoals;
