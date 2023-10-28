// import resolveImgURL from '../../utlis/resolveImgURL';

const Hubs = () => {
    return (
        <div className="h-full w-full">
            <div className="bg-gradient-to-b text-white from-theme-color to-red-upschool p-1 sm:p-2 md:p-4">
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
                                // src={resolveImgURL(
                                //     '/Hubs/rocket_hero_upschool_white.png',
                                // )}
                                src="/images/Hubs/rocket_hero_upschool_white.png"
                                alt="rocket-hero"
                                height="400"
                                width="400"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hubs;
