type ProgressBarUBPorps = {
    currentLevel: number;
};

function CertificateProgressBar({ currentLevel }: ProgressBarUBPorps) {
    // console.log("Intial Current level", currentLevel)
    // const step = currentLevel === 0 ? 1 : currentLevel;
    // console.log("currentStep", step)
    const percent = [100, 50, 0];
    return (
        <div className="grid w-full grid-cols-10">
            <div className=" col-start-2 col-end-11 flex  w-full flex-col text-white ">
                <span className="text-sm">Step {currentLevel + 1} of 3</span>
                <span className="text-base">{`${percent[currentLevel]}% to complete`}</span>
                <div className="mt-2 h-4 w-full rounded-e-xl rounded-s-md overflow-hidden bg-white">
                    <div
                        className={`h-4 bg-red-upschool ${
                            currentLevel === 1
                                ? 'w-1/2'
                                : currentLevel === 2
                                ? 'w-full'
                                : 'w-1/12'
                        } rounded-e-md`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
export { CertificateProgressBar };
