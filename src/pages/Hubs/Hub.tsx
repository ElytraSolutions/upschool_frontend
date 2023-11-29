import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Hub = () => {
    const location = useLocation();
    const Hub = location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        document.title = `${Hub.title} | Upschool`;
    }, [Hub.title]);
    return (
        <>
            <div className="relative h-full w-full">
                <div className="grid md:grid-cols-2 place-items-center bg-gradient-to-b text-white from-theme-color to-red-upschool p-1 pb-20 sm:pb-20 sm:p-6 md:p-4 h-80 w-full">
                    <p className="col-span-1 text-center text-2xl sm:text-3xl font-medium font-lexend">
                        {Hub.title}
                    </p>
                </div>
                <div className="flex justify-center h-full w-full p-2 bg-gray-900/10">
                    <div className="relative text-gray-500 h-[500px]  md:h-72  w-full md:w-10/12 2xl:w-[1140px]">
                        <div className="absolute md:relative grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full -top-40 md:top-0">
                            <div className=" order-2 md:order-first md:col-span-1 lg:col-span-2 flex flex-col justify-center leading-relaxed text-sm sm:text-base text-center md:text-left">
                                <p>{Hub.description}</p>
                                <br />
                                <p>
                                    Check back in regulary for new ideas,
                                    inspiration and resources.
                                </p>
                                <br />
                                <p className=" italic text-black font-semibold">
                                    These hubs are updated regularly.
                                </p>
                            </div>
                            <div className="md:relative justify-self-center  md:justify-self-auto md:col-span-1 max-w-[350px]  h-full">
                                <div className="md:absolute shadow-md shadow-gray-400 rounded-t-md  md:-top-52">
                                    <img
                                        src={Hub.imgURL}
                                        alt={Hub.title}
                                        width="350"
                                        height="250"
                                        className="rounded-t-md bg-stone-200"
                                    />
                                    <div className="p-2 bg-white w-full">
                                        <div className="px-1 sm:px-2 md:px-4 py-1">
                                            <button
                                                type="button"
                                                className="bg-theme-color text-white text-sm text-center hover:cursor-pointer w-full p-3 my-1"
                                                // onClick={handleButtonClick}
                                            >
                                                <p>ENROLL NOW</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hub;
