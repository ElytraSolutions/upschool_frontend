import resolveImgURL from '../../../utlis/resolveImgURL';

function SmallProjectCard() {
    return (
        <>
            <div className="bg-[#f4f4f4] font-family-lexend grid gap-1 border border-gray-300 rounded flex max-w-[260px]">
                <div className="row-span-1 flex max-h-[120px]">
                    <img
                        className="w-full h-full object-cover"
                        src={resolveImgURL('/images/childernWithTeacher1.png')}
                        alt="projectImage"
                    />
                </div>
                <div className="pl-2 pr-2 text-theme-color flex text-left font-bold lg:text-base">
                    <p>
                        Invest in Education for Children Living In Poverty in
                        Pakistan
                    </p>
                </div>
                <div className="pl-2 pt-2 pb-2 flex text-theme-color text-left xm:text-sm lg:text-sm">
                    <p>Opportunity International Australia</p>
                </div>
            </div>
        </>
    );
}

export default SmallProjectCard;
