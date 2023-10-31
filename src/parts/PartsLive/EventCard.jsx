import { Link } from 'react-router-dom';
import calendar from '../../assets/Live/calendar.svg';
import clock from '../../assets/Live/clock.svg';
import hourglass from '../../assets/Live/hourglass.svg';
const EventCard = ({ event }) => {
    return (
        <div className=" w-[70vw] lg:w-[45vw] xl:w-[25vw] min-h-[75vh] lg:h-[65vh] border-[1px] border-[#0201014D] rounded overflow-hidden flex flex-col">
            {/* images */}
            <img
                src={event.img}
                alt=""
                className="w-[100%] h-[25%] object-fill lg:object-cover"
            />
            {/* content */}
            <div className="h-[75%] flex flex-col justify-between px-4 pt-4 pb-4">
                <div className="flex flex-col">
                    {/* mentor */}
                    <div className="text-[0.8rem] text-theme-color">
                        {event.mentor}
                    </div>
                    <div className="  text-theme-color font-extrabold pt-2">
                        <Link to={`/webinar/${event.title}`}>
                            {' '}
                            {event.title}
                        </Link>
                    </div>
                    {/* time schedules */}
                    <div className="flex pt-2">
                        <div className="text-[0.8rem] text-theme-color flex gap-2 items-center  ">
                            <div>
                                <img
                                    src={calendar}
                                    alt=""
                                    className="w-[0.8rem] h-[0.8rem]"
                                />
                            </div>
                            {event.time}
                        </div>
                        <div className="text-[0.8rem] text-theme-color pl-4 flex gap-2 items-center">
                            <div>
                                <img
                                    src={clock}
                                    alt=""
                                    className="w-[0.7rem] h-[0.7rem]"
                                />
                            </div>
                            {event.date}
                        </div>
                        <div className="text-[0.8rem] text-theme-color pl-4 flex gap-2 items-center">
                            <div>
                                <img
                                    src={hourglass}
                                    alt=""
                                    className="w-[0.8rem] h-[0.8rem]"
                                />
                            </div>
                            {event.duration}
                        </div>
                    </div>
                    {/* description */}
                    <div className="text-[0.9rem] leading-7 pt-4 text-theme-color">
                        {event.description}
                    </div>
                </div>

                {/* buttons */}
                <div className="flex flex-col w-full">
                    {/* read more */}
                    <Link
                        to={`/webinar/${event.title}`}
                        className="w-auto  h-[2.25rem] flex justify-center items-center rounded-lg bg-theme-color text-white"
                    >
                        Read More
                    </Link>
                    {/* register now */}
                    <Link
                        to={`/webinar/${event.title}`}
                        className="w-auto  h-[2.25rem] mt-3 flex justify-center items-center  rounded-lg bg-red-upschool text-white"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
