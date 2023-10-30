import resolveImgURL from '../../utlis/resolveImgURL';

const MainSection = () => {
    return (
        <div className="h-[95vh] w-[100%] overflow-hidden">
            {/* background */}
            <img
                className="absolute h-[95%] w-[100%] z-[-1]"
                src={resolveImgURL('images/Team/banner.webp')}
                alt="banner"
            />
            <div className="h-[95vh] w-[100%] flex flex-col justify-center items-center gap-1">
                {/* text */}
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Our Senior Team
                </h1>
                {/* door */}
                <img
                    className=" h-[40vh] md:h-[50vh] w-auto z-10"
                    src={resolveImgURL('images/Team/door.png')}
                    alt="door"
                />
                {/* subetext */}
                <h3 className="text-xl text-white leading-8 tracking-wide text-center md:w-[60%] mb-4">
                    Hope lies behind the door of every classroom in the world.
                    <br />
                    At Upschool, our dedicated team of people are committed to
                    redefining what happens in those classrooms.
                </h3>
            </div>
        </div>
    );
};

export default MainSection;
