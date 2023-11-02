type ProgressBarPorps = {
    currentLevel: number;
};

export default function ProgressBar({ currentLevel }: ProgressBarPorps) {
    const step = currentLevel + 1;
    const percent = [100, 66, 33];
    return (
        <div className="grid w-full grid-cols-10">
            <div className=" col-start-2 col-end-11 flex  w-full flex-col text-white ">
                <span className="text-sm">step {step} of 3</span>
                <span className="text-base">{`${percent[currentLevel]}% to complete`}</span>
                <div className="mt-2 h-4 w-full rounded-e-xl rounded-s-md overflow-hidden bg-white">
                    <div
                        className={`h-4  bg-red-upschool ${
                            currentLevel == 1
                                ? 'w-1/3'
                                : currentLevel == 2
                                ? 'w-2/3'
                                : 'w-1/12'
                        } rounded-e-md `}
                    ></div>
                </div>
            </div>
        </div>
    );
}
