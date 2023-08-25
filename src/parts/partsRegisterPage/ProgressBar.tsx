
type ProgressBarPorps = {
    values: {
        completeLevel1: boolean;
        completeLevel2: boolean;
        completeLevel3?: boolean;
    }
}

export default function ProgressBar({ values }: ProgressBarPorps) {
    let step = 1
    let percent = 100
    let width = "w-1/12"
    const { completeLevel1, completeLevel2, completeLevel3 } = values

    if (completeLevel3) {
        width = "w-full"
    }
    else if (completeLevel2) {
        step = 3
        percent = 33
        width = "w-2/3"
    }
    else if (completeLevel1) {
        step = 2
        percent = 66
        width = "w-1/3"
    }

    return (
        <div className="grid grid-cols-10 w-full">
            <div className=" col-start-2 col-end-10 flex  flex-col text-white w-full ">
                <span className="text-md">step {step}of 3</span>
                <span className="text-xl">{completeLevel3 ? "Completed" : `${percent}% to complete`}</span>
                <div className="bg-white w-full h-6 rounded-s-md rounded-e-xl mt-2">
                    <div className={`bg-pink-400 ${width} h-6 rounded-s-md rounded-e-md`}></div>
                </div>
            </div>
        </div>
    );
}