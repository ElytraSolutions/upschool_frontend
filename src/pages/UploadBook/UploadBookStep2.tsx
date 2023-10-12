import { Formik } from 'formik';
import PDFlogo from '../../assets/PDF_logo.png';
interface IStep2Props {
    isLargeScreen: boolean;
    oldValues: Record<string, any>;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
}
export function UploadBookStep2({
    isLargeScreen,
    oldValues,
    submitHandler,
}: IStep2Props) {
    return (
        <div className="flex flex-col gap-9 pt-10 pb-5 text-font-color  h-full xm:h-[565px] w-fit">
            <div className="flex items-center justify-start">
                <h1 className="text-font-color text-base lg:text-xl   font-medium lg:font-semibold font-lexend">
                    Upload Your Book!
                </h1>
            </div>
            <Formik onSubmit={submitHandler} initialValues={oldValues}>
                {({
                    values,
                    //errors,
                    // touched,
                    // handleBlur,
                    // handleChange,
                    handleSubmit,
                    //setFieldValue,
                }) => (
                    <>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-1 md:gap-4"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row items-center justify-between">
                                    {/* Display PDF logo and file name */}
                                    <div className="flex flex-row gap-2 justify-start items-center  font-light">
                                        <span>
                                            <img
                                                src={PDFlogo}
                                                alt="PDF"
                                                width="full"
                                                height="full"
                                                loading="lazy"
                                            />
                                        </span>
                                        <span>{values.file.name}</span>
                                    </div>
                                    {/* Display file size */}
                                    <div className="border border-theme-color p-1 text-xs xs:text-base">
                                        {Math.floor(values.file.size / 1024)} KB
                                    </div>
                                </div>
                                {/* Display progress for checking uploaded file for uploading it as the book */}
                                {/*  TODO logic for showing progress after checking file */}
                                <div className="w-full rounded-lg bg-gray-200 h-3">
                                    <div className="w-1/2 h-full rounded-lg bg-theme-color"></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 md:gap-10">
                                <div className="flex flex-col gap-1 md:gap-3 items-start mt-5 text-xs tab:text-sm ">
                                    <div className="text-sm sm:text-base 2xl:text-lg  font-medium lg:font-semibold">
                                        Checking your book for the following:
                                    </div>
                                    {/*  TODO logic after checking file criteria and finding error or not and showing respective comments or text for following options */}
                                    {/*  TODO if possible putting options is array and using map() funcion for its renering */}
                                    {/* First option */}
                                    <div className="flex flex-row justify-start items-center gap-4">
                                        <div className=" border border-gray-400 w-6 h-6 rounded-full flex justify-center items-start">
                                            <span className="mt-0.5">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-5 h-5 text-gray-400"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4.5 12.75l6 6 9-13.5"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="font-light">
                                            My book has a blank page after the
                                            front cover and another before the
                                            back cover.
                                        </span>
                                    </div>
                                    {/* Second option */}
                                    <div className="flex flex-row justify-start items-center gap-4">
                                        <div className=" border border-gray-400 w-6 h-6 rounded-full flex justify-center items-start">
                                            <span className="mt-0.5">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-5 h-5 text-gray-400"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4.5 12.75l6 6 9-13.5"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="font-light">
                                            The total number of pages in my book
                                            is an even number.(12, 14, 16, 18,
                                            20, ...)
                                        </span>
                                    </div>
                                    {/* Third option */}
                                    <div className="flex flex-row justify-start items-center gap-4">
                                        <div className=" border border-gray-400 w-6 h-6 rounded-full flex justify-center items-start">
                                            <span className="mt-0.5">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-5 h-5 text-gray-400"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4.5 12.75l6 6 9-13.5"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="font-light">
                                            My text is in the Safe Zone and not
                                            near the edges of the page.
                                        </span>
                                    </div>
                                    {/* Fourth option */}
                                    <div className="flex flex-row justify-start items-center gap-4">
                                        <div className=" border border-gray-400 w-6 h-6 rounded-full flex justify-center items-start">
                                            <span className="mt-0.5">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-5 h-5 text-gray-400"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4.5 12.75l6 6 9-13.5"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="font-light">
                                            My book is A4 size (270mm x 297mm).
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`grid grid-cols-4 gap-4  p-2 ${
                                        isLargeScreen
                                            ? 'm-2 text-base'
                                            : 'm-0 text-sm'
                                    } w-full font-normal content-center`}
                                >
                                    <button
                                        type="submit"
                                        className="col-start-3 xm:col-start-4 col-span-2 xm:col-span-1 flex flex-1 flex-wrap  items-center justify-center gap-x-0.5 m-1 p-1 bg-theme-color text-white h-10"
                                    >
                                        <span
                                            className={`${
                                                isLargeScreen
                                                    ? 'text-base'
                                                    : 'text-sm'
                                            }`}
                                        >
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
                            </div>
                        </form>
                    </>
                )}
            </Formik>
        </div>
    );
}
