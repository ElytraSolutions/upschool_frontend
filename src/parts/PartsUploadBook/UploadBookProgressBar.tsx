type ProgressBarUBPorps = {
    currentLevel: number;
};

function UploadBookProgressBar({ currentLevel }: ProgressBarUBPorps) {
    const step = currentLevel === 0 ? 1 : currentLevel;
    const percent = [100, 80, 60, 40, 20];
    return (
        <div className="grid w-full grid-cols-10">
            <div className=" col-start-2 col-end-11 flex  w-full flex-col text-white ">
                <span className="text-sm">step {step} of 5</span>
                <span className="text-base">{`${
                    percent[step - 1]
                }% to complete`}</span>
                <div className="mt-2 h-5 w-full rounded-e-xl rounded-s-md bg-white">
                    <div
                        className={`h-5 bg-pink-400 ${
                            currentLevel === 2
                                ? 'w-1/5'
                                : currentLevel === 3
                                ? 'w-2/5'
                                : currentLevel === 4
                                ? 'w-3/5'
                                : currentLevel === 5
                                ? 'w-4/5'
                                : 'w-1/12'
                        } rounded-e-md rounded-s-md`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
export { UploadBookProgressBar };
