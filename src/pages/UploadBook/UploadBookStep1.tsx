import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Dropzone from 'react-dropzone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const registerSchema = yup.object().shape({
    file: yup.string().required("You have'nt uploaded the book"),
});

interface IStep1Props {
    isLargeScreen: boolean;
    oldValues: Record<string, any>;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
}
export function UploadBookStep1({
    isLargeScreen,
    oldValues,
    submitHandler,
}: IStep1Props) {
    return (
        <div className=" grid grid-rows-6  md:grid-rows-11  gap-3">
            <div className="row-start-1  row-span-1 md:row-span-2 flex items-center justify-start">
                <h1 className="text-font-color text-xl sm:text-2xl tab:text-3xl xl:text-4xl 2xl:text-5xl  font-medium lg:font-semibold">
                    Upload Your Book!
                </h1>
            </div>
            <div className="md:row-start-3 row-span-5 md:row-span-9 grid grid-rows-6 md:grid-rows-8">
                <div className=" row-span-1 rounded-t-lg bg-white p-4 h-16 flex items-center justify-center">
                    <div className="bg-red-upschool text-white border border-black rounded-full h-10 w-full flex justify-center items-center overflow-hidden">
                        <h2 className=" inline-block">
                            View book Upload Checklist
                        </h2>
                    </div>
                </div>
                <Formik
                    onSubmit={submitHandler}
                    initialValues={oldValues}
                    validationSchema={registerSchema}
                >
                    {({
                        values,
                        //errors,
                        // touched,
                        // handleBlur,
                        // handleChange,
                        handleSubmit,
                        setFieldValue,
                    }) => (
                        <>
                            {/* First step form */}
                            <form
                                onSubmit={handleSubmit}
                                className="row-span-7 grid grid-rows-7"
                            >
                                <div className="row-span-5 border border-gray-200 p-2 mt-0 bg-gray-200 rounded-b-lg hover:border-black flex flex-col justify-center  h-52 sm:h-60 md:h-72">
                                    <div className="p-4 text-gray-500 text-base font-light w-full">
                                        <Dropzone
                                            accept={{
                                                'application/pdf': ['.pdf'],
                                            }}
                                            maxFiles={1}
                                            multiple={false}
                                            onDrop={(acceptedFile) => {
                                                //console.log(acceptedFile[0]);
                                                // File {
                                                //     path: 'TestFile.pdf',
                                                //     name: 'TestFile.pdf',
                                                //     lastModified: 1693752820129,
                                                //     lastModifiedDate: new Date('2023-09-03T14:53:40.000Z'),
                                                //     webkitRelativePath: '',
                                                //     size: 191843,
                                                //     type: 'application/pdf'
                                                //   }
                                                setFieldValue(
                                                    'file',
                                                    acceptedFile[0],
                                                );
                                            }}
                                        >
                                            {({
                                                getRootProps,
                                                getInputProps,
                                            }) => (
                                                <section>
                                                    <div
                                                        {...getRootProps()}
                                                        className=" rounded-md overflow-hidden "
                                                    >
                                                        <input
                                                            {...getInputProps()}
                                                        />

                                                        {!values.file ? (
                                                            <div className="">
                                                                <p className=" flex items-center justify-center text-center bg-gray-200 border-2 border-gray-400 border-dashed p-4 h-28 sm:h-32 md:h-40 w-full">
                                                                    Click to
                                                                    browse or{' '}
                                                                    <br />
                                                                    drag and
                                                                    drop your
                                                                    pdf file
                                                                </p>
                                                            </div>
                                                        ) : (
                                                            <div className="flex felx-row justify-between bg-gray-100 border-2 border-gray-300 border-dashed p-4  ">
                                                                <h4>
                                                                    {
                                                                        values
                                                                            .file
                                                                            ?.name
                                                                    }
                                                                </h4>
                                                                <EditOutlinedIcon />
                                                            </div>
                                                        )}
                                                    </div>
                                                </section>
                                            )}
                                        </Dropzone>
                                    </div>
                                    <ErrorMessage
                                        name="file"
                                        render={(msg) => (
                                            <div className="text-center text-red-upschool text-sm md:text-base p-1">
                                                {msg}
                                            </div>
                                        )}
                                    />
                                </div>
                                <div
                                    className={`row-span-2 grid grid-cols-4 gap-4  p-2 ${
                                        isLargeScreen
                                            ? 'm-2 text-base'
                                            : 'm-0 text-sm'
                                    } w-full font-normal content-center`}
                                >
                                    <button
                                        type="submit"
                                        className="col-start-4 col-span-1 flex flex-1 flex-wrap items-center justify-center gap-x-0.5 m-1 p-1 bg-theme-color text-white h-12"
                                    >
                                        <span
                                            className={`${
                                                isLargeScreen
                                                    ? 'text-xl'
                                                    : 'text-sm'
                                            }`}
                                        >
                                            Next
                                        </span>
                                        <span className="hidden sm:inline">
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
        </div>
    );
}
