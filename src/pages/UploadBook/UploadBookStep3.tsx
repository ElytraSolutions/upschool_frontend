import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const registerSchema = yup.object().shape({
    categories: yup
        .array()
        .of(yup.string())
        .min(5, 'Select at least 5 categories')
        .max(5, 'Select no more than 5 categories'),
});

interface IStep3Props {
    options: string[];
    oldValues: Record<string, any>;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
    backHandler: (values: any) => void;
}

export function UploadBookStep3({
    options,
    oldValues,
    submitHandler,
    backHandler,
}: IStep3Props) {
    return (
        <Formik
            onSubmit={submitHandler}
            initialValues={oldValues}
            validationSchema={registerSchema}
        >
            {({
                values,
                // errors,
                // touched,
                // handleBlur,
                // handleChange,
                handleSubmit,
            }) => (
                <>
                    {/* Third step form */}
                    <form onSubmit={handleSubmit}>
                        <div className="w-full flex flex-col gap-4 md:gap-8  mt-4 sm:mt-6 lg:mt-8 justify-center">
                            <h2 className=" text-xl xl:text-2xl font-semibold text-font-color">
                                Please select up to 5 categories
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-2 gap-x-6">
                                {options.map((option) => (
                                    <label className="flex flex-1 justify-start gap-x-4 items-center">
                                        <Field
                                            className="h-4 w-4"
                                            type="checkbox"
                                            name="categories"
                                            value={option}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                            <ErrorMessage
                                name="categories"
                                render={(msg) => (
                                    <div className="text-center text-red-upschool text-sm md:text-base p-1">
                                        {msg}
                                    </div>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4  px-2 mx-2 w-full font-normal text-base py-1">
                            <button
                                className="invisible col-start-1 col-span-1 flex flex-1 flex-wrap items-center justify-start gap-x-0.5 m-1 p-1 h-12"
                                onClick={(e) => {
                                    e.preventDefault();
                                    backHandler(values);
                                }}
                            >
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                        />
                                    </svg>
                                </span>
                                <span className="text-xl">
                                    <u>Back</u>
                                </span>
                            </button>

                            <button
                                className="col-start-4 col-span-1 flex flex-1 flex-wrap items-center justify-center gap-x-0.5 m-1 p-1 bg-theme-color text-white h-12"
                                type="submit"
                            >
                                <span className="text-xl">Next</span>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </>
            )}
        </Formik>
    );
}
