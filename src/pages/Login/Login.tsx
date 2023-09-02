import { InputAdornment, TextField } from '@mui/material';
import { Formik, Field } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axiosInstance from '../../config/Axios';
import useScreenWidth from '../../hooks/useScreenWidth';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';

const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email.')
        .required('required')
        .max(255, 'Email cannot be more than 255 characters.'),
    password: yup.string().required('Please enter your password.'),
    remember: yup.bool().oneOf([true, false]),
});

const initialValuesLogin = {
    email: '',
    password: '',
    remember: false,
};

const Login = () => {
    const navigate = useNavigate();
    const { user, refresh } = useUser();
    const submitHandler = async (values: any, onSubmitProps: any) => {
        const csrfResp = await axiosInstance.get('/sanctum/csrf-cookie');
        axiosInstance.defaults.headers['X-XSRF-TOKEN'] =
            csrfResp.data.csrfToken;
        const resp = await axiosInstance.post('/auth/login', values);
        onSubmitProps.setSubmitting(false);
        if (resp.status === 200 && resp.data.status === 'success') {
            refresh().then(() => navigate('/'));
            onSubmitProps.resetForm();
        }
    };
    const { isLargeScreen } = useScreenWidth();
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword((oldState) => !oldState);
    };
    if (user?.id) {
        return <Navigate to="/" />;
    }
    return (
        <div className="relative flex flex-row justify-center items-center bg-gray-200 min-h-[90vh] py-12">
            <div className="w-[80vw] tab:w-[768px] bg-white flex justify-center items-center min-h-[80vh]  ">
                <div className="w-11/12 max-h-[90%]">
                    <div className="  mt-0.5 md:mt-2">
                        <h1 className="text-2xl font-bold text-font-color  px-2 py-0.5 mx-2 my-0.5 md:p-2 md:m-2">
                            Welcome Back to Upschool.co
                        </h1>
                        <h3 className="text-font-color font-normal px-2 py-0.5 mx-2 my-0.5 md:p-2 md:m-2">
                            Sign in to continue to your account
                        </h3>
                        <div className=" grid grid-cols-4 gap-y-2 gap-x-4   px-2 mx-2 w-full">
                            <button
                                className={`${
                                    isLargeScreen
                                        ? 'col-span-2 justify-center'
                                        : 'col-span-4 justify-start pl-2'
                                } flex flex-wrap  gap-1 justify-center items-center border border-font-color p-1 rounded-md`}
                            >
                                <span>
                                    <svg
                                        className={`${
                                            isLargeScreen
                                                ? 'w-8 h-8 '
                                                : 'w-6 h-6'
                                        } `}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                        fill="#FFC107"
                                    >
                                        <path
                                            fill="#FFC107"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                        />
                                        <path
                                            fill="#FF3D00"
                                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                        />
                                        <path
                                            fill="#4CAF50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                        />
                                        <path
                                            fill="#1976D2"
                                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                        />
                                    </svg>
                                </span>
                                <span className="text-font-color">
                                    Continue with Google
                                </span>
                            </button>
                            <button
                                className={`${
                                    isLargeScreen
                                        ? 'col-span-2 justify-center'
                                        : 'col-span-4 justify-start pl-2'
                                } flex flex-wrap  gap-1 justify-center items-center border border-font-color p-1 rounded-md`}
                            >
                                <span>
                                    <svg
                                        className={`${
                                            isLargeScreen
                                                ? 'w-8 h-8 '
                                                : 'w-6 h-6'
                                        }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                        fill="url(#CXanuwD9EGkBgTn76_1mxa)"
                                    >
                                        <linearGradient
                                            id="CXanuwD9EGkBgTn76_1mxa"
                                            x1="9.993"
                                            x2="40.615"
                                            y1="-299.993"
                                            y2="-330.615"
                                            gradientTransform="matrix(1 0 0 -1 0 -290)"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset="0"
                                                stopColor="#2aa4f4"
                                            />
                                            <stop
                                                offset="1"
                                                stopColor="#007ad9"
                                            />
                                        </linearGradient>
                                        <path
                                            fill="url(#CXanuwD9EGkBgTn76_1mxa)"
                                            d="M24,4C12.954,4,4,12.954,4,24c0,10.028,7.379,18.331,17.004,19.777	C21.981,43.924,22.982,41,24,41c0.919,0,1.824,2.938,2.711,2.818C36.475,42.495,44,34.127,44,24C44,12.954,35.046,4,24,4z"
                                        />
                                        <path
                                            d="M27.707,21.169c0-1.424,0.305-3.121,1.757-3.121h4.283l-0.001-5.617l-0.05-0.852l-0.846-0.114	c-0.608-0.082-1.873-0.253-4.206-0.253c-5.569,0-8.636,3.315-8.636,9.334v2.498H15.06v7.258h4.948V43.6	C21.298,43.861,22.633,44,24,44c1.268,0,2.504-0.131,3.707-0.357V30.301h5.033l1.122-7.258h-6.155V21.169z"
                                            opacity=".05"
                                        />
                                        <path
                                            d="M27.207,21.169c0-1.353,0.293-3.621,2.257-3.621h3.783V12.46l-0.026-0.44l-0.433-0.059	c-0.597-0.081-1.838-0.249-4.143-0.249c-5.323,0-8.136,3.055-8.136,8.834v2.998H15.56v6.258h4.948v13.874	C21.644,43.876,22.806,44,24,44c1.094,0,2.16-0.112,3.207-0.281V29.801h5.104l0.967-6.258h-6.072V21.169z"
                                            opacity=".05"
                                        />
                                        <path
                                            fill="#fff"
                                            d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46	c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.475	C21.988,43.923,22.981,44,24,44c0.921,0,1.82-0.062,2.707-0.182V29.301z"
                                        />
                                    </svg>
                                </span>
                                <span className="text-font-color">
                                    Continue with Facebook
                                </span>
                            </button>
                            <div
                                className={`col-span-4  ${
                                    isLargeScreen ? 'my-2' : 'my-0.5'
                                } flex flex-1 gap-2 items-center w-full`}
                            >
                                <div className=" border border-[#DDD2D2] flex-1  h-0"></div>
                                <div className="text-font-color">or</div>
                                <div className=" border border-[#DDD2D2] flex-1 h-0"></div>
                            </div>
                        </div>
                    </div>
                    <Formik
                        onSubmit={submitHandler}
                        initialValues={initialValuesLogin}
                        validationSchema={LoginSchema}
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
                                <div className="grid grid-rows-4 w-full gap-y-4 px-2 mx-2 py-0.5">
                                    <TextField
                                        className="row-span-1"
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
                                            touched.email &&
                                            (errors.email as string)
                                        }
                                    />
                                    <TextField
                                        className="row-span-1 !mt-2"
                                        type={
                                            showPassword ? 'text' : 'password'
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
                                    <label className="row-span-1 flex flex-1 justify-start gap-x-4 items-center">
                                        <Field
                                            type="checkbox"
                                            name="remember"
                                        />
                                        Keep me signed in until I sign out
                                    </label>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className=" row-span-1 m-auto p-4 bg-theme-color text-white text-center w-full"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                    <div className="flex flex-col w-full items-start justify-around text-font-color gap-y-1 px-2 mx-2 mt-3">
                        <div className=" font-semibold">
                            <NavLink to="/resetpasswordemail">
                                Forgot Password?
                            </NavLink>
                        </div>
                        <div>
                            Dont't have an Upschool account yet?
                            <span className="text-red-500 inline-block pl-1">
                                <NavLink to="/register">Sign up</NavLink>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
