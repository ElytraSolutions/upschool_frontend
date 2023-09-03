type ProgressBarUBPorps = {
    currentLevel: number;
};

function UploadBookProgressBar({ currentLevel }: ProgressBarUBPorps) {
    const step = currentLevel + 1;
    const percent = [100, 80, 60, 40, 20];
    return (
        <div className="grid grid-cols-10 w-full">
            <div className=" col-start-2 col-end-11 flex  flex-col text-white w-full ">
                <span className="text-md">step {step} of 5</span>
                <span className="text-xl">{`${percent[currentLevel]}% to complete`}</span>
                <div className="bg-white w-full h-6 rounded-s-md rounded-e-xl mt-2">
                    <div
                        className={`bg-pink-400 h-6 ${
                            currentLevel == 1
                                ? 'w-1/5'
                                : currentLevel == 2
                                ? 'w-2/5'
                                : currentLevel == 3
                                ? 'w-3/5'
                                : currentLevel == 4
                                ? 'w-4/5'
                                : 'w-1/12'
                        } rounded-s-md rounded-e-md`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
export { UploadBookProgressBar };
