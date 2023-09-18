import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { countries } from '../../../data/countries';

const PersonalInformationSchema = yup.object().shape({
    first_name: yup
        .string()
        .required('required')
        .max(255, 'Characters too long'),
    last_name: yup
        .string()
        .required('required')
        .max(255, 'Characters too long'),
    email: yup
        .string()
        .email('invalid email')
        .required('required')
        .max(255, 'Characters too long'),
    country: yup.string().required('required').max(255, 'Characters too long'),
    date_of_birth: yup.date().required('required'),
});

const InitialValues = {
    first_name: '',
    last_name: '',
    email: '',
    country: '',
    date_of_birth: '',
};

export const TeacherPersonalInformation = () => {
    const submitHandler = (data, onSubmitProps) => {
        console.log(data);
        onSubmitProps.resetForm();
    };
    return (
        <div className="w-full">
            <div className="w-full h-full border border-theme-color/50 rounded-md  flex flex-col gap-2 divide-y divide-slate-400">
                <div className="p-2 pb-0 flex items-center justify-start font-semibold">
                    <span className="text-lg md:text-xl lg:text-2xl">
                        Personal Information
                    </span>
                </div>
                <div className="p-2 w-full">
                    <div className="w-full md:w-11/12 ">
                        <Formik
                            onSubmit={submitHandler}
                            initialValues={InitialValues}
                            validationSchema={PersonalInformationSchema}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleBlur,
                                handleChange,
                                handleSubmit,
                                //setFieldValue,
                            }) => (
                                <>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="grid grid-cols-6 grid-rows-9 gap-y-1 gap-x-2 "
                                    >
                                        {/* First Name */}
                                        <>
                                            <label
                                                className="col-span-2  md:col-span-1 p-1 w-full text-left cursor-pointer"
                                                htmlFor="firstName"
                                            >
                                                First Name
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
                                                <input
                                                    id="firstName"
                                                    type="text"
                                                    name="first_name"
                                                    className={`w-full focus:outline-none bg-white border rounded-md py-1 px-3  ${
                                                        touched.first_name &&
                                                        errors.first_name
                                                            ? 'border-red-upschool'
                                                            : 'border-theme-color/50'
                                                    }`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.first_name}
                                                />
                                                {touched.first_name &&
                                                errors.first_name ? (
                                                    <ErrorMessage
                                                        name="first_name"
                                                        render={(
                                                            msg: string,
                                                        ) => (
                                                            <div className="text-left text-xs text-red-upschool p-1">
                                                                {msg}
                                                            </div>
                                                        )}
                                                    />
                                                ) : (
                                                    <div className="h-6 w-full bg-inherit"></div>
                                                )}
                                            </div>
                                        </>

                                        {/* Last Name */}
                                        <>
                                            <label
                                                className="col-span-2  md:col-span-1 p-1 w-full text-left cursor-pointer"
                                                htmlFor="lastName"
                                            >
                                                Last Name
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
                                                <input
                                                    id="lasttName"
                                                    type="text"
                                                    name="last_name"
                                                    className={`w-full focus:outline-none bg-white border rounded-md py-1 px-3  ${
                                                        touched.last_name &&
                                                        errors.last_name
                                                            ? 'border-red-upschool'
                                                            : 'border-theme-color/50'
                                                    }`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.last_name}
                                                />
                                                {touched.last_name &&
                                                errors.last_name ? (
                                                    <ErrorMessage
                                                        name="last_name"
                                                        render={(
                                                            msg: string,
                                                        ) => (
                                                            <div className="text-left text-xs text-red-upschool p-1">
                                                                {msg}
                                                            </div>
                                                        )}
                                                    />
                                                ) : (
                                                    <div className="h-6 w-full bg-inherit"></div>
                                                )}
                                            </div>
                                        </>

                                        {/* Email */}
                                        <>
                                            <label
                                                className="col-span-2 md:col-span-1 p-1 w-full text-left cursor-pointer"
                                                htmlFor="email"
                                            >
                                                Email Address
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    className={`w-full focus:outline-none bg-white border rounded-md py-1 px-3  ${
                                                        touched.email &&
                                                        errors.email
                                                            ? 'border-red-upschool'
                                                            : 'border-theme-color/50'
                                                    }`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                />
                                                {touched.email &&
                                                errors.email ? (
                                                    <ErrorMessage
                                                        name="email"
                                                        render={(
                                                            msg: string,
                                                        ) => (
                                                            <div className="text-left text-xs text-red-upschool p-1">
                                                                {msg}
                                                            </div>
                                                        )}
                                                    />
                                                ) : (
                                                    <div className="h-6 w-full bg-inherit"></div>
                                                )}
                                            </div>
                                        </>

                                        {/*Date of Birth */}
                                        <>
                                            <label
                                                className="col-span-2 md:col-span-1 p-1 w-full text-left cursor-pointer"
                                                htmlFor="dob"
                                            >
                                                Date of Birth
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
                                                <input
                                                    id="dob"
                                                    type="date"
                                                    name="date_of_birth"
                                                    className={`w-full focus:outline-none bg-white border rounded-md py-1 px-3  ${
                                                        touched.date_of_birth &&
                                                        errors.date_of_birth
                                                            ? 'border-red-upschool'
                                                            : 'border-theme-color/50'
                                                    }`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.date_of_birth}
                                                />
                                                {touched.date_of_birth &&
                                                errors.date_of_birth ? (
                                                    <ErrorMessage
                                                        name="date_of_birth"
                                                        render={(
                                                            msg: string,
                                                        ) => (
                                                            <div className="text-left text-xs text-red-upschool p-1">
                                                                {msg}
                                                            </div>
                                                        )}
                                                    />
                                                ) : (
                                                    <div className="h-6 w-full bg-inherit"></div>
                                                )}
                                            </div>
                                        </>
                                        {/*Country */}
                                        <>
                                            <label
                                                className="col-span-2 md:col-span-1 p-1 w-full text-left cursor-pointer"
                                                htmlFor="country"
                                            >
                                                Country
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
                                                <select
                                                    id="country"
                                                    name="country"
                                                    className={`w-full focus:outline-none bg-white border rounded-md py-1 px-3 ${
                                                        touched.country &&
                                                        errors.country
                                                            ? 'border-red-upschool'
                                                            : 'border-theme-color/50'
                                                    }`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.country}
                                                >
                                                    <option value=""></option>
                                                    {countries.map(
                                                        (country, index) => (
                                                            <option
                                                                className="text-sm"
                                                                key={index}
                                                                value={
                                                                    country.name
                                                                }
                                                            >
                                                                {country.name}
                                                            </option>
                                                        ),
                                                    )}
                                                </select>
                                                {touched.country &&
                                                errors.country ? (
                                                    <ErrorMessage
                                                        name="country"
                                                        render={(
                                                            msg: string,
                                                        ) => (
                                                            <div className="text-left text-xs text-red-upschool p-1">
                                                                {msg}
                                                            </div>
                                                        )}
                                                    />
                                                ) : (
                                                    <div className="h-6 w-full bg-inherit"></div>
                                                )}
                                            </div>
                                        </>
                                    </form>
                                </>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};
