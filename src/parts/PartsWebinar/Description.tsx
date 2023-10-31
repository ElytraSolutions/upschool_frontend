import calendar from '../../assets/Live/calendar.svg';
import clock from '../../assets/Live/clock.svg';
import hourglass from '../../assets/Live/hourglass.svg';

import resolveImgURL from '../../utlis/resolveImgURL';
const Description = ({ event }) => {
    return (
        <div className="flex flex-col justify-center items-center w-[90%] lg:w-[60%] py-4 px-2 ">
            {/* time div */}
            <div className="flex p-2 w-full justify-start gap-10 border-2 bg-gradient-to-b from-slate-300 to-white-500 rounded-md hover:from-white  ">
                <div className="text-[0.8rem] md:text-[1rem] text-theme-color flex gap-2 items-center  ">
                    <div>
                        <img
                            src={calendar}
                            alt=""
                            className="w-[1rem] h-[1rem] hidden md:block "
                        />
                    </div>
                    Date: {event.time}
                </div>
                <div className=" text-[0.8rem] md:text-[1rem] text-theme-color pl-4 flex gap-2 items-center">
                    <div>
                        <img
                            src={clock}
                            alt=""
                            className="w-[1rem] h-[1rem] hidden md:block "
                        />
                    </div>
                    Time: {event.date}
                </div>
                <div className="text-[0.8rem] md:text-[1rem] text-theme-color pl-4 flex gap-2 items-center">
                    <div>
                        <img
                            src={hourglass}
                            alt=""
                            className="w-[1rem] h-[1rem] hidden md:block"
                        />
                    </div>
                    Duration: {event.duration}
                </div>
            </div>

            {/* title */}
            <div className="text-[1.5rem] w-full text-theme-color font-extrabold pt-4">
                {event.title}
            </div>
            <div className="text-[1rem] w-full text-theme-color font-bold py-2">
                Here’s what will happen during this session:
            </div>
            {/* image */}
            <img
                src={resolveImgURL(event.img)}
                alt=""
                className="w-full h-auto object-cover py-4"
            />
            {/* description */}
            <div className="text-[1rem] w-full text-theme-color font-normal leading-7 py-2 space-y-2">
                {event.description.split('\n').map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default Description;
