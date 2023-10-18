function SmallBookCard() {
    return (
        <>
            <div className="bg-[#f4f4f4] text-theme-color font-bold text-lg text-left grid gap-2 w-[335px]">
                <p className="text-xl ">Book</p>
                <div className="grid grid-cols-2 gap-1">
                    <div className="row-span-1 max-w-[150px]">
                        <div className="flex max-w-[150px]">
                            <img
                                src="../../images/bookCover.png"
                                alt="bookCover"
                            />
                        </div>
                    </div>
                    <div className="grid">
                        <p className="text-xl">The Jaguar and the Tortoise</p>
                        <p className="text-base">Margaretha Helew</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SmallBookCard;
