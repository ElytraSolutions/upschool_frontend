
type ProgressBarPorps = {
    currentLevel: number;
}

export default function ProgressBar({ currentLevel }: ProgressBarPorps) {
    const step = currentLevel + 1;
    const percent = [100, 66, 33];
    const width = currentLevel == 0 ? 'w-1/12' : `w-${currentLevel}/3`;
    return (
        <div className="grid grid-cols-10 w-full">
            <div className=" col-start-2 col-end-10 flex  flex-col text-white w-full ">
                <span className="text-md">step {step} of 3</span>
                <span className="text-xl">{`${percent[currentLevel]}% to complete`}</span>
                <div className="bg-white w-full h-6 rounded-s-md rounded-e-xl mt-2">
                    <div className={`bg-pink-400 ${width} h-6 rounded-s-md rounded-e-md`}></div>
                </div>
            </div>
        </div>
    );
}