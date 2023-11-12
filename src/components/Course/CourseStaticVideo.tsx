import DoneAllIcon from '@mui/icons-material/DoneAll';

function CourseStaticVideo() {
    return (
        <>
            <div className="bg-[#3c74cf] grid lg:gird-cols-6 grid-flow-row lg:h-[475px]">
                <iframe
                    className="w-full lg:h-full h-[325px] lg:col-start-1 lg:col-span-4"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rE70YlvHBzA?si=QxXdtWWqOUZMXMIv"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <div className="lg:col-start-5 lg:col-span-2 grid gap-y-6 lg:justify-start justify-center text-white xm:text-[25px] text-[18px] font-semibold font-poppins p-9">
                    <div className="flex flex-cols xm:gap-6 gap-3 items-center justify-start">
                        <DoneAllIcon style={{ fontSize: '50px' }} />
                        <span className="">Purpose & Intention</span>
                    </div>
                    <div className="flex flex-cols xm:gap-6 gap-3 items-center justify-start">
                        <DoneAllIcon style={{ fontSize: '50px' }} />
                        <span className="">Global Perspective</span>
                    </div>
                    <div className="flex flex-cols xm:gap-6 gap-3 items-center justify-start">
                        <DoneAllIcon style={{ fontSize: '50px' }} />
                        <span className="">Making A Real Difference</span>
                    </div>
                    <div className="flex flex-cols xm:gap-6 gap-3 items-center justify-start">
                        <DoneAllIcon style={{ fontSize: '50px' }} />
                        <span className="">Curriculum Aligned</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseStaticVideo;
