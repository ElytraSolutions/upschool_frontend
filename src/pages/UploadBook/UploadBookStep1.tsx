import { Formik } from 'formik';
import * as yup from 'yup';
import Dropzone from 'react-dropzone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { TextField } from '@mui/material';

const registerSchema = yup.object().shape({
    file: yup.string().required('required'),
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
        <Formik
            onSubmit={submitHandler}
            initialValues={oldValues}
            validationSchema={registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
            }) => (
                <>
                    {/* First step form */}
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`grid grid-cols-4 w-11/12 gap-4 p-2 ${
                                isLargeScreen ? 'm-2' : 'mx-2 my-0'
                            }`}
                        >
                            <TextField
                                className={`${
                                    isLargeScreen ? 'col-span-2' : 'col-span-4'
                                }`}
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="first_name"
                                error={
                                    Boolean(touched.firstName) &&
                                    Boolean(errors.firstName)
                                }
                                helperText={
                                    touched.firstName &&
                                    (errors.firstName as string)
                                }
                            />
                            <TextField
                                className={`col-span-${
                                    isLargeScreen ? '2' : '4'
                                }`}
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="last_name"
                                error={
                                    Boolean(touched.lastName) &&
                                    Boolean(errors.lastName)
                                }
                                helperText={
                                    touched.lastName &&
                                    (errors.lastName as string)
                                }
                            />

                            <TextField
                                className=" col-span-4"
                                type="email"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={
                                    Boolean(touched.email) &&
                                    Boolean(errors.email)
                                }
                                helperText={
                                    touched.email && (errors.email as string)
                                }
                            />
                            <div className="col-span-4  p-4 border bg-gray-100 rounded-b-lg text-gray-500 text-base font-light hover:border-black">
                                <Dropzone
                                    accept={{ 'application/pdf': ['.pdf'] }}
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
                                        setFieldValue('file', acceptedFile[0]);
                                    }}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div
                                                {...getRootProps()}
                                                className=" rounded-md overflow-hidden "
                                            >
                                                <input {...getInputProps()} />

                                                {!values.file ? (
                                                    <div className="">
                                                        <p className=" flex items-center justify-center text-center bg-gray-100 border-2 border-gray-300 border-dashed p-4  h-40 w-full">
                                                            Click to browse or{' '}
                                                            <br />
                                                            drag and drop your
                                                            pdf file
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div className="flex felx-row justify-between">
                                                        <h4>
                                                            {values.file?.name}
                                                        </h4>
                                                        <EditOutlinedIcon />
                                                    </div>
                                                )}
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                            </div>
                        </div>
                        <div
                            className={`grid grid-cols-4 gap-4  p-2 ${
                                isLargeScreen ? 'm-2 text-base' : 'm-0 text-sm'
                            } w-11/12 font-normal`}
                        >
                            <button
                                type="submit"
                                className="col-start-4 col-span-1 flex flex-1 flex-wrap items-center justify-center gap-x-0.5 m-1 p-1 bg-theme-color text-white h-12"
                            >
                                <span
                                    className={`${
                                        isLargeScreen ? 'text-xl' : 'text-sm'
                                    }`}
                                >
                                    Next
                                </span>
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
