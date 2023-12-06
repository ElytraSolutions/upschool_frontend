import resolveImgURL from '../../utlis/resolveImgURL';
import { useNavigate } from 'react-router-dom';

function CharityProjectCard({ content }) {
    const navigate = useNavigate();
    const intro = content.intro
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    const sustainabilityDetailsArray = content.sustainability_details.slice(
        0,
        5,
    );
    const handleClick = () => {
        navigate(`/charity-projects/${content.slug}`);
    };
    return (
        <>
            <div className="flex flex-grow justify-center p-2">
                <div className="rounded grid lg:grid-cols-2 border gap-x-4 border-gray-300 lg:max-w-[1050px] lg:max-h-[402px] md:max-w-[725px] md:max-h-[550px]">
                    <div className="w-full flex lg:h-[401px] ms:h-[180px] ">
                        <img
                            className="w-full object-cover"
                            src={resolveImgURL(content.thumbnail)}
                            alt="projectImage"
                        />
                    </div>
                    <div className="flex grid p-3 lg:h-[401px]">
                        <div className="flex max-h-[100px]">
                            <div className="">
                                <button
                                    onClick={handleClick}
                                    className="font-extrabold text-theme-color text-left xs:text-2xl xss:text-xl line-clamp-3 font-sans-serif"
                                >
                                    {content.name}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-start items-center h-[30px]">
                            <div className="flex justify-center h-[30px]">
                                <div className="grid grid-cols-2 text-theme-color max-h-[30px] justify-center">
                                    <p className="row-span-full font-bold xs:text-lg xss:text-base font-sans-serif">
                                        Location:
                                    </p>
                                    <p className="xs:text-lg xss:text-base font-sans-serif pl-1">
                                        {content.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex py-2 lg:justify-start ms:justify-center ">
                            <div className="grid grid-cols-5 gap-4">
                                {sustainabilityDetailsArray.map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className="flex 2xl:w-[70px] 2xl:h-[70px] xl:w-[65px] xl:h-[65px] lg:w-[60px] lg:h-[60px] md:w-[70px] md:h-[70px] sm:w-[65px] sm:h-[65px]"
                                        >
                                            <img
                                                className="rounded-sm"
                                                src={resolveImgURL(item.Goal)}
                                                alt={`goal ${index + 1}`}
                                            />
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                        <div className="font-sans-serif xs:text-lg xss:text-base text-theme-color flex justify-start pl-0 p-1 lg:h-[87px] md:h-[60px]">
                            <p
                                className="lg:line-clamp-3 md:line-clamp-2 ms:line-clamp-3 line-clamp-3"
                                dangerouslySetInnerHTML={{ __html: intro }}
                            ></p>
                        </div>
                        <div className="flex justify-start items-center lg:pt-4 md:pt-2">
                            <button
                                onClick={handleClick}
                                className="text-white font-sans-serif bg-red-upschool py-2 px-5 rounded-full hover:-translate-y-1 hover:bg-theme-color transition duration-300"
                            >
                                <p className="text-sm space-y-[7px]">
                                    Learn More
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CharityProjectCard;
