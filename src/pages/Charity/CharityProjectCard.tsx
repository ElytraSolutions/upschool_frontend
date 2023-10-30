function CharityProjectCard() {
    return (
        <>
            <div className="flex flex-grow justify-center p-2">
                <div className="rounded grid lg:grid-cols-2 border gap-x-4 border-gray-300 lg:max-w-[1050px] lg:max-h-[402px] md:max-w-[725px] md:max-h-[550px]">
                    <div className="w-full flex lg:h-[401px] ms:h-[180px] ">
                        <img
                            className="w-full object-cover"
                            src="../../images/Charity/Cover/soTheyCan.jpg"
                            alt="projectImage"
                        />
                    </div>
                    <div className="flex grid p-3 lg:h-[401px]">
                        <div className="flex max-h-[100px]">
                            <div className="">
                                <p className="font-extrabold text-theme-color xs:text-2xl xss:text-xl line-clamp-3 font-sans-serif">
                                    Provide Teacher Training and Professional
                                    Development in Tanzania
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center h-[30px]">
                            <div className="flex justify-center h-[30px]">
                                <div className="grid grid-cols-2 text-theme-color max-h-[30px] justify-center">
                                    <p className="row-span-full font-bold xs:text-lg xss:text-base font-sans-serif">
                                        Location:
                                    </p>
                                    <p className="xs:text-lg xss:text-base font-sans-serif pl-1">
                                        Australia
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex py-2 lg:justify-start ms:justify-center ">
                            <div className="grid grid-cols-5 gap-4">
                                <div className="flex 2xl:w-[70px] 2xl:h-[70px] xl:w-[65px] xl:h-[65px] lg:w-[60px] lg:h-[60px] md:w-[70px] md:h-[70px] sm:w-[65px] sm:h-[65px]">
                                    <img
                                        className="rounded-sm"
                                        src="../../images/CharityProjectCard/goalsImage/goal4.png"
                                        alt="goal4"
                                    />
                                </div>
                                <div className="flex 2xl:w-[70px] 2xl:h-[70px] xl:w-[65px] xl:h-[65px] lg:w-[60px] lg:h-[60px] md:w-[70px] md:h-[70px] sm:w-[65px] sm:h-[65px]">
                                    <img
                                        className="rounded-sm"
                                        src="../../images/CharityProjectCard/goalsImage/goal6.png"
                                        alt="goal6"
                                    />
                                </div>
                                <div className="flex 2xl:w-[70px] 2xl:h-[70px] xl:w-[65px] xl:h-[65px] lg:w-[60px] lg:h-[60px] md:w-[70px] md:h-[70px] sm:w-[65px] sm:h-[65px]">
                                    <img
                                        className="rounded-sm"
                                        src="../../images/CharityProjectCard/goalsImage/goal11.png"
                                        alt="goal11"
                                    />
                                </div>
                                <div className="flex 2xl:w-[70px] 2xl:h-[70px] xl:w-[65px] xl:h-[65px] lg:w-[60px] lg:h-[60px] md:w-[70px] md:h-[70px] sm:w-[65px] sm:h-[65px]">
                                    <img
                                        className="rounded-sm"
                                        src="../../images/CharityProjectCard/goalsImage/goal14.png"
                                        alt="goal14"
                                    />
                                </div>
                                <div className="flex 2xl:w-[70px] 2xl:h-[70px] xl:w-[65px] xl:h-[65px] lg:w-[60px] lg:h-[60px] md:w-[70px] md:h-[70px] sm:w-[65px] sm:h-[65px]">
                                    <img
                                        className="rounded-sm"
                                        src="../../images/CharityProjectCard/goalsImage/goal17.png"
                                        alt="goal17"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="font-sans-serif xs:text-lg xss:text-base text-theme-color flex justify-start pl-0 p-1 lg:h-[87px] md:h-[60px]">
                            <p className="lg:line-clamp-3 md:line-clamp-2 ms:line-clamp-3 line-clamp-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Sagittis id consectetur purus ut faucibus
                                pulvinar. Duis convallis convallis tellus id.
                                Risus commodo viverra maecenas accumsan lacus
                                vel facilisis volutpat est. Orci porta non
                                pulvinar neque laoreet suspendisse interdum
                                consectetur. Ut ornare lectus sit amet est
                                placerat in egestas erat. Elit ullamcorper
                                dignissim cras tincidunt lobortis feugiat.
                                Ullamcorper eget nulla facilisi etiam dignissim
                                diam quis enim.',
                            </p>
                        </div>
                        <div className="flex justify-start items-center lg:pt-4 md:pt-2">
                            <button className="text-white font-sans-serif bg-red-upschool py-2 px-5 rounded-full hover:-translate-y-1 hover:bg-theme-color transition duration-300">
                                <p className="text-sm space-y-[7px]">
                                    Learn More
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CharityProjectCard;
