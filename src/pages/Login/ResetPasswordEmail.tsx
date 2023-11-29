import { Formik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import axiosInstance from '../../config/Axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
// import axiosInstance from '../../config/Axios';

const ResetPasswordEmailSchema = yup.object().shape({
    email: yup
        .string()
        .email('invalid email')
        .required('required')
        .max(255, 'Characters too long'),
});

const initialValuesResetPasswordEmail = {
    email: '',
};
const submitHandler = async (_values: any, onSubmitProps: any) => {
    const { email } = _values;
    try {
        const resp = await axiosInstance.post('/auth/forgot-password/', {
            email,
        });
        if (resp.status === 200) {
            toast.success(
                resp.data.status || 'Email reset link sent successfully',
            );
        } else {
            toast.error(resp.data.message || 'Something went wrong');
        }
    } catch (err) {
        const resp = (err as any).response.data;
        toast.error(resp.message || 'Something went wrong');
    }

    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
};
export default function ResetPasswordEmail() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Password Reset | Upschool';
    }, []);
    return (
        <>
            <div className="  w-full h-fit bg-gray-200 flex justify-center items-start py-2 sm:py-4 md:py-6 xl:py-10">
                <div className="flex justify-center bg-white w-10/12 md:w-2/3 lg:w-[768px]  ">
                    <div className="w-11/12 flex flex-col ">
                        <div className="m-4">
                            <h3 className="text-font-color font-normal mt-2 text-sm sm:text-base md:text-xl ">
                                Instructions to reset your password will be sent
                                to the email address associated with your
                                account.
                            </h3>
                        </div>
                        <div className=" px-2  mx-2 mb-2 ">
                            <h1 className="text-font-color font-semibold text-sm xs:text-base md:text-xl  font-lexend">
                                Please Enter Your Email Address
                            </h1>
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
                                        <div className="grid grid-rows-2 grid-cols-2 w-full">
                                            <div className="row-span-1 col-span-2 ">
                                                <TextField
                                                    className="w-full"
                                                    type="email"
                                                    label="Email"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.email}
                                                    name="email"
                                                    error={
                                                        Boolean(
                                                            touched.email,
                                                        ) &&
                                                        Boolean(errors.email)
                                                    }
                                                    helperText={
                                                        touched.email &&
                                                        (errors.email as string)
                                                    }
                                                />
                                                {isSubmitting && (
                                                    <div className="text-lime-600 mt-2">
                                                        <p>
                                                            Sending password
                                                            reset link to your
                                                            email
                                                            <br />
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="row-span-1 col-span-2 xm:col-span-1 mt-2 my-4 m-auto p-4 bg-theme-color text-white text-center  w-fit xm:w-full  overflow-hidden"
                                            >
                                                <span className="inline-block  text-sm md:text-base">
                                                    Reset Password
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
