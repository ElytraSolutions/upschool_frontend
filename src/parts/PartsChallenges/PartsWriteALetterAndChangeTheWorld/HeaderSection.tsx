import React from 'react';
import resolveImgURL from '../../../utlis/resolveImgURL';
import { NavLink } from 'react-router-dom';
type HeaderSectionProps = {
    details: {
        id: number;
        title: string;
        headSection: {
            title: string;
            content: string;
        }[];
        description: { title: string; content: string[] };
        sdgs: { title: string; content: string[] };
    };
};
const HeaderSection: React.FC<HeaderSectionProps> = ({ details }) => {
    return (
        <>
            <div className=" flex justify-center bg-zinc-100 h-full w-full p-2 xs:p-4">
                <div className="flex flex-col md:flex-row md:justify-center gap-5 h-full max-w-[71.25rem]  xlarge:max-w-[76rem] xxlarge:max-w-[84rem]">
                    <div className="flex flex-col gap-7 text-font-color text-sm md:text-base xlarge:text-lg xxlarge:text-xl md:w-8/12">
                        {/* Title of Challenge */}
                        <p className="pt-4 text-3xl md:text-4xl xlarge:text-5xl font-medium font-lexend">
                            {details.title}
                        </p>
                        {/* Other Details of Challenge */}
                        <div className="flex flex-col gap-2">
                            {details.headSection.map((detail, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col xs:flex-row gap-1 xs:items-center">
                                        <p className="text-base xlarge:text-lg xxlarge:text-xl font-bold">
                                            {detail.title}
                                        </p>
                                        <p className="">{detail.content}</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                        {/* Brief Description of Challenge */}
                        <div className="flex flex-col gap-3">
                            <p className="text-base xlarge:text-lg xxlarge:text-xl font-bold">
                                {details.description.title}
                            </p>
                            <p>{details.description.content[0]}</p>
                            <p>{details.description.content[1]}</p>
                        </div>
                        {/* SDGs icons */}
                        <div className="flex flex-col gap-4">
                            <p className="text-base xlarge:text-lg xxlarge:text-xl font-bold">
                                {details.sdgs.title}
                            </p>
                            {/* icons */}
                            <div className="flex flex-wrap gap-3">
                                {details.sdgs.content.map((sdg, index) => (
                                    <img
                                        key={index}
                                        alt="sdg"
                                        src={sdg}
                                        width="50"
                                        height="50"
                                        className=" sm:w-[100px] sm:h-[100px]"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center md:w-4/12">
                        <div className=" md:absolute flex flex-col items-center gap-3  bg-zinc-100 md:-top-32">
                            <img
                                src={resolveImgURL(
                                    'images/Challenges/WriteALetterAndChangeTheWorld.png',
                                )}
                                alt="Write a Letter and Change the World with Upschool"
                                width="620"
                                height="350"
                                className="md:w-[340px] md:h-[200px]"
                            />
                            <NavLink to="/challenges" className=" px-2 w-fit">
                                <button
                                    type="button"
                                    className="  bg-red-upschool text-white text-sm text-center hover:cursor-pointer w-full p-3 my-1"
                                >
                                    <p>Back to All Challenges</p>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HeaderSection;
