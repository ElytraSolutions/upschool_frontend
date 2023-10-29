import { useNavigate } from 'react-router-dom';

type HubCardProps = {
    Hub: {
        id: number;
        title: string;
        description: string;
        imgURL: string;
    };
};

const HubCard: React.FC<HubCardProps> = ({ Hub }) => {
    const navigate = useNavigate();

    const convertToSlug = (title: string) => {
        const words = title.toLowerCase().split(' ');
        const slugTitle = words.join('-');

        return slugTitle;
    };

    const handleButtonClick = () => {
        const slugTitle = convertToSlug(Hub.title);
        navigate(`/hubs/${slugTitle}`, { state: Hub });
    };
    return (
        <>
            <div>
                <div className="flex flex-col h-full rounded-t-md shadow-md shadow-gray-400">
                    <div>
                        <img
                            className="rounded-t-md bg-stone-200"
                            src={Hub.imgURL}
                            alt={Hub.title}
                            width="345"
                            height="345"
                        />
                    </div>
                    <div className="flex flex-col gap-2 p-2 h-full max-w-[345px] ">
                        <p className=" text-font-color text-base  xss:text-xl md:text-2xl  font-medium font-lexend ">
                            {Hub.title}
                        </p>
                        <div className="flex flex-col gap-3 justify-between h-full w-full">
                            <p className="text-font-color line-clamp-4  leading-relaxed font-light text-sm">
                                {Hub.description}
                            </p>
                            <div className="px-1 sm:px-2 md:px-4 py-1">
                                <button
                                    type="button"
                                    className="bg-theme-color text-white text-sm text-center hover:cursor-pointer w-full p-3 my-1"
                                    onClick={handleButtonClick}
                                >
                                    <p>See More</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HubCard;
