type ChallengeCardProps = {
    challenge: {
        id: number;
        title: string;
        description: string;
        imgURL: string;
    };
};
const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
    return (
        <>
            <div>
                <div className="h-full w-full md:max-w-[260px] shadow-md shadow-gray-400">
                    <div className="flex flex-col gap-2 rounded-t-md h-full w-full">
                        <div className="rounded-t-md">
                            <img
                                src={challenge.imgURL}
                                alt={challenge.title}
                                width="720"
                                height="405"
                                className="rounded-t-md"
                            />
                        </div>
                        <div className="flex flex-col justify-between  gap-4 h-full w-full px-3 text-font-color text-sm">
                            <p className="text-xl font-semibold font-lexend">
                                {challenge.title}
                            </p>
                            <div className="flex flex-col gap-2 pb-2">
                                <p>{challenge.description}</p>
                                <div className="bg-white w-fit">
                                    <div className="">
                                        <button
                                            type="button"
                                            className=" bg-pink-upschool  rounded-2xl text-white text-sm text-center hover:cursor-pointer w-full p-3 my-1"
                                            // onClick={handleButtonClick}
                                        >
                                            <p>Read More</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChallengeCard;
