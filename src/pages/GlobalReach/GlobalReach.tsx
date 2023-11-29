import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Map from './Map';
import './AnimateStyles.css';
import { RxCursorArrow } from 'react-icons/rx';
import { useEffect } from 'react';

const GlobalReach = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Global Reach | Upschool';
    }, []);
    return (
        <>
            <div className="flex item-center justify-center flex-col">
                <div className=" flex items-center justify-center flex-col">
                    <div className="w-full relative h-[500px]">
                        <div className="relative flex h-[500px]">
                            <div className="w-full h-full relative video overflow-hidden">
                                <iframe
                                    className="sm:scale-[2] scale-[4] xxxl:scale-[6] sm:h-full sm:w-full"
                                    width={426}
                                    height={220}
                                    src="https://player.vimeo.com/video/710675720?autoplay=1&loop=1&muted=1&background=1"
                                    title="Background Video"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                ></iframe>
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
                            </div>
                            <div className="absolute flex w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                                <div className="flex items-center justify-center flex-col  max-w-[800px] z-10">
                                    <h3
                                        className="text-[20px] mb-[30px] font-lexend font-light tracking-[8px]"
                                        style={{ color: '#FDCF60' }}
                                    >
                                        We are so proud that
                                    </h3>
                                    <h1
                                        className="text-[28px] sm:text-[44px] md:text-[51px] text-center px-[1.5rem] font-lexend font-semibold mb-[1.5rem]"
                                        style={{ color: 'white' }}
                                    >
                                        Students Over 170 Countries Are Learning
                                        With Upschool{' '}
                                    </h1>
                                    <div className="flex flex-col items-center justify-center  mb-[1.7rem]">
                                        <h2
                                            className="text-[22px] md:text-[41px] sm:text-[34px] text-center font-lexend font-medium"
                                            style={{ color: '#FDCF60' }}
                                        >
                                            Join The Movement
                                        </h2>
                                        <svg
                                            className="-mt-3  md:w-[25rem]  sm:w-[20rem] w-[13rem]"
                                            width="400"
                                            height="32"
                                            viewBox="0 0 793 46"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                className="path stroke-[9] "
                                                d="M6 30.7841C21.7883 30.7841 37.2527 30.1065 52.962 28.6204C62.4639 27.7216 72.0356 27.5841 81.5326 26.6043C100.558 24.6413 119.415 21.3537 138.477 19.7198C161.885 17.7134 185.439 17.0059 208.896 15.5399C223.888 14.6029 238.838 12.415 253.841 11.3109C265.953 10.4196 278.022 10.8234 290.133 10.229C308.824 9.31165 327.611 7.50908 346.29 6.93432C371.774 6.1502 397.315 7.36705 422.806 6.83597C462.957 5.9995 503.108 6 543.285 6C578.051 6 612.837 7.70037 647.536 9.98317C674.214 11.7383 701.011 13.7916 727.396 18.5888C730.85 19.2168 733.929 20.8802 737.083 22.3261C741.49 24.346 746.53 24.5308 751.147 25.9158C755.883 27.3366 759.497 28.7439 763.736 31.1284C765.431 32.0818 767.827 31.8197 769.686 32.5544C772.002 33.4701 774.061 34.7369 776.472 35.4066C779.061 36.1258 786.701 42.8755 786.701 37.8653"
                                                stroke="#FDCF60"
                                                // stroke-width="8"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        className="px-[30px] py-[10px] border-2 border-white"
                                        style={{ color: 'white' }}
                                    >
                                        <button className="mr-2">
                                            Register
                                        </button>
                                        <ArrowCircleRightOutlinedIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-[3rem] px-[1rem]">
                    <RxCursorArrow
                        // style={{ fontSize: '45px' }}
                        className="mb-8 text-red-upschool text-[45px]"
                    />
                    <h1
                        className="sm:text-3xl text-lg max-w-[1200px] text-center text-font-color font-bold"
                        // style={{ color: 'black' }}
                    >
                        Move your mouse over the map below to see which
                        countries are learning with us (shaded pink).{' '}
                    </h1>
                </div>
                <div className="map w-full xxxl:max-w-[2000px] xxxl:ml-auto xxxl:mr-auto">
                    <Map />
                </div>
            </div>
        </>
    );
};

export default GlobalReach;
