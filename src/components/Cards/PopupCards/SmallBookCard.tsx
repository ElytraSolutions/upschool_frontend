import resolveImgURL from '../../../utlis/resolveImgURL';

function SmallBookCard() {
    return (
        <>
            <div className="bg-[#f4f4f4] grid grid-cols-5 font-bold text-theme-color text-lg text-left lg:gap-5 md:gap-3 xm:gap-1 w-[300px]">
                <div className="col-span-2 col-start-1 w-fit lg:max-w-[130px] lg:max-h-[130px] md:max-w-[120px] md:max-h-[120px]">
                    <img
                        className="object-cover w-full h-full"
                        src={resolveImgURL('/images/bookCover.png')}
                        alt="bookCover"
                    />
                </div>
                <div className="col-span-3 col-start-3 grid gap-1">
                    <p className="text-lg">The Jaguar and the Tortoise</p>
                    <p className="text-sm">Margaretha Helew</p>
                </div>
            </div>
        </>
    );
}

export default SmallBookCard;
