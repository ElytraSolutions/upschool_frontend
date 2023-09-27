import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Dropzone from 'react-dropzone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import React from 'react';

const uploadBookSchema = yup.object().shape({
    file: yup.string().required("You have'nt uploaded the book"),
});
type UploadFileProps = {
    InitialValues: Record<string, any>;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
};

const UploadFile: React.FC<UploadFileProps> = ({
    InitialValues,
    submitHandler,
}) => {
    return (
        <>
            {/* Form to take csv file */}
            <Formik
                onSubmit={submitHandler}
                initialValues={InitialValues}
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
                        <div className="flex w-full flex-col">
                            {/* displays 'Upload  CSV File' */}
                            <div className="flex  w-full items-center justify-center rounded-t-lg bg-stone-50 p-4 ">
                                <div className="flex  w-full items-center justify-center  rounded-full border border-black bg-red-upschool px-4 py-2">
                                    <p className="w-full truncate text-center text-lg text-white  md:text-xl lg:text-2xl">
                                        Upload CSV File
                                    </p>
                                </div>
                            </div>
                            <form
                                onSubmit={handleSubmit}
                                className="grid grid-rows-4"
                            >
                                <div className="row-span-3 flex h-full flex-col justify-center rounded-b-lg border bg-gray-200 p-2 hover:border-black ">
                                    <div className="h-full w-full p-1 xs:p-4 text-base font-light text-gray-500">
                                        {/* file upload is managed by Dropzone */}
                                        <Dropzone
                                            accept={{
                                                'application/csv': ['.csv'],
                                            }}
                                            maxFiles={1}
                                            multiple={false}
                                            onDrop={(acceptedFile) => {
                                                //console.log(acceptedFile[0]);
                                                // File {
                                                //     path: 'TestCSV.csv',
                                                //     name: 'TestCSV.csv',
                                                //     lastModified: 1695373031572,
                                                //     lastModifiedDate: new Date('2023-09-22T08:57:11.000Z'),
                                                //     webkitRelativePath: '',
                                                //     size: 2,
                                                //     type: 'text/csv'
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
                                                <section className="h-full w-full">
                                                    <div
                                                        {...getRootProps()}
                                                        className="flex h-full w-full flex-row items-center "
                                                    >
                                                        <input
                                                            {...getInputProps()}
                                                        />

                                                        {!values.file ? (
                                                            <p className=" flex h-full w-full items-center justify-center border-2 border-dashed border-gray-400 bg-gray-200  p-4 text-center">
                                                                Click to browse
                                                                or
                                                                <br />
                                                                drag and drop
                                                                your file
                                                            </p>
                                                        ) : (
                                                            <div className="flex-row flex w-full justify-between border-2 border-dashed border-gray-300 bg-gray-100  p-1 xs:p-4 ">
                                                                <p className="truncate w-16 xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl ">
                                                                    {
                                                                        values
                                                                            .file
                                                                            .name
                                                                    }
                                                                </p>
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
                                        render={(msg: string) => (
                                            <div className="p-1 text-center text-sm text-red-upschool md:text-base">
                                                {msg}
                                            </div>
                                        )}
                                    />
                                </div>
                                <div
                                    className={`row-span-1 block sm:grid  sm:grid-cols-4 w-full  content-center  gap-4 p-2 font-normal`}
                                >
                                    <button
                                        type="submit"
                                        className=" sm:col-start-3 sm:col-span-2  md:col-start-4 md:col-span-1 m-1 h-12 w-fit sm:w-full text-center  bg-theme-color p-2 text-white"
                                    >
                                        Upload
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                )}
            </Formik>
        </>
    );
};

export default UploadFile;
