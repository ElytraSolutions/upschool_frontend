import resolveImgURL from '../../utlis/resolveImgURL';
import {
    // EmailShareButton,
    // EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'react-share';

resolveImgURL;
const Share = ({ event }) => {
    return (
        <div className=" w-[80%] lg:w-[35%] flex flex-col gap-4 pt-4">
            {/* share div */}
            <div className="w-full h-[25vh] rounded-xl overflow-hidden">
                <div className=" w-full h-[25vh] flex flex-col justify-center items-center gap-4  relative  hover:scale-110 origin-center ease-in-out duration-700">
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
            {/* presentor div */}
            <div className="w-full h-[20vh] rounded-xl border-2 overflow-hidden flex flex-col gap-3 justify-center items-center bg-gradient-to-b from-gray-300 to-white-500 hover:from- hover:bg-gradient-to-t">
                <div className="w-[45px] h-[45px] rounded-full border-[0.25px] p-3 border-theme-color">
                    <img
                        src={resolveImgURL('images/webinar/teacher-icon.svg')}
                        alt=""
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="text-[1.1rem] text-theme-color font-bold">
                    {event.mentor}
                </div>
                <div className="text-[1rem] text-theme-color">Presenter</div>
            </div>
            {/* share */}
            <div className="w-full h-[20vh] flex flex-col gap-2 justify-center items-center">
                <div className="flex gap-4 items-center">
                    <img
                        src={resolveImgURL('images/webinar/share-icon.svg')}
                        alt=""
                        className="w-[25px] h-[30px]"
                    />
                    <div className="text-[1.1rem] text-theme-color font-bold">
                        Share this event
                    </div>
                </div>
                {/* social medias */}
                <div className="flex gap-4">
                    <FacebookShareButton
                        url={`https://upschool.co${window.location.pathname}`}
                        quote="test quote"
                        hashtag="#upschool"
                    >
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={`https://upschool.co${window.location.pathname}`}
                        title={event.title}
                        hashtags={['upschool']}
                    >
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <LinkedinShareButton
                        url={`https://www.linkedin.com/shareArticle?mini=true&url=https://upschool.co${window.location.pathname}`}
                        title={event.title}
                        summary={event.description}
                        source="upschool.co"
                    >
                        <LinkedinIcon size={32} round={true} />
                    </LinkedinShareButton>
                    {/* <EmailShareButton
                        onClick={() => console.log('email')}
                        openShareDialogOnClick
                        url={`https://upschool.co${window.location.pathname}`}
                        subject={event.title}
                        body={event.description}
                    >
                        <EmailIcon size={32} round={true} />
                    </EmailShareButton> */}
                </div>
            </div>
        </div>
    );
};

export default Share;
