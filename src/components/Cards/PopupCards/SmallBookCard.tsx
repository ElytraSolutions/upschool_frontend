import resolveImgURL from '../../../utlis/resolveImgURL';

function SmallBookCard() {
    return (
        <>
            <div className="bg-[#f4f4f4] grid grid-cols-5 font-bold text-theme-color text-lg text-left lg:gap-5 md:gap-3 xm:gap-1 xs:w-[300px] w-fit">
                <div className="col-span-2 col-start-1 w-fit lg:max-w-[130px] lg:max-h-[130px] md:max-w-[120px] md:max-h-[120px]">
                    <img
                        className="object-contain w-full h-full"
                        src={resolveImgURL('/images/bookCover.png')}
                        alt="bookCover"
                    />
                </div>
                <div className="col-span-3 col-start-3 grid gap-1">
                    <p className="xm:text-lg text-base pl-2">
                        The Jaguar and the Tortoise
                    </p>
                    <p className="xm:text-sm text-xs pl-2">Margaretha Helew</p>
                </div>
            </div>
        </>
    );
}

export default SmallBookCard;
