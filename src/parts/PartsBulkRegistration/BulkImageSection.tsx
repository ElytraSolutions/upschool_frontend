import resolveImgURL from '../../utlis/resolveImgURL';

function BulkImageSection() {
    return (
        <>
            <div className="relative max-h-[300px]">
                <div className="relative flex">
                    <div className="w-full h-[300px] relative">
                        <img
                            src={resolveImgURL(
                                '/images/BulkRegistration/bulkRegistrationCover.jpg',
                            )}
                            alt="Your Image"
                            className="w-full h-[300px] object-cover"
                        />
                        {/*pseudo-element for the overlay */}
                        <div className="absolute top-0 left-0 w-full h-full bg-theme-color   opacity-60 z-0"></div>
                    </div>
                    <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <div className="grid justify-center items-center">
                            <div className="flex justify-center items-center">
                                <div className="flex lg:w-[100px] lg:h-[125px] w-[140px] h-[175px]">
                                    <img
                                        className="object-cover"
                                        src={resolveImgURL(
                                            '/images/ImpactFilms/Thumbnails-3.png',
                                        )}
                                        alt="rocketKid.png"
                                    />
                                </div>
                            </div>
                            <h2 className="md:text-[50px] md:font-bold text-[33px] font-bold font-sans">
                                BULK ENROLMENT
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BulkImageSection;
