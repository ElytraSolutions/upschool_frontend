import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { categories } from '../../data/UploadBookCategories';

const uploadBookSchema = yup.object().shape({
    categories: yup
        .array()
        .of(yup.string())
        .min(5, 'Select at least 5 categories')
        .max(5, 'Select no more than 5 categories'),
});

interface IStep4Props {
    oldValues: Record<string, any>;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
    backHandler: (values: any) => void;
}

export function UploadBookStep4({
    oldValues,
    submitHandler,
    backHandler,
}: IStep4Props) {
    return (
        <div className=" h-full xm:h-[565px] overflow-y-scroll overflow-x-hidden">
            <Formik
                onSubmit={submitHandler}
                initialValues={oldValues}
                validationSchema={uploadBookSchema}
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
                        <form
                            onSubmit={handleSubmit}
                            className="w-full h-fit p-2 py-4"
                        >
                            <div className="w-full flex flex-col gap-4 justify-center">
                                <h2 className=" text-lg xl:text-xl font-semibold text-font-color py-2">
                                    Please select up to 5 categories
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-2 gap-x-6">
                                    {categories.map((category, index) => (
                                        <label
                                            key={index}
                                            className="flex flex-1 justify-start gap-x-4 items-center hover:cursor-pointer"
                                        >
                                            <Field
                                                className="h-4 w-4"
                                                type="checkbox"
                                                name="categories"
                                                value={category}
                                            />
                                            <p className="text-font-color text-sm 2xl:text-base">
                                                {category}
                                            </p>
                                        </label>
                                    ))}
                                </div>
                                <ErrorMessage
                                    name="categories"
                                    render={(msg: string) => (
                                        <div className="text-center text-red-upschool text-sm md:text-base p-1">
                                            {msg}
                                        </div>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4  px-2 mx-2 w-full font-normal text-base py-1">
                                {/* TODO decide back button */}
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
                                    type="submit"
                                    className="col-start-3 xm:col-start-4 col-span-2 xm:col-span-1 flex flex-1 flex-wrap  items-center justify-center gap-x-0.5 m-1 p-1 bg-theme-color text-white h-10"
                                >
                                    <span className="text-sm md:text-base">
                                        Next
                                    </span>
                                    <span className="hidden  sm:flex sm:items-center pt-1">
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
        </div>
    );
}
