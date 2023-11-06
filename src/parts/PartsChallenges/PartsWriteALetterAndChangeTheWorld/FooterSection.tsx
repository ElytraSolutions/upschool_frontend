import React from 'react';

type FooterSectionProps = {
    details: {
        title: string;
        subSection: {
            title: string;
            list: string[];
        }[];
        msg: string;
    };
};
const FooterSection: React.FC<FooterSectionProps> = ({ details }) => {
    return (
        <>
            <div className="flex justify-center bg-white h-full w-full p-2 xs:p-4">
                <div className=" pb-6 h-full w-full max-w-[71.25rem]  xlarge:max-w-[76rem] xxlarge:max-w-[84rem]">
                    <div className="flex flex-col gap-3 text-font-color text-sm md:text-base xlarge:text-lg xxlarge:text-xl ">
                        {/* Title */}
                        <p className="py-5 font-bold">{details.title}</p>
                        {/* Important rules */}
                        <div className="flex flex-col gap-4">
                            <p className="font-bold">
                                {details.subSection[0].title}
                            </p>
                            <div className="pl-4">
                                <ul className="list-disc list-outside ">
                                    {details.subSection[0].list.map(
                                        (rule, index) => (
                                            <li key={index} className="m-1">
                                                {rule}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </div>
                        {/* Results */}
                        <div className="flex flex-col gap-2">
                            <p className="font-bold">
                                {details.subSection[1].title}
                            </p>
                            <div className="">
                                <ul className=" list-none list-outside">
                                    {details.subSection[1].list.map(
                                        (result, index) => (
                                            <li
                                                key={index}
                                                className=" first:mt-1 first:mb-2 my-5"
                                            >
                                                {result}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </div>
                        {/* Message */}
                        <p className="font-bold">{details.msg}</p>
                        {/* Button : Submit Entry */}
                        {/* TODO get link for Canva */}
                        <button className=" bg-red-upschool text-sm text-white text-center px-4 py-2 my-3 rounded-2xl w-fit">
                            <a
                                href="https://form.jotform.com/232972787167876"
                                target="_blank"
                            >
                                Submit Entry
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterSection;
