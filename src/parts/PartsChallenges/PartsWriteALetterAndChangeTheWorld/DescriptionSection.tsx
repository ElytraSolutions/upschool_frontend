import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './DescriptionSection.css';

type DescriptionSectionProps = {
    details: {
        id: number;
        title: string;
        content: string;
        steps: {
            title: string;
            content: {
                title: string;
                content: string;
                list?: string[];
            }[];
        };
        video: {
            title: string;
            src: string;
            height: number;
            width: number;
        };
        carousel: string[];
    };
};

const DescriptionSection: React.FC<DescriptionSectionProps> = ({ details }) => {
    return (
        <>
            <div className="flex justify-center bg-white h-full w-full p-2 xs:p-4">
                <div className=" h-full w-full max-w-[71.25rem]  xlarge:max-w-[76rem] xxlarge:max-w-[84rem]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6 pb-4  place-items-center h-full w-full ">
                        <div className=" self-start flex flex-col gap-4 text-font-color text-sm md:text-base ">
                            {/* Brief discription of Challenge: */}
                            <p className="text-base md:text-lg xl:text-3xl font-bold font-lexend">
                                {details.title}
                            </p>
                            {/* Details of Challenge */}
                            <p className="">{details.content}</p>
                            {/* Steps */}
                            <p className="font-semibold font-lexend">
                                {details.steps.title}
                            </p>
                            <div className="flex flex-col gap-4">
                                {details.steps.content.map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-4"
                                    >
                                        <p>
                                            <span className="font-semibold font-lexend">
                                                {step.title}{' '}
                                            </span>{' '}
                                            {step.content}
                                        </p>
                                        <div className="pl-4">
                                            {step.list && (
                                                <ul className="list-disc list-outside">
                                                    {step.list.map(
                                                        (item, index) => (
                                                            <li key={index}>
                                                                {item}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Button : Start Writing in Canva */}
                            {/* TODO get link for Canva */}
                            <button className=" bg-red-upschool text-sm text-white text-center px-4 py-2 rounded-2xl w-fit">
                                Start Writing in Canva
                            </button>
                        </div>
                        <div className="flex flex-col gap-5 pt-3 w-full">
                            <div className=" w-full aspect-video">
                                <iframe
                                    // TODO provide correct video path
                                    src={details.video.src}
                                    className="w-full aspect-video"
                                    width={details.video.width}
                                    title={details.video.title}
                                    allowFullScreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share"
                                ></iframe>
                            </div>

                            <div className="relative  pb-5  ">
                                <Carousel
                                    additionalTransfrom={0}
                                    arrows
                                    autoPlay
                                    autoPlaySpeed={2000}
                                    centerMode={false}
                                    className=""
                                    containerClass=""
                                    dotListClass="custom-dot-list-style-description-section"
                                    draggable
                                    focusOnSelect={false}
                                    infinite
                                    itemClass="custom-carousel-item-description-section"
                                    keyBoardControl
                                    minimumTouchDrag={80}
                                    pauseOnHover
                                    renderArrowsWhenDisabled={false}
                                    renderButtonGroupOutside={false}
                                    responsive={{
                                        superLargeDesktop: {
                                            // the naming can be any, depends on you.
                                            breakpoint: {
                                                max: 4000,
                                                min: 3000,
                                            },
                                            items: 1,
                                        },
                                        desktop: {
                                            breakpoint: {
                                                max: 3000,
                                                min: 1024,
                                            },
                                            items: 1,
                                        },
                                        mobile: {
                                            breakpoint: {
                                                max: 464,
                                                min: 0,
                                            },
                                            items: 1,
                                        },
                                        tablet: {
                                            breakpoint: {
                                                max: 1024,
                                                min: 464,
                                            },
                                            items: 1,
                                        },
                                    }}
                                    rewind={false}
                                    rewindWithAnimation={false}
                                    rtl={false}
                                    shouldResetAutoplay
                                    showDots={true}
                                    renderDotsOutside={true}
                                    sliderClass=""
                                    slidesToSlide={1}
                                    swipeable
                                >
                                    {details.carousel.map((image, index) => (
                                        <div key={index}>
                                            <img
                                                src={image}
                                                alt="carousel"
                                                width="768"
                                                height="1086"
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DescriptionSection;
