import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react';

const registerSchema = yup.object().shape({
    canvaAccount: yup.string(),
    condition1: yup.bool().when('canvaAccount', {
        is: 'true',
        then: (schema) =>
            schema.oneOf([true], 'You need to accept the terms and conditions'),
        otherwise: (schema) => schema.oneOf([true, false]),
    }),
    condition2: yup.bool().when('canvaAccount', {
        is: 'true',
        then: (schema) =>
            schema.oneOf([true], 'You need to accept the terms and conditions'),
        otherwise: (schema) => schema.oneOf([true, false]),
    }),
    condition3: yup
        .bool()
        .oneOf(
            [true],
            `You need to accept the 'terms and conditions' and 'privacy policy'`,
        ),
});

interface IStep3Props {
    oldValues: Record<string, any>;
    submitHandler: (values: any, { resetForm }) => Promise<void>;
    backHandler: (values: any) => void;
}

export default function Step3({
    oldValues,
    submitHandler,
    backHandler,
}: IStep3Props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                isSubmitting,
            }) => (
                <>
                    {/* Third step form */}
                    <form
                        onSubmit={handleSubmit}
                        className="w-full h-fit md:h-full flex flex-col"
                    >
                        <div className="grid grid-rows-6 w-full gap-1">
                            <div className="row-span-2 flex flex-col flex-1 justify-center h-fit pb-4 pt-2">
                                <h2 className=" text-sm xl:text-lg text-font-color italic mb-5">
                                    Would you like us to register you for a FREE
                                    Canva Pro Account
                                </h2>
                                <TextField
                                    size="small"
                                    className="w-full"
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
                            <div className="row-span-3 grid grid-rows-3  text-md text-font-color  w-full h-fit -mt-2 ">
                                {values.canvaAccount === 'true' && (
                                    <>
                                        <label className="row-span-1 flex flex-1 justify-start gap-x-4 items-center text-[0.8rem] xl:text-lg">
                                            <Field
                                                type="checkbox"
                                                name="condition1"
                                            />
                                            I acknowledge and accept that my
                                            personal details (name,email) may be
                                            visible to Upschool users registered
                                            with Canva.
                                        </label>
                                        <label className="row-span-1 flex flex-1 justify-start gap-x-4  items-center mt-2 text-[0.8rem] xl:text-lg">
                                            <Field
                                                type="checkbox"
                                                name="condition2"
                                            />
                                            <div>
                                                I acknowledge that should I not
                                                wish to have my details visible
                                                to others, I can instead sign up
                                                for Canva basic <u>here</u>
                                            </div>
                                        </label>
                                    </>
                                )}

                                <label className="row-span-1 flex flex-1 justify-start gap-x-4  items-center text-[0.8rem] xl:text-lg">
                                    <Field type="checkbox" name="condition3" />
                                    <div>
                                        I agree to Upschool's {` `}
                                        <a
                                            href="https://upschool.co/terms-and-conditions/"
                                            target="_blank"
                                        >
                                            <u>Terms and Conditions</u>
                                        </a>
                                        {` `}
                                        and
                                        {` `}
                                        <a
                                            href="https://upschool.co/privacy-policy/"
                                            target="_blank"
                                        >
                                            <u>Privacy Policy</u>
                                        </a>
                                        {` `}
                                    </div>
                                </label>
                            </div>
                            <div className="row-span-1 w-full">
                                {((touched.condition1 && errors.condition1) ||
                                    (touched.condition2 && errors.condition2) ||
                                    (touched.condition3 &&
                                        errors.condition3)) && (
                                    <p className="text-center text-red-upschool text-sm p-1">
                                        You need to accept all the conditions to
                                        proceed
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4  text-sm md:text-base w-full h-fit font-normal ">
                            <button
                                type="button"
                                className="col-start-1 col-span-2 sm:col-span-1 justify-self-start mb-4 flex flex-1 flex-wrap items-center justify-start gap-x-0.5 px-3 py-2 disabled:opacity-75  w-fit h-full"
                                disabled={isSubmitting}
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
                                <span>
                                    <u>Back</u>
                                </span>
                            </button>

                            <button
                                className=" col-start-3  sm:col-start-4 col-span-2 sm:col-span-1 justify-self-end flex mb-4 flex-1 flex-wrap items-center justify-center disabled:opacity-80 gap-x-0.5 bg-theme-color px-3 py-2 w-fit h-fit text-white"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                <span>
                                    {isSubmitting
                                        ? 'Registering...'
                                        : 'Register'}
                                </span>
                                {/* <span>Next</span> */}
                                {/* <span>
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
                                </span> */}
                            </button>
                        </div>
                    </form>
                </>
            )}
        </Formik>
    );
}
