const AboutCharity = ({ charityData }) => {
    const { charityLogo } = charityData;

    console.log(charityLogo);
    return (
        <>
            <div className="md:w-1/3">
                <div className="w-10/12 mx-auto flex flex-col items-center">
                    <img
                        src={charityLogo}
                        className="w-[40%] md:w-[60%] mt-5 md:mt-[-140px]"
                    />
                    <button className="mt-5 w-full bg-theme-color text-gray-100 py-2">
                        View All Projects
                    </button>
                    <div className="mt-5 w-full bg-white rounded border border-gray-200 flex flex-col items-center">
                        <div className="mt-5 text-font-color font-semibold text-2xl text-center">
                            Fund This Project
                        </div>
                        <div className="my-5 text-gray-100 h-[48px] w-[48px] bg-theme-color rounded-full flex items-center justify-center">
                            <div className="inline-block text-4xl font-extrabold font-serif">
                                i
                            </div>
                        </div>
                        <div className="w-4/5 text-font-color font-semibold text-lg text-center">
                            The Donate Function Is Coming Soon
                        </div>
                        <div className="mt-5 w-4/5 text-font-color font-light text-md text-center">
                            You will be able to donate to projects in early
                            2023.
                        </div>
                        <div className="mt-10 mb-3 w-full flex flex-col ">
                            <button className="border border-theme-color mx-2 py-2 rounded font-light">
                                $ (Coming Soon)
                            </button>
                            <button className=" mx-2 py-2 mt-3 bg-red-upschool text-gray-100 rounded border border-theme-color">
                                Donate (Coming Soon)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutCharity;
