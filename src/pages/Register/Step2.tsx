import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const registerSchema = yup.object().shape({
    country: yup.string().required("required").max(255, "Characters too long"),
    role: yup.string().required("required"),
    age: yup
        .string()
        .required("required")
        .matches(/^[0-9]+$/, "Age must be numeric"),
});

interface IStep2Props {
    oldValues: Record<string, any>;
    backHandler: (values: any) => void;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
}
export default function Step2({ oldValues, backHandler, submitHandler }: IStep2Props) {
    const countries = [
        {
            name: "Nepal",
        },
        {
            name: "India",
        },
        {
            name: "China",
        },
    ];
    const roles = [
        {
            id: 1,
            name: "School Teacher",
        },
        {
            id: 2,
            name: "Student (Over 18)",
        },
        {
            id: 3,
            name: "Student (Under 18)",
        },
    ];
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
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-rows-3  w-11/12 gap-4 p-2 m-2">
                            <TextField
                                className="row-span-1"
                                id="outlined-select-country"
                                select
                                label="Select your country"
                                defaultValue=""
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.country}
                                name="country"
                                error={Boolean(touched.country) && Boolean(errors.country)}
                                helperText={touched.country && errors.country}
                            >
                                {countries.map((country) => (
                                    <MenuItem key={country.name} value={country.name}>
                                        {country.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                className="row-span-1"
                                id="outlined-select-role"
                                select
                                label="Select your role"
                                defaultValue=""
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.role}
                                name="role"
                                error={Boolean(touched.role) && Boolean(errors.role)}
                                helperText={touched.role && errors.role}
                            >
                                {roles.map((role) => (
                                    <MenuItem key={role.id} value={role.id}>
                                        {role.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                className=" row-span-1"
                                type="text"
                                label="Age"
                                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.age}
                                name="age"
                                error={Boolean(touched.age) && Boolean(errors.age)}
                                helperText={touched.age && errors.age}
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4  p-2 m-2 w-11/12 font-normal text-base">
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

                            <button type="submit" className="col-start-4 col-span-1 flex flex-1 flex-wrap items-center justify-center gap-x-0.5 m-1 p-1 bg-theme-color text-white h-12">
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
