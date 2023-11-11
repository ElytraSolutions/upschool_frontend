import DoneAllIcon from '@mui/icons-material/DoneAll';

function CourseStaticVideo() {
    return (
        <>
            <div className="bg-[#f4f4f4] flex flex-cols">
                <iframe
                    className="w-full"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rE70YlvHBzA?si=QxXdtWWqOUZMXMIv"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <div className="grid text-white text-[25px] font-bold ">
                    <div className="flex flex-cols">
                        <DoneAllIcon />
                        <span className="">

                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseStaticVideo;
