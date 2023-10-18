import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Dropzone from 'react-dropzone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const uploadBookSchema = yup.object().shape({
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
    const [showCheck, setShowCheck] = React.useState(false);

    const getConfigurableProps = () => ({
        showArrows: true,
        showIndicators: true,
        infiniteLoop: true,
        useKeyboardArrows: true,
        autoPlay: true,
        swipeable: true,
        showThumbs: false,
        showStatus: false,
        emulateTouch: true,
    });
    return (
        <div className="flex  flex-row items-center w-full justify-center h-full xm:h-[565px]">
            <div className=" grid grid-rows-6  md:grid-rows-7  gap-5 w-full h-full">
                <div className="row-start-1  row-span-1  flex items-center justify-start">
                    <h1 className="text-font-color text-base lg:text-xl  py-3  font-medium lg:font-semibold font-lexend">
                        Upload Your Book!
                    </h1>
                </div>
                <Formik
                    onSubmit={submitHandler}
                    initialValues={oldValues}
                    validationSchema={uploadBookSchema}
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
                            <div className="md:row-start-2 row-span-5 md:row-span-6 grid grid-rows-6">
                                <div className=" row-span-1 rounded-t-lg bg-white p-4 h-full flex items-center justify-center">
                                    <div
                                        className="bg-red-upschool text-white border hover:cursor-pointer text-sm lg:text-base   2xl:text-xl border-black rounded-full h-full w-full flex justify-center items-center overflow-hidden"
                                        onClick={() => setShowCheck(!showCheck)}
                                    >
                                        <p className="text-center break words">
                                            View book Upload Checklist
                                        </p>
                                    </div>
                                </div>

                                {/* First step form */}
                                <form
                                    onSubmit={handleSubmit}
                                    className="row-span-5 grid grid-rows-4"
                                >
                                    <div className="row-span-3 border border-gray-200 p-2 mt-0 bg-gray-200 rounded-b-lg hover:border-black flex flex-col justify-center h-full ">
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
                                                                    <p className=" flex items-center justify-center text-center text-sm bg-gray-200 border-2 border-gray-400 border-dashed p-4 h-28 sm:h-32 md:h-40 w-full">
                                                                        Click to
                                                                        browse
                                                                        or{' '}
                                                                        <br />
                                                                        drag and
                                                                        drop
                                                                        your pdf
                                                                        file
                                                                    </p>
                                                                </div>
                                                            ) : (
                                                                <div className="flex felx-row justify-between  bg-gray-100 border-2 border-gray-300 border-dashed p-4  ">
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
                                        className={`row-span-1 grid grid-cols-4 gap-4  p-2 ${
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
                                </form>
                            </div>
                        </>
                    )}
                </Formik>
            </div>
            {showCheck ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        style={{ userSelect: 'none' }}
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="absolute right-3 mt-3 z-10">
                                    <button onClick={() => setShowCheck(false)}>
                                        <img src="images/CrossMark.png" />
                                        {/* <span className="text-xl">×</span> */}
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative flex-auto">
                                    <Carousel
                                        // showStatus={false}
                                        // swipeable={true}
                                        // useKeyboardArrows={true}
                                        // showThumbs={false}
                                        // autoPlay={true}
                                        {...getConfigurableProps()}
                                    >
                                        <div>
                                            <img src="images/Safe/safe1.png" />
                                        </div>
                                        <div>
                                            <img src="images/Safe/safe2.png" />
                                        </div>
                                        <div>
                                            <img src="images/Safe/safe3.png" />
                                        </div>
                                        {/* <div>
                                            <img src={Safe3} />
                                        </div> */}
                                        <div>
                                            <img src="images/Safe/safe4.png" />
                                        </div>
                                        <div>
                                            <img src="images/Safe/safe5.png" />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
}
