import resolveImgURL from '../../../utlis/resolveImgURL';
import SocialMediaIcons from './SocialMediaIcons';

function CharityPageImageSection({ name, links, cover, logo }) {
    return (
        <>
            <div className="flex">
                <div className="w-full grid grid-cols-14">
                    <div className="z-0 col-span-full relative max-h-[400px]">
                        <div className="relative flex">
                            <div className="w-full h-[400px] relative">
                                <img
                                    src={resolveImgURL(cover)}
                                    alt="Your Image"
                                    className="w-full h-[400px] object-cover"
                                />
                                {/*pseudo-element for the overlay */}
                                <div className="absolute top-0 left-0 w-full h-full bg-theme-color opacity-60 z-0"></div>
                            </div>
                            <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                                <h2
                                    style={{ textShadow: '1px 1px #000000' }}
                                    className="md:text-[53px] md:font-bold text-[33px] drop-shadow-xl font-bold font-lexend"
                                >
                                    {name.toUpperCase()}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-16 col-span-10 col-start-3">
                        <div className="grid md:grid-cols-10 grid-flow-row gap-y-2 justify-center items-center">
                            <div className="md:col-span-2 md:col-start-1">
                                <div className="flex justify-center">
                                    <div className="shrink-0">
                                        <SocialMediaIcons link={links} />
                                    </div>
                                </div>
                            </div>
                            <div className="z-10 md:col-span-2 md:col-start-8 row-start-1">
                                <div className="w-[230px] h-[230px] flex md:p-2 p-0">
                                    <a
                                        href={links.website}
                                        target="_blank"
                                        rel="nonreferrer"
                                    >
                                        <img
                                            className="border border-gray-300"
                                            src={resolveImgURL(logo)}
                                            alt="logo"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CharityPageImageSection;
