function CanvaPage() {
    return (
        <>
            <div className="grid grid-cols-14">
                <div className="col-start-2 col-span-12">
                    <div className="h-[300px] p-2 flex justify-center items-center text-center">
                        <h1 className="text-[33px] text-theme-color font-bold font-sans-serif mt-[15px] mb-[15px]">
                            Please create an Upschool account{' '}
                            <span className="underline underline-offset-4">
                                here
                            </span>{' '}
                            to get your FREE premium Canva account
                        </h1>
                    </div>
                    <div className="flex mt-[15px] mb-[15px] pl-6 text-left">
                        <div className="text-[27px] text-theme-color font-semibold font-sans-serif">
                            <b>Our Collaboration</b>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CanvaPage;
