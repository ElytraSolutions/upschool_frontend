import { InputAdornment, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axiosInstance from '../../config/axios';

const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email('invalid email')
        .required('required')
        .max(255, 'Characters too long'),
    password: yup.string().required('Please enter a password'),
});

function Login() {
    const submitHandler = async (values: any, onSubmitProps: any) => {
        const csrfResp = await axiosInstance.get('/sanctum/csrf-cookie');
        axiosInstance.defaults.headers['X-XSRF-TOKEN'] =
            csrfResp.data.csrfToken;
        console.log(csrfResp);
        const resp = await axiosInstance.post('/login', values);
        console.log(resp.data);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    };
    const initialValues = {
        email: '',
        password: '',
    };
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword((oldState) => !oldState);
    };
    return (
        <div>
            <Formik
                onSubmit={submitHandler}
                initialValues={initialValues}
                validationSchema={registerSchema}
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
                        <div className="grid align-center w-11/12 h-[80vw] gap-4 p-2 m-2 border ">
                            <TextField
                                className="col-span-2"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={
                                    Boolean(touched.email) &&
                                    Boolean(errors.email)
                                }
                                helperText={touched.email && errors.email}
                            />
                            <TextField
                                className=" col-span-2"
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
                                helperText={touched.password && errors.password}
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="m-auto p-4 bg-theme-color text-white text-center rounded-md"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default Login;
