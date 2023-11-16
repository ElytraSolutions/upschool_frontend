import { Formik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { countries } from '../../data/countries';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import { useEffect, useState } from 'react';
import axiosInstance from '../../config/Axios';

const registerSchema = yup.object().shape({
    country: yup.string().required('required').max(255, 'Characters too long'),
    user_type_id: yup.number().required('required'),
    date_of_birth: yup.date().required('required'),
});

interface IStep2Props {
    oldValues: Record<string, any>;
    backHandler: (values: any) => void;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
}
export default function Step2({
    oldValues,
    backHandler,
    submitHandler,
}: IStep2Props) {
    const [userTypes, setUserTypes] = useState<any[]>([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            const res = await axiosInstance.get('/data/userTypes');
            setUserTypes(res.data.data);
        })();
    }, []);

    const { isLargeScreen } = useScreenWidthAndHeight();
    const size = isLargeScreen ? 'medium' : 'small';
    if (userTypes.length === 0) {
        return null;
    }
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
                    <form
                        onSubmit={handleSubmit}
                        className="w-full h-fit md:h-full flex flex-col gap-3 justify-between"
                    >
                        <div className="grid grid-rows-3  w-full gap-4 ">
                            <TextField
                                size={size}
                                className="w-full row-span-1"
                                id="outlined-select-country"
                                select
                                label="Select your country"
                                defaultValue=""
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.country}
                                name="country"
                                error={
                                    Boolean(touched.country) &&
                                    Boolean(errors.country)
                                }
                                helperText={
                                    touched.country &&
                                    (errors.country as string)
                                }
                                SelectProps={{
                                    MenuProps: {
                                        style: {
                                            maxHeight: '40%',
                                            maxWidth: '80%',
                                        }, // Set your desired max height and max width for dropdown menu
                                    },
                                }}
                            >
                                {countries.map((country) => (
                                    <MenuItem
                                        key={country.name}
                                        value={country.name}
                                    >
                                        {country.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                size={size}
                                className="row-span-1"
                                id="outlined-select-role"
                                select
                                label="Select your role"
                                defaultValue=""
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.user_type_id}
                                name="user_type_id"
                                error={
                                    Boolean(touched.user_type_id) &&
                                    Boolean(errors.user_type_id)
                                }
                                helperText={
                                    touched.user_type_id &&
                                    (errors.user_type_id as string)
                                }
                            >
                                {userTypes.map((role) => (
                                    <MenuItem key={role.id} value={role.id}>
                                        {role.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                size={size}
                                className=" row-span-1"
                                type="date"
                                label="Date of Birth"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.date_of_birth}
                                name="date_of_birth"
                                error={
                                    Boolean(touched.date_of_birth) &&
                                    Boolean(errors.date_of_birth)
                                }
                                helperText={
                                    touched.age && (errors.age as string)
                                }
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    max: new Date().toISOString().split('T')[0],
                                    min: '1900-01-01',
                                }}
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4 text-sm md:text-base w-full font-normal h-fit ">
                            <button
                                type="button"
                                className="col-start-1 col-span-2  justify-self-start sm:col-span-1 flex flex-1 flex-wrap items-center justify-start gap-x-0.5 px-3 py-2  w-fit h-full"
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
                                type="submit"
                                className=" col-start-3  sm:col-start-4 col-span-2 sm:col-span-1 justify-self-end flex mb-4 flex-1 flex-wrap items-center justify-center gap-x-0.5 bg-theme-color px-3 py-2 w-fit h-fit text-white"
                            >
                                <span>Next</span>
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
