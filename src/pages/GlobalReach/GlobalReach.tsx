import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Map from './Map';
import { RxCursorArrow } from 'react-icons/rx';

const GlobalReach = () => {
    return (
        <>
            <div className="flex item-center justify-center flex-col">
                <div className=" flex items-center justify-center flex-col">
                    <div className=" relative video w-screen h-[500px] overflow-hidden">
                        <iframe
                            className="w-[1704px] h-[960px] object-contain"
                            // style={{ width: '200vw', height: '100vh' }}
                            src="https://player.vimeo.com/video/710675720?autoplay=1&loop=1&muted=1&background=1"
                            title="Background Video"
                            allow="autoplay"
                        ></iframe>
                    </div>
                    <div className="w-full h-[500px] bg-black opacity-40 absolute"></div>
                    <div className="flex absolute items-center justify-center flex-col  max-w-[800px] z-10">
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
                            Students Over 170 Countries Are Learning With
                            Upschool{' '}
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
                            <button className="mr-2">Register</button>
                            <ArrowCircleRightOutlinedIcon />
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
