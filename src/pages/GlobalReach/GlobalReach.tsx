import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Map from './Map';
import { RxCursorArrow } from 'react-icons/rx';

const GlobalReach = () => {
    return (
        <>
            <div className="flex item-center justify-center flex-col">
                <div className=" flex items-center justify-center flex-col">
                    <div className="w-full relative h-[500px]">
                        <div className="relative flex h-[500px]">
                            <div className="w-full h-full relative video overflow-hidden">
                                <iframe
                                    className="w-[1652px] h-[930px] object-contain"
                                    width={426}
                                    height={220}
                                    src="https://player.vimeo.com/video/710675720?autoplay=1&loop=1&muted=1&background=1"
                                    title="Background Video"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                ></iframe>
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
                            </div>
                            <div className="absolute flex w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                                <div className="flex items-center justify-center items-center flex-col  max-w-[800px] z-10">
                                    <h3
                                        className="text-[20px] "
                                        style={{ color: '#FDCF60' }}
                                    >
                                        We are so proud that
                                    </h3>
                                    <h1
                                        className="text-[51px] text-center"
                                        style={{ color: 'white' }}
                                    >
                                        Students Over 170 Countries Are Learning
                                        With Upschool{' '}
                                    </h1>
                                    <h2
                                        className="text-[43px] text-center"
                                        style={{ color: '#FDCF60' }}
                                    >
                                        Join The Movement
                                    </h2>
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
                <div className="flex flex-col items-center justify-center py-[3rem]">
                    <RxCursorArrow
                        style={{ fontSize: '50px' }}
                        className="mb-8 text-red-upschool"
                    />
                    <h1
                        className="text-2xl max-w-[1000px] text-center"
                        style={{ color: 'black' }}
                    >
                        Move your mouse over the map below to see which
                        countries are learning with us (shaded pink).{' '}
                    </h1>
                </div>
                <div className="map max-w-[1800px]">
                    <Map />
                </div>
            </div>
        </>
    );
};

export default GlobalReach;
