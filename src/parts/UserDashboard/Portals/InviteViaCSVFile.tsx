import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Dropzone from 'react-dropzone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const uploadBookSchema = yup.object().shape({
    file: yup.string().required("You have'nt uploaded the book"),
});
const InitialValues: Record<string, any> = { file: '' };

const UploadFile = ({ setSelectComponent }) => {
    const submitHandler = (data, onSubmitProps) => {
        console.log(data);
        onSubmitProps.resetForm();
        setSelectComponent(1);
    };
    return (
        <>
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
                        <div className="flex flex-col w-full">
                            <div className="rounded-t-lg  bg-stone-50 p-4 flex items-center justify-center w-full ">
                                <div className="bg-red-upschool  px-4 py-2 border  border-black rounded-full w-full flex justify-center items-center">
                                    <p className="text-center text-white text-lg md:text-xl lg:text-2xl  truncate w-full">
                                        Download sample CSV File
                                    </p>
                                </div>
                            </div>
                            <form
                                onSubmit={handleSubmit}
                                className="grid grid-rows-4"
                            >
                                <div className="row-span-3 p-2 border bg-gray-200 rounded-b-lg hover:border-black flex flex-col justify-center h-full ">
                                    <div className="p-4 text-gray-500 text-base font-light w-full h-full">
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
                                                        className="w-full h-full flex flex-row items-center "
                                                    >
                                                        <input
                                                            {...getInputProps()}
                                                        />

                                                        {!values.file ? (
                                                            <p className=" flex items-center justify-center text-center bg-gray-200 border-2 border-gray-400 border-dashed p-4  w-full h-full">
                                                                Click to browse
                                                                or
                                                                <br />
                                                                drag and drop
                                                                your file
                                                            </p>
                                                        ) : (
                                                            <div className="flex felx-row justify-between  bg-gray-100 border-2 border-gray-300 border-dashed p-4  w-full ">
                                                                <p>
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
                                        render={(msg) => (
                                            <div className="text-center text-red-upschool text-sm md:text-base p-1">
                                                {msg}
                                            </div>
                                        )}
                                    />
                                </div>
                                <div
                                    className={`row-span-1 grid grid-cols-4 gap-4  p-2  w-full font-normal content-center`}
                                >
                                    <button
                                        type="submit"
                                        className="col-start-4 col-span-1 flex flex-1 flex-wrap items-center justify-center gap-x-0.5 m-1 p-1 bg-theme-color text-white h-12"
                                    >
                                        <span>Next</span>
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
                        </div>
                    </>
                )}
            </Formik>
        </>
    );
};
const FileUploadProcess = () => {
    return (
        <>
            <p>Upload File progress</p>
        </>
    );
};
const ImportProcess = () => {
    return (
        <>
            <p>ImportProcess</p>
        </>
    );
};
const InviteViaCSVFile = () => {
    const [selectComponenent, setSelectComponent] = useState<number>(0);
    const components = [
        <UploadFile setSelectComponent={setSelectComponent} />,
        <FileUploadProcess />,
        <ImportProcess />,
    ];

    return (
        <>
            <div className="flex  flex-col gap-3 w-full">
                <p className="font-semibold text-lg md:text-xl lg:text-2xl text-left w-full">
                    Import from CSV file
                </p>
                {components[selectComponenent]}
            </div>
        </>
    );
};

export default InviteViaCSVFile;
