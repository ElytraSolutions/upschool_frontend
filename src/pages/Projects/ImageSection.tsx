import BackgroundVideo from '../../assets/background_video.mp4';

const ImageSection = () => {
    return (
        <>
            <div className="h-[50vh] overflow-hidden relative font-lexend">
                <video
                    autoPlay
                    loop
                    muted
                    className="object-cover h-full w-full"
                >
                    <source src={BackgroundVideo}></source>
                </video>
                <div className="w-full h-full bg-opacity-60 top-0 absolute bg-blue-900 flex flex-col justify-center items-center">
                    <div className="text-gray-100 text-[35px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-bold md:font-extrabold lg:font-black text-center">
                        <h1>
                            Choose a Project:
                            <br /> Change the World
                        </h1>
                    </div>
                    <div className="mt-5 text-white text-xs sm:text-sm md:text-md lg:text-lg font-light text-center">
                        <p>
                            We’re working with charity partners and schools
                            across the globe to support projects that help build
                            a better world.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageSection;
