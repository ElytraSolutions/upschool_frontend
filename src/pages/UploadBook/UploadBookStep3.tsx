import { Formik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { countries } from '../../data/countries';

const uploadBookSchema = yup.object().shape({
    first_name: yup
        .string()
        .required('required')
        .max(255, 'Characters too long'),
    last_name: yup
        .string()
        .required('required')
        .max(255, 'Characters too long'),
    school_name: yup.string().max(255, 'Characters too long'),
    email: yup
        .string()
        .email('invalid email')
        .required('required')
        .max(255, 'Characters too long'),
    country: yup.string().required('required').max(255, 'Characters too long'),
    date_of_birth: yup.date().required('required'),
    book_title: yup
        .string()
        .required('required')
        .max(255, 'Characters too long'),
    book_description: yup.string().required('required'),
    canva_book_link: yup
        .string()
        .required('required')
        .max(255, 'Characters too long'),
});

interface IStep3Props {
    isLargeScreen: boolean;
    oldValues: Record<string, any>;
    backHandler: (values: any) => void;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
}
export function UploadBookStep3({
    isLargeScreen,
    oldValues,
    backHandler,
    submitHandler,
}: IStep3Props) {
    return (
        <div className=" h-full xm:h-[565px] overflow-y-scroll overflow-x-hidden">
            <Formik
                onSubmit={submitHandler}
                initialValues={oldValues}
                validationSchema={uploadBookSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <>
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-2 space-x-4 space-y-4 p-3 "
                        >
                            <div className="col-span-2 "></div>
                            <div className="col-span-2 flex items-center justify-start w-fit">
                                <h1 className="text-font-color text-lg md:text-xl xl:text-2xl  font-medium lg:font-semibold">
                                    About Your Book!
                                </h1>
                            </div>
                            <TextField
                                className="col-span-2"
                                type="text"
                                label="Book Title"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.book_title}
                                name="book_title"
                                error={
                                    Boolean(touched.book_title) &&
                                    Boolean(errors.book_title)
                                }
                                helperText={
                                    touched.book_title &&
                                    (errors.book_title as string)
                                }
                            />
                            <TextField
                                className="col-span-2"
                                type="text"
                                label="Book Description"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.book_description}
                                multiline
                                rows={4}
                                name="book_description"
                                error={
                                    Boolean(touched.book_description) &&
                                    Boolean(errors.book_description)
                                }
                                helperText={
                                    touched.book_description &&
                                    (errors.book_description as string)
                                }
                            />
                            <TextField
                                className="col-span-2"
                                type="text"
                                label="Canva Book Link"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.canva_book_link}
                                name="canva_book_link"
                                error={
                                    Boolean(touched.canva_book_link) &&
                                    Boolean(errors.canva_book_link)
                                }
                                helperText={
                                    touched.canva_book_link &&
                                    (errors.canva_book_link as string)
                                }
                            />

                            <div className="col-span-2 flex items-center justify-start">
                                <h1 className="text-font-color text-sm lg:text-lg font-medium underline underline-offset-2">
                                    View how to get the link from Canva
                                </h1>
                            </div>
                            <TextField
                                className=" col-span-2"
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
                            <div className="col-span-2 flex items-center justify-start">
                                <h1 className="text-font-color text-lg md:text-xl 2xl:text-2xl  font-medium lg:font-semibold">
                                    About You
                                </h1>
                            </div>
                            <TextField
                                className={`${
                                    isLargeScreen ? 'col-span-1' : 'col-span-2'
                                }`}
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.first_name}
                                name="first_name"
                                error={
                                    Boolean(touched.first_name) &&
                                    Boolean(errors.first_name)
                                }
                                helperText={
                                    touched.first_name &&
                                    (errors.first_name as string)
                                }
                            />
                            <TextField
                                className={`${
                                    isLargeScreen ? 'col-span-1' : 'col-span-2'
                                }`}
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.last_name}
                                name="last_name"
                                error={
                                    Boolean(touched.last_name) &&
                                    Boolean(errors.last_name)
                                }
                                helperText={
                                    touched.last_name &&
                                    (errors.last_name as string)
                                }
                            />
                            <TextField
                                className="col-span-2"
                                type="text"
                                label="Your School Name (Optional)"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.school_name}
                                name="school_name"
                                error={
                                    Boolean(touched.school_name) &&
                                    Boolean(errors.school_name)
                                }
                                helperText={
                                    touched.school_name &&
                                    (errors.school_name as string)
                                }
                            />

                            <TextField
                                className={`${
                                    isLargeScreen ? 'col-span-1' : 'col-span-2'
                                }`}
                                id="outlined-select-country"
                                select
                                label="Select your country"
                                defaultValue=""
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.country}
                                name="country"
                                error={
                                    Boolean(touched.country) &&
                                    Boolean(errors.country)
                                }
                                helperText={
                                    touched.country &&
                                    (errors.country as string)
                                }
                                SelectProps={{
                                    MenuProps: {
                                        style: {
                                            maxHeight: '40%',
                                            maxWidth: '20%',
                                        }, // Set your desired max height and max width for dropdown menu
                                    },
                                }}
                            >
                                {countries.map((country) => (
                                    <MenuItem
                                        key={country.name}
                                        value={country.name}
                                    >
                                        {country.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            {/* TODO shows error in console for inputting date of birth */}
                            <TextField
                                className={`${
                                    isLargeScreen ? 'col-span-1' : 'col-span-2'
                                }`}
                                type="date"
                                label="Date of Birth"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.date_of_birth}
                                name="date_of_birth"
                                error={
                                    Boolean(touched.date_of_birth) &&
                                    Boolean(errors.date_of_birth)
                                }
                                helperText={
                                    touched.date_of_birth &&
                                    (errors.date_of_birth as string)
                                }
                            />

                            <div className="col-span-2 grid grid-cols-4 gap-4  p-2 pr-3  w-full font-normal text-base">
                                {/* TODO decide back button */}
                                <button
                                    className=" invisible col-start-1 col-span-1 flex flex-1 flex-wrap items-center justify-start gap-x-0.5 m-1 p-1 h-12"
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
                            <div className="col-span-2"></div>
                        </form>
                    </>
                )}
            </Formik>
        </div>
    );
}
