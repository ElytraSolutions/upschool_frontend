import { useNavigate } from 'react-router-dom';
import resolveImgURL from '../../../utlis/resolveImgURL';

function CharityCard({ charity }) {
    const navigate = useNavigate();
    const cardDescription = charity.description
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    const handleButtonClick = () => {
        navigate(`/charities/${charity.slug}`);
    };
    return (
        <>
            <div className="flex flex-grow justify-center xs:px-0 px-4 xs:max-w-[353.33px] max-h-[459.71px]">
                <div className="bg-white border border-gray-300 rounded xs:max-w-[353.33px] xs:max-h-[459.71px] ">
                    <div className="flex grid grid-cols-13 xs:h-[459.71px]">
                        <div className="row-span-full col-start-1 col-end-14 grid">
                            <div className="pb-2">
                                <div className="flex flex-grow">
                                    <img
                                        className="rounded-t"
                                        src={resolveImgURL(charity.thumbnail)}
                                        alt="image"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center xs:pt-2 pt-9 text-theme-color text-lg font-bold font-lexend h-[56px]">
                                <div className="flex justify-start px-4 line-clamp-3">
                                    <button
                                        className="text-left"
                                        onClick={handleButtonClick}
                                    >
                                        <p className="">
                                            {charity.name.toUpperCase()}
                                        </p>
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-start px-4 line-clamp-3 h-[89.33px]">
                                <p
                                    className="leading-loose text-theme-color text text-sm line-clamp-3 text-ellipsis"
                                    dangerouslySetInnerHTML={{
                                        __html: cardDescription,
                                    }}
                                ></p>
                            </div>
                            <div className="py-2 justify-center">
                                <div className="flex justify-start px-4">
                                    <button
                                        onClick={handleButtonClick}
                                        className="text-white font-sans-serif bg-red-upschool py-2 px-5 rounded-full hover:-translate-y-1 hover:bg-theme-color transition duration-300"
                                    >
                                        <p className="text-sm space-y-[7px]">
                                            Learn More
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-full flex col-span-3 md:col-start-11 md:col-end-14 col-start-6 col-end-9 self-center">
                            <div className="grid xs:grid-rows-3 grid-rows-2">
                                <div className="xs:row-span-2 row-span-1 row-start-1 row-end-3 flex justify-end">
                                    <div className="flex justify-end lg:p-3 md:p-2">
                                        <button onClick={handleButtonClick}>
                                            <img
                                                className="rounded-sm shadow-sm border border-gray-300"
                                                src={resolveImgURL(
                                                    charity.image,
                                                )}
                                                alt="logo.png"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CharityCard;
