import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const registerSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('required')
        .max(255, 'Characters too long'),
    lastName: yup.string().required('required').max(255, 'Characters too long'),
    email: yup
        .string()
        .email('invalid email')
        .required('required')
        .max(255, 'Characters too long'),
    password: yup
        .string()
        .required('Please enter a password')
        // check minimum characters
        .min(8, 'Password must have at least 8 characters')
        .max(255, 'Characters too long')
        // different error messages for different requirements
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
    confirmPassword: yup
        .string()
        .required('Please re-type your password')
        // use oneOf to match one of the values inside the array.
        // use "ref" to get the value of passwrod.
        .oneOf([yup.ref('password')], 'Passwords does not match'),
});

interface IStep1Props {
    isLargeScreen: boolean;
    oldValues: Record<string, any>;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
}
export default function Step1({
    isLargeScreen,
    oldValues,
    submitHandler,
}: IStep1Props) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleTogglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword((oldState) => !oldState);
    };
    const handleToggleConfirmPasswordVisibility = (e) => {
        e.preventDefault();
        setShowConfirmPassword((oldState) => !oldState);
    };
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
                                name="firstName"
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
                                name="lastName"
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
                            <TextField
                                className={`col-span-${
                                    isLargeScreen ? '2' : '4'
                                }`}
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <button
                                                onClick={
                                                    handleTogglePasswordVisibility
                                                }
                                            >
                                                {showPassword ? (
                                                    <VisibilityOffIcon />
                                                ) : (
                                                    <VisibilityIcon />
                                                )}
                                            </button>
                                        </InputAdornment>
                                    ),
                                }}
                                label="Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={
                                    Boolean(touched.password) &&
                                    Boolean(errors.password)
                                }
                                helperText={
                                    touched.password &&
                                    (errors.password as string)
                                }
                            />
                            <TextField
                                className={`col-span-${
                                    isLargeScreen ? '2' : '4'
                                }`}
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <button
                                                onClick={
                                                    handleToggleConfirmPasswordVisibility
                                                }
                                            >
                                                {showConfirmPassword ? (
                                                    <VisibilityOffIcon />
                                                ) : (
                                                    <VisibilityIcon />
                                                )}
                                            </button>
                                        </InputAdornment>
                                    ),
                                }}
                                label="Confirm password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.confirmPassword}
                                name="confirmPassword"
                                error={
                                    Boolean(touched.confirmPassword) &&
                                    Boolean(errors.confirmPassword)
                                }
                                helperText={
                                    touched.confirmPassword &&
                                    (errors.confirmPassword as string)
                                }
                            />
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
