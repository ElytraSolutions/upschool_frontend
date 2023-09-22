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
                        <div className="flex w-full flex-col">
                            <div className="flex  w-full items-center justify-center rounded-t-lg bg-stone-50 p-4 ">
                                <div className="flex  w-full items-center justify-center  rounded-full border border-black bg-red-upschool px-4 py-2">
                                    <p className="w-full truncate text-center text-lg text-white  md:text-xl lg:text-2xl">
                                        Download sample CSV File
                                    </p>
                                </div>
                            </div>
                            <form
                                onSubmit={handleSubmit}
                                className="grid grid-rows-4"
                            >
                                <div className="row-span-3 flex h-full flex-col justify-center rounded-b-lg border bg-gray-200 p-2 hover:border-black ">
                                    <div className="h-full w-full p-4 text-base font-light text-gray-500">
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
                                                            <div className="flex-row flex w-full  justify-between border-2 border-dashed border-gray-300 bg-gray-100  p-4 ">
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
                                            <div className="p-1 text-center text-sm text-red-upschool md:text-base">
                                                {msg}
                                            </div>
                                        )}
                                    />
                                </div>
                                <div
                                    className={`row-span-1 grid w-full grid-cols-4  content-center  gap-4 p-2 font-normal`}
                                >
                                    <button
                                        type="submit"
                                        className="col-span-1 col-start-4 m-1 flex h-12 flex-1 flex-wrap items-center justify-center gap-x-0.5 bg-theme-color p-1 text-white"
                                    >
                                        <span>Next</span>
                                        <span className="hidden sm:inline">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4"
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
            <div className="flex  w-full flex-col gap-3">
                <p className="w-full text-left text-lg font-semibold md:text-xl lg:text-2xl">
                    Import from CSV file
                </p>
                {components[selectComponenent]}
            </div>
        </>
    );
};

export default InviteViaCSVFile;
