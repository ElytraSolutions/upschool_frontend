import { CertificateProgressBar as ProgressBarUB } from './CertificateProgressBar';

type ProgressSectionUBPorps = {
    currentStep: number;
};
export const CertificateProgressSection = ({
    currentStep,
}: ProgressSectionUBPorps) => {
    return (
        <>
            <div className=" col-span-5 flex items-center  bg-theme-color h-full max-h-[80vh] w-full">
                {/* second column layout */}
                <div className=" relative w-11/12 h-fit">
                    <div className="grid grid-rows-11 gap-y-3 h-fit py-6">
                        {/* first row:progress stepper */}
                        <div className="row-span-9 grid grid-cols-4 sm:h-1/2 md:h-2/3 place-items-center mb-2">
                            {/* first label */}
                            <div className="col-span-1">
                                {/* Circle container */}
                                {/* Circle */}
                                <div className="border-2 border-red-upschool bg-white w-8 h-8 rounded-full">
                                    {/* tick mark */}
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className={`relative w-6 h-6 mt-1 text-theme-color ${
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
                                <h1 className="text-white">About You</h1>
                            </div>

                            {/* first line */}
                            <div className=" col-start-1 col-span-1">
                                <div
                                    className={`h-6  max-h-full border w-0  ${
                                        currentStep > 0
                                            ? 'border-white'
                                            : 'border-gray-400'
                                    } `}
                                ></div>
                            </div>
                            {/* occupying extra spaces ; not needed code*/}

                            {/* second label */}
                            <div className=" col-start-1 col-span-1">
                                {/* Circle container */}
                                {/* Circle */}
                                <div
                                    className={`${
                                        currentStep > 0
                                            ? 'border-red-upschool bg-white '
                                            : 'border-gray-400'
                                    } border-2  w-8 h-8 rounded-full`}
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
                                            } relative w-6 h-6 mt-1 text-theme-color`}
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
                                    Quiz
                                </h1>
                            </div>
                            {/* second line */}
                            <div className=" col-start-1 col-span-1 ">
                                <div
                                    className={`h-6  max-h-full border w-0 ${
                                        currentStep > 1
                                            ? 'border-white'
                                            : 'border-gray-400'
                                    } `}
                                ></div>
                            </div>
                            {/* occupying extra spaces; not needed code*/}

                            {/* third label */}
                            <div className=" col-start-1 col-span-1">
                                {/* Circle container */}
                                {/* Circle */}
                                <div
                                    className={`${
                                        currentStep > 1
                                            ? 'border-red-upschool bg-white '
                                            : 'border-gray-400'
                                    } border-2 w-8 h-8 rounded-full`}
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
                                            } relative w-6 h-6 mt-1 text-theme-color`}
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
                                        currentStep > 1
                                            ? 'text-white'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    Certificate Preview
                                </h1>
                            </div>
                        </div>
                        {/* second row:progress bar */}
                        <div className=" row-start-10 row-span-2">
                            <ProgressBarUB currentLevel={currentStep} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
