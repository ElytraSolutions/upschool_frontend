import resolveImgURL from '../../utlis/resolveImgURL';

resolveImgURL;
const Share = () => {
    return (
        <div className=" w-[80%] lg:w-[35%] flex pt-4">
            {/* share div */}
            <div className="w-full h-[25vh] rounded-xl overflow-hidden">
                <div className=" w-full h-[25vh] flex flex-col justify-center items-center gap-4  relative  hover:scale-110 origin-center transition-all">
                    <div className="text-[1.5rem] text-white font-bold ">
                        Register for this event
                    </div>
                    <a
                        href="https://www.eventbrite.com/e/upschool-world-childrens-day-conference-tickets-191037377837"
                        target="_blank"
                        rel="noreferrer"
                        className="w-auto h-auto px-4 py-2 text-white text-[1rem] flex justify-center items-center rounded-md border-2 border-white hover:bg-white hover:text-theme-color transition-all"
                    >
                        Register Now
                    </a>
                    <img
                        src={resolveImgURL(
                            'images/webinar/share-background.png',
                        )}
                        alt=""
                        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Share;
