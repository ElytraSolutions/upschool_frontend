type ProgressBarPorps = {
    currentLevel: number;
};

export default function ProgressBar({ currentLevel }: ProgressBarPorps) {
    const step = currentLevel + 1;
    const percent = [100, 66, 33];
    return (
        <div className="grid w-full grid-cols-10">
            <div className=" col-start-2 col-end-10 flex  w-full flex-col text-white ">
                <span className="text-base">step {step} of 3</span>
                <span className="text-xl">{`${percent[currentLevel]}% to complete`}</span>
                <div className="mt-2 h-6 w-full rounded-e-xl rounded-s-md bg-white">
                    <div
                        className={`h-6 bg-pink-400 ${
                            currentLevel == 1
                                ? 'w-1/3'
                                : currentLevel == 2
                                ? 'w-2/3'
                                : 'w-1/12'
                        } rounded-e-md rounded-s-md`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
