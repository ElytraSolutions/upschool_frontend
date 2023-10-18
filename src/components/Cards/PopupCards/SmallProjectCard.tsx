function SmallProjectCard() {
    return (
        <>
            <div className="bg-[#f4f4f4] font-family-lexend flex grid border border-gray-300 min-w-[360px]">
                <div className="row-span-1">
                    <img
                        className="object-fill "
                        src="../../images/childernWithTeacher1.png"
                        alt="projectImage"
                    />
                </div>
                <div className="pl-2 pr-2 text-theme-color text-left underline underline-offset-4 font-bold lg:text-lg">
                    Invest in Education for Children Living In Poverty in
                    Pakistan
                </div>
                <div className="pl-2 pt-2 pb-2 text-theme-color text-left text-xs xm:text-sm lg:text-base">
                    Opportunity International Australia
                </div>
            </div>
        </>
    );
}

export default SmallProjectCard;
