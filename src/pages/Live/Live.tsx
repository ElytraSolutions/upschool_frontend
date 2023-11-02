import banner from '../../assets/Live/banner.png';
import girl from '../../assets/Live/girl.png';
import event1 from '../../assets/Live/event1.png';

import EventCard from '../../parts/PartsLive/EventCard';

const events = [
    {
        id: 1,
        img: event1,
        title: 'A Masterclass in Adopting Child Centered Learning in Your Classroom',
        link: 'https://teams.microsoft.com/registration/DchiKCVNl0-e4ckEiU8KzA,Qeqop3fb-EmSxW10ELxRAw,HX98klV_bk2lZsjJCpJJjw,kh_ue1Z8-E-bn05LJ1e-zw,nlShjJBE10-56bK1O36u6w,Fra3AM84IEafNCxoF-iFqw?mode=read&tenantId=2862c80d-4d25-4f97-9ee1-c904894f0acc',
        date: '10/10/2021',
        time: '10:00 AM',
        duration: '1 hour',
        mentor: 'Gavin McCormack, Dr Sunita Gandhi',
        description:
            'Our mission is to build a system of education where all children can participate in meaningful and impactful educational opportunities ...',
    },
    {
        id: 2,
        img: event1,
        title: 'A Masterclass in Adopting Child Centered Learning in Your Classroom',
        date: '10/10/2021',
        time: '10:00 AM',
        duration: '1 hour',
        mentor: 'Gavin McCormack, Dr Sunita Gandhi',
        description:
            'Our mission is to build a system of education where all children can participate in meaningful and impactful educational opportunities ...',
    },
    {
        id: 3,
        img: event1,
        title: 'A Masterclass in Adopting Child Centered Learning in Your Classroom',
        date: '10/10/2021',
        time: '10:00 AM',
        duration: '1 hour',
        mentor: 'Gavin McCormack, Dr Sunita Gandhi',
        description:
            'Our mission is to build a system of education where all children can participate in meaningful and impactful educational opportunities ...',
    },
    {
        id: 3,
        img: event1,
        title: 'A Masterclass in Adopting Child Centered Learning in Your Classroom',
        date: '10/10/2021',
        time: '10:00 AM',
        duration: '1 hour',
        mentor: 'Gavin McCormack, Dr Sunita Gandhi',
        description:
            'Our mission is to build a system of education where all children can participate in meaningful and impactful educational opportunities ...',
    },
];

const Live = () => {
    return (
        <>
            {/* banner */}
            <div className="w-[100%] h-[50vh] relative flex flex-col md:flex-row justify-evenly items-center md:pt-[15vh] pt-[10vh] pb-4 overflow-hidden">
                <img
                    src={banner}
                    alt="banner"
                    className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
                />

                {/* text */}
                <div className=" text-white text-5xl font-bold text-center ">
                    Explore our Live Events
                </div>
                {/* img of girl */}
                <img src={girl} alt="girl" className=" h-[100%] " />
            </div>

            {/* events container */}
            <div className="w-full flex flex-col px-[10vw] py-[10vh] ">
                <div className=" text-theme-color font-extrabold text-[1.8rem]">
                    Webinars and Live Lessons
                </div>
                {/* events */}
                <div className="flex flex-col w-full lg:flex-row justify-center xl:justify-between gap-7 items-center mt-6 flex-wrap">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Live;
