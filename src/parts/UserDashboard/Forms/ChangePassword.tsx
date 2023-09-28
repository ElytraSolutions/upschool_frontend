import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

import { TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ChangePasswordSchema = yup.object().shape({
    newPassword: yup
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
        .oneOf([yup.ref('newPassword')], 'Password does not match'),
});

const InitialValues = {
    newPassword: '',
    password_confirmation: '',
};
const submitHandler = (data, onSubmitProps) => {
    // TODO implement logic for Change Password
    console.log(data);
    onSubmitProps.resetForm();
};

export const ChangePassword = () => {
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
        <div className="w-full">
            <div className="w-full h-full border border-theme-color/50 rounded-md  flex flex-col gap-2">
                <div className="p-2 flex items-center justify-start font-semibold">
                    <span className="text-lg md:text-xl lg:text-2xl">
                        Change Password
                    </span>
                </div>
                <div className="w-full h-[1px] bg-slate-400"></div>

                <div className="p-2 w-full">
                    <div className="w-full md:w-11/12 ">
                        <Formik
                            onSubmit={submitHandler}
                            initialValues={InitialValues}
                            validationSchema={ChangePasswordSchema}
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
                                        className="flex flex-col sm:grid sm:grid-cols-6 sm:grid-rows-3 gap-y-1 gap-x-2  p-0.5 "
                                    >
                                        {/* Password*/}
                                        <>
                                            <label
                                                className="sm:col-span-2  md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="newPassword_info"
                                            >
                                                New Password
                                            </label>
                                            <div className="sm:col-span-4 md:col-span-5 w-full">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    id="newPassword_info"
                                                    placeholder="at least 8 characters, with at least (1 uppercase, 1 lowercase, 1 number and 1 symbol)"
                                                    type={
                                                        showPassword
                                                            ? 'text'
                                                            : 'password'
                                                    }
                                                    hiddenLabel
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
                                                        style: {
                                                            borderRadius: '8px',
                                                            color: '#03014C',
                                                        },
                                                    }}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.newPassword}
                                                    name="newPassword"
                                                    error={
                                                        Boolean(
                                                            touched.newPassword,
                                                        ) &&
                                                        Boolean(
                                                            errors.newPassword,
                                                        )
                                                    }
                                                />
                                                {touched.newPassword &&
                                                errors.newPassword ? (
                                                    <ErrorMessage
                                                        name="newPassword"
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
                                        {/* Confirm Password*/}
                                        <>
                                            <label
                                                className="sm:col-span-2 md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold inline"
                                                htmlFor="confirmPassword_info"
                                            >
                                                Confirmation
                                            </label>
                                            <div className="sm:col-span-4 md:col-span-5 w-full">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    id="confirmPassword_info"
                                                    hiddenLabel
                                                    placeholder="Repeat new password"
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
                                                                        <VisibilityIcon />
                                                                    ) : (
                                                                        <VisibilityOffIcon />
                                                                    )}
                                                                </button>
                                                            </InputAdornment>
                                                        ),
                                                        style: {
                                                            borderRadius: '8px',
                                                            color: '#03014C',
                                                        },
                                                    }}
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
                                                />
                                                {touched.password_confirmation &&
                                                errors.password_confirmation ? (
                                                    <ErrorMessage
                                                        name="password_confirmation"
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
                                        {/* Save button */}
                                        <button
                                            type="submit"
                                            id="form3"
                                            className="sm:col-start-4 sm:col-span-3  md:col-start-5  md:col-span-2 px-4 md:px-8  py-2 md:py-3 w-full h-fit bg-theme-color text-white block  justify-self-end text-xs xm:text-base text-center"
                                        >
                                            Change Password
                                        </button>
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
