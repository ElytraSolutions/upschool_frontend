import { NavLink } from 'react-router-dom';

const Announcement = () => {
    return (
        <>
            <div
                className="bg-cover h-full w-full"
                style={{
                    backgroundImage:
                        'url(https://upschool.co/wp-content/uploads/2022/06/icecaps.jpg)',
                }}
            >
                <div className="flex justify-center px-2 py-5 lg:py-8 h-full w-full bg-[#2B9FC5F7]/80">
                    <div className="w-full sm:p-2  lg:w-10/12 xl:w-3/5 h-full ">
                        <div className="flex flex-col gap-5 items-center h-full w-full">
                            <div className="">
                                <p className="text-center font-annieUseYourTelescope text-yellow-300 text-2xl lg:text-4xl">
                                    Announcement!
                                </p>
                            </div>
                            <div className="">
                                <p className="text-center text-white text-3xl lg:text-5xl">
                                    Upschool has returned from filming in
                                    Antarctica
                                </p>
                            </div>
                            <div className="">
                                <p className="text-center text-white text-xl">
                                    We've produced two great courses from
                                    Antarctica! 'The Power of One' and 'The
                                    Solar System and Beyond'. Check out our
                                    courses page in the Learn tab above to learn
                                    more!
                                </p>
                            </div>
                            <div className="w-full aspect-video">
                                <iframe
                                    // TODO provide correct video path
                                    src="https://www.youtube.com/embed/o1D-pvo8n1o?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fupschool.co&widgetid=7"
                                    className="w-full  aspect-video"
                                    width="1090"
                                    title="Iframe Example"
                                    allowFullScreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share"
                                ></iframe>
                            </div>
                            <button
                                type="button"
                                className="w-fit h-full px-4 py-2 border rounded-md border-white"
                            >
                                {/* TODO provide the correct route path */}
                                <NavLink to="https://upschool.co/blog/category/travel-diary/antarctica/">
                                    <div className="flex justify-center items-center gap-2">
                                        <i
                                            className="fa fa-arrow-circle-o-right text-white fa-1x lg:fa-2x"
                                            aria-hidden="true"
                                        ></i>
                                        <p className="text-center text-white text-sm lg:text-base">
                                            See the Pictures on Our Blog
                                        </p>
                                    </div>
                                </NavLink>
                            </button>
                            <div className="flex flex-col items-center aspect-video">
                                <img
                                    // TODO provide correct image path
                                    src="https://upschool.co/wp-content/uploads/2023/03/Antarctica-2-2-1024x341.png"
                                    width="900"
                                    height="300"
                                    alt="Antarctica"
                                />
                                <img
                                    // TODO provide correct image path
                                    src="https://upschool.co/wp-content/uploads/2022/06/upschool-and-aurora.png"
                                    width="700"
                                    height="175"
                                    alt="upschool and aurora"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Announcement;
