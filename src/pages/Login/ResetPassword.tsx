import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import axiosInstance from '../../config/Axios';

const ResetPasswordEmailSchema = yup.object().shape({
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

const initialValuesResetPasswordEmail = {
    password: '',
    confirmPassword: '',
};
const submitHandler = async (_values: any, onSubmitProps: any) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
};
export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleTogglePasswordVisibility = (
        e: React.MouseEvent<HTMLButtonElement>,
    ) => {
        e.preventDefault();
        setShowPassword((oldState) => !oldState);
    };
    const handleToggleConfirmPasswordVisibility = (
        e: React.MouseEvent<HTMLButtonElement>,
    ) => {
        e.preventDefault();
        setShowConfirmPassword((oldState) => !oldState);
    };
    return (
        <>
            <div className="  w-full h-[80vh] bg-gray-300 flex justify-center items-start">
                <div className="flex justify-center bg-white w-10/12 md:w-2/3 lg:w-[768px] h-2/3 md:h-3/5 lg:h-[60%] mt-10">
                    <div className="w-11/12 h-[90%] flex flex-col gap-4 my-1 sm:my-2 md:my-3 lg:my-6">
                        <div className=" px-2 py-0.5 mx-2 my-0.5 md:p-2 md:m-2">
                            <h1 className="text-font-color font-semibold text-base xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                Reset Your Upschool.co Password
                            </h1>
                        </div>
                        <div className=" px-2 py-0.5 mx-2 my-0.5 md:p-2 md:m-2">
                            <h3 className="text-font-color font-normal text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl">
                                select a new password, minimum 8 characters
                            </h3>
                        </div>
                        <div className=" px-2 py-0.5 mx-2 my-0.5 md:p-2 md:m-2">
                            <Formik
                                onSubmit={submitHandler}
                                initialValues={initialValuesResetPasswordEmail}
                                validationSchema={ResetPasswordEmailSchema}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                    isSubmitting,
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid grid-rows-3 grid-cols-2 w-full gap-y-5 py-0.5">
                                            <TextField
                                                className="row-span-1 col-span-2"
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <button
                                                                onClick={
                                                                    handleTogglePasswordVisibility
                                                                }
                                                            >
                                                                {showPassword ? (
                                                                    <VisibilityIcon />
                                                                ) : (
                                                                    <VisibilityOffIcon />
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
                                                className="row-span-1 col-span-2"
                                                type={
                                                    showConfirmPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
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
                                                    Boolean(
                                                        touched.confirmPassword,
                                                    ) &&
                                                    Boolean(
                                                        errors.confirmPassword,
                                                    )
                                                }
                                                helperText={
                                                    touched.confirmPassword &&
                                                    (errors.confirmPassword as string)
                                                }
                                            />
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className=" row-span-1 col-span-1 m-auto p-4 bg-theme-color text-white text-center w-full  overflow-hidden"
                                            >
                                                <span className="inline-block  text-xs xs:text-sm md:text-base">
                                                    Reset and Login
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
