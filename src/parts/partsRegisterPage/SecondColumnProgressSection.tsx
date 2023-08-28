import ProgressBar from './ProgressBar';
import LoginPart from './LoginPart';

type ProgressSectionPorps = {
    currentStep: number;
};
function SecondColumnProgressSection({ currentStep }: ProgressSectionPorps) {
    return (
        <>
            <div
                className=" col-span-5 flex flex-wrap content-center justify-center bg-theme-color"
                style={{ height: 'inherit' }}
            >
                {/* second column layout */}
                <div
                    className=" relative w-11/12"
                    style={{ height: 'inherit' }}
                >
                    {/* grid of three rows */}
                    <div className="grid grid-rows-15 gap-y-3 max-h-full py-2">
                        {/* first row:progress stepper */}
                        <div className="row-start-3 row-span-7 grid grid-cols-4 grid-rows-5 place-items-center gap-y-3 ">
                            {/* first label */}
                            <div className="col-span-1">
                                {/* Circle container */}
                                {/* Circle */}
                                <div className="border-2 border-pink-600 bg-white w-10 h-10 rounded-full">
                                    {/* tick mark */}
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className={`relative w-8 h-8 mt-1 text-theme-color ${
                                                currentStep > 0 ? '' : 'hidden'
                                            }`}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            {/* text information */}
                            <div className="col-span-3  justify-self-start flex flex-row flex-1 justify-start">
                                <h1 className="text-white">
                                    Account Information
                                </h1>
                            </div>

                            {/* first line */}
                            <div className=" col-start-1 col-span-1">
                                <div
                                    className={`h-8 max-h-full border w-0  ${
                                        currentStep > 0
                                            ? 'border-white'
                                            : 'border-gray-400'
                                    } `}
                                ></div>
                            </div>
                            {/* occupying extra spaces */}

                            {/* second label */}
                            <div className=" col-start-1 col-span-1">
                                {/* Circle container */}
                                {/* Circle */}
                                <div
                                    className={`${
                                        currentStep > 0
                                            ? 'border-pink-600 bg-white '
                                            : 'border-gray-400'
                                    } border-2  w-10 h-10 rounded-full`}
                                >
                                    {/* tick mark */}
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className={`${
                                                currentStep > 1 ? '' : 'hidden'
                                            } relative w-8 h-8 mt-1 text-theme-color`}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            {/* text information */}
                            <div className="col-span-3 justify-self-start flex flex-row flex-1 justify-start">
                                <h1
                                    className={`${
                                        currentStep > 0
                                            ? 'text-white'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    About You
                                </h1>
                            </div>
                            {/* second line */}
                            <div className=" col-start-1 col-span-1 ">
                                <div
                                    className={`h-8 max-h-full border w-0 ${
                                        currentStep > 1
                                            ? 'border-white'
                                            : 'border-gray-400'
                                    } `}
                                ></div>
                            </div>
                            {/* occupying extra spaces */}

                            {/* third label */}
                            <div className=" col-start-1 col-span-1">
                                {/* Circle container */}
                                {/* Circle */}
                                <div
                                    className={`${
                                        currentStep == 2
                                            ? 'border-pink-600 bg-white '
                                            : 'border-gray-400'
                                    } border-2 w-10 h-10 rounded-full`}
                                >
                                    {/* tick mark */}
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className={`${
                                                currentStep > 2 ? '' : 'hidden'
                                            } relative w-8 h-8 mt-1 text-theme-color`}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            {/* text information */}
                            <div className="col-span-3 justify-self-start flex flex-row flex-1 justify-start">
                                <h1
                                    className={`${
                                        currentStep == 2
                                            ? 'text-white'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    Your Canva Account
                                </h1>
                            </div>
                        </div>
                        {/* second row:progress bar */}
                        <div className=" row-start-11 row-span-2">
                            <ProgressBar currentLevel={currentStep} />
                        </div>
                        {/* third column:Login link */}
                        <div className=" row-start-13 row-span-2 text-white grid grid-cols-10 content-center w-full">
                            <div className="col-start-2 col-end-10 text-sm ">
                                <LoginPart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export { SecondColumnProgressSection };
