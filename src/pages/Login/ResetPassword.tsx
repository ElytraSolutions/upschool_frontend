import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import axiosInstance from '../../config/Axios';
import { toast } from 'react-toastify';
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
    password_confirmation: yup
        .string()
        .required('Please re-type your password')
        // use oneOf to match one of the values inside the array.
        // use "ref" to get the value of passwrod.
        .oneOf([yup.ref('password')], 'Passwords does not match'),
});

const initialValuesResetPasswordEmail = {
    password: '',
    password_confirmation: '',
};
export default function ResetPassword() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { token } = useParams();
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
    const submitHandler = async (_values: any, onSubmitProps: any) => {
        const email = searchParams.get('email');
        const data = {
            ..._values,
            token,
            email,
        };
        try {
            const resp = await axiosInstance.post('/auth/password-reset', data);
            if (resp.status === 200) {
                toast.success(
                    resp.data.status || 'Password has been reset successfully',
                );
                navigate('/login');
            } else {
                toast.error(resp.data.message || 'Something went wrong');
            }
        } catch (err) {
            const resp = err.response.data;
            toast.error(resp.message || 'Something went wrong');
        }
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    };
    return (
        <>
            <div className="  w-full h-fit bg-gray-200 flex justify-center items-start py-3 sm:py-4 md:py-6 xl:py-10">
                <div className="flex justify-center bg-white w-10/12 md:w-2/3 lg:w-[768px] ">
                    <div className="w-11/12 flex flex-col gap-1">
                        <div className=" px-2 py-0.5 mx-2 my-0.5 md:p-2 ">
                            <h1 className="text-font-color font-semibold text-base md:text-xl  xl:text-2xl font-lexend">
                                Reset Your Upschool.co Password
                            </h1>
                        </div>
                        <div className=" px-2 py-0.5 mx-2 my-0.5 md:p-2 ">
                            <h3 className="text-font-color font-normal text-base md:text-lg  xl:text-xl">
                                select a new password, minimum 8 characters
                            </h3>
                        </div>
                        <div className=" px-2 py-0.5 mx-2 my-0.5 md:p-2 ">
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
                                                value={
                                                    values.password_confirmation
                                                }
                                                name="password_confirmation"
                                                error={
                                                    Boolean(
                                                        touched.password_confirmation,
                                                    ) &&
                                                    Boolean(
                                                        errors.password_confirmation,
                                                    )
                                                }
                                                helperText={
                                                    touched.password_confirmation &&
                                                    (errors.password_confirmation as string)
                                                }
                                            />
                                            {isSubmitting && (
                                                <div className="text-lime-600 -mt-2">
                                                    <p>
                                                        Resetting your password
                                                        <br />
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="-mt-4 row-span-1 col-span-2 xm:col-span-1 m-auto p-4 bg-theme-color text-white text-center w-fit xm:w-full  overflow-hidden"
                                        >
                                            <span className=" text-sm md:text-base">
                                                Reset password
                                            </span>
                                        </button>
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
