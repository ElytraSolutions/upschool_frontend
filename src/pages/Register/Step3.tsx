import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const registerSchema = yup.object().shape({
    canvaAccount: yup.bool(),
    condition1: yup.bool().when('canvaAccount', {
        is: true,
        then: (schema) =>
            schema.oneOf([true], 'You need to accept the terms and conditions'),
        otherwise: (schema) => schema.oneOf([true, false]),
    }),
    conditi0n2: yup.bool().when('canvaAccount', {
        is: true,
        then: (schema) =>
            schema.oneOf([true], 'You need to accept the terms and conditions'),
        otherwise: (schema) => schema.oneOf([true, false]),
    }),
    condition3: yup
        .bool()
        .oneOf([true], 'You need to accept the terms and conditions'),
});

interface IStep3Props {
    oldValues: Record<string, any>;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
    backHandler: (values: any) => void;
}

export default function Step3({
    oldValues,
    submitHandler,
    backHandler,
}: IStep3Props) {
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
                    {/* Third step form */}
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-rows-5 w-full gap-1 mt-1">
                            <div className="row-span-2 flex flex-col flex-1 gap-5">
                                <h2 className=" text-sm xl:text-lg text-font-color">
                                    Would you like us to register you for a FREE
                                    Canva Pro Account
                                </h2>
                                <TextField
                                    className=""
                                    id="outlined-select-Canva-Account"
                                    select
                                    label=""
                                    defaultValue={true}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.canvaAccount}
                                    name="canvaAccount"
                                    error={
                                        Boolean(touched.canvaAccount) &&
                                        Boolean(errors.canvaAccount)
                                    }
                                    helperText={
                                        touched.canvaAccount &&
                                        (errors.canvaAccount as string)
                                    }
                                >
                                    <MenuItem value="true">{'Yes'}</MenuItem>
                                    <MenuItem value="false">{'No'}</MenuItem>
                                </TextField>
                            </div>

                            <label className="row-span-1 flex flex-1 justify-start gap-x-4 items-center">
                                <Field
                                    type="checkbox"
                                    name="condition1"
                                    error={
                                        touched.condition1 && errors.condition1
                                    }
                                    helperText={
                                        touched.condition1 && errors.condition1
                                    }
                                />
                                I acknowledge and accept that my personal
                                details (name,email) may be visible to Upschool
                                users registered with Canva.
                            </label>
                            <label className="row-span-1 flex flex-1 justify-start gap-x-4  items-center">
                                <Field
                                    type="checkbox"
                                    name="condition2"
                                    error={
                                        touched.condition2 && errors.condition2
                                    }
                                    helperText={
                                        touched.condition2 && errors.condition2
                                    }
                                />
                                <div>
                                    I acknowledge that should i not wish to have
                                    my details visible to others, I can instead
                                    sing up for Canva basic <u>here</u>
                                </div>
                            </label>
                            <label className="row-span-1 flex flex-1 justify-start gap-x-4  items-center">
                                <Field
                                    type="checkbox"
                                    name="condition3"
                                    error={
                                        touched.condition3 && errors.condition3
                                    }
                                    helperText={
                                        touched.condition3 && errors.condition3
                                    }
                                />
                                <div>
                                    I agree to Upschool's{' '}
                                    <u>Terms and Conditions</u> and{' '}
                                    <u>Privacy Policy</u>
                                </div>
                            </label>
                        </div>
                        <div className="grid grid-cols-4 gap-4  px-2 mx-2 w-full font-normal text-base">
                            <button
                                className="col-start-1 col-span-1 flex flex-1 flex-wrap items-center justify-start gap-x-0.5 m-1 p-1 h-12"
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
                                className="col-start-4 col-span-1 flex flex-1 flex-wrap items-center justify-center gap-x-0.5 m-1 p-1 bg-theme-color text-white h-12"
                                type="submit"
                            >
                                <span className="text-xl">Next</span>
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
