import { UploadBookProgressBar as ProgressBarUB } from './UploadBookProgressBar';

type ProgressSectionUBPorps = {
    currentStep: number;
};
export const UploadBookProgressSection = ({
    currentStep,
}: ProgressSectionUBPorps) => {
    return (
        <>
            <div className=" col-span-5 flex items-center  bg-theme-color h-full w-full">
                {/* second column layout */}
                <div className=" relative w-11/12 h-fit">
                    <div className="grid grid-rows-11 gap-y-3 h-fit py-6">
                        {/* first row:progress stepper */}
                        <div className="row-span-9 grid grid-cols-4 place-items-center mb-2">
                            {/* first label */}
                            <div className="col-span-1">
                                {/* Circle container */}
                                {/* Circle */}
                                <div className="border-2 border-pink-600 bg-white w-8 h-8 rounded-full flex justify-center">
                                    {/* tick mark */}
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
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
                                <h1 className="text-white">Upload PDF</h1>
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
                                        currentStep > 1
                                            ? 'border-pink-600 bg-white '
                                            : 'border-gray-400'
                                    } border-2  w-8 h-8 rounded-full flex justify-center`}
                                >
                                    {/* tick mark */}
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
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
                                    About Your Book
                                </h1>
                            </div>
                            {/* second line */}
                            <div className=" col-start-1 col-span-1 ">
                                <div
                                    className={`h-6  max-h-full border w-0 ${
                                        currentStep > 2
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
                                        currentStep > 2
                                            ? 'border-pink-600 bg-white '
                                            : 'border-gray-400'
                                    } border-2 w-8 h-8 rounded-full flex justify-center`}
                                >
                                    {/* tick mark */}
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
                                            stroke="currentColor"
                                            className={`${
                                                currentStep > 3 ? '' : 'hidden'
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
                                        currentStep > 2
                                            ? 'text-white'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    Book Cateogry
                                </h1>
                            </div>

                            {/* fourth line */}
                            <div className=" col-start-1 col-span-1">
                                <div
                                    className={`h-6  max-h-full border w-0  ${
                                        currentStep > 3
                                            ? 'border-white'
                                            : 'border-gray-400'
                                    } `}
                                ></div>
                            </div>
                            {/* occupying extra spaces; not needed code */}

                            {/* fourth label */}
                            <div className=" col-start-1 col-span-1">
                                {/* Circle container */}
                                {/* Circle */}
                                <div
                                    className={`${
                                        currentStep > 3
                                            ? 'border-pink-600 bg-white '
                                            : 'border-gray-400'
                                    } border-2  w-8 h-8 rounded-full flex justify-center`}
                                >
                                    {/* tick mark */}
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
                                            stroke="currentColor"
                                            className={`${
                                                currentStep > 4 ? '' : 'hidden'
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
                                        currentStep > 3
                                            ? 'text-white'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    Select a Project
                                </h1>
                            </div>
                            {/* fourth line*/}
                            <div className=" col-start-1 col-span-1">
                                <div
                                    className={`h-6  max-h-full border w-0  ${
                                        currentStep > 4
                                            ? 'border-white'
                                            : 'border-gray-400'
                                    } `}
                                ></div>
                            </div>
                            {/* occupying extra spaces; not needed code */}

                            {/* fifth label */}
                            <div className=" col-start-1 col-span-1">
                                {/* Circle container */}
                                {/* Circle */}
                                <div
                                    className={`${
                                        currentStep > 4
                                            ? 'border-pink-600 bg-white '
                                            : 'border-gray-400'
                                    } border-2  w-8 h-8 rounded-full flex justify-center`}
                                >
                                    {/* tick mark */}
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
                                            stroke="currentColor"
                                            className={`${
                                                currentStep > 5 ? '' : 'hidden'
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
                                        currentStep > 4
                                            ? 'text-white'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    Book Summary and Preview
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
