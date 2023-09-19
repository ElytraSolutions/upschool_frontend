import { Formik, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import { countries } from '../../../data/countries';

import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const BillingSchema = yup.object().shape({
    first_name: yup
        .string()
        .required('required')
        .max(255, 'Characters too long'),
    last_name: yup
        .string()
        .required('required')
        .max(255, 'Characters too long'),
    email: yup
        .string()
        .email('invalid email')
        .required('required')
        .max(255, 'Characters too long'),
    organization: yup
        .string()
        .required('required')
        .max(255, 'Characters too long'),
    streetAddress: yup.string().required('required'),
    country: yup.string().required('required'),
    city: yup.string().required('required'),
    postcode: yup
        .string()
        .matches(/^\d{5}$/, 'should be 5-digits')
        .required('required'),

    shippingDetails: yup.boolean(),
});

const InitialValues = {
    first_name: '',
    last_name: '',
    email: '',
    streetAddress: '',
    country: '',
    city: '',
    postcode: '',
    organization: '',
    shippingDetails: true,
};

const submitHandler = (data, onSubmitProps) => {
    // TODO implement logic for submmited data
    console.log(data);
    onSubmitProps.resetForm();
};

export const TeacherBillingDetails = () => {
    return (
        <div className="w-full">
            <div className="w-full h-full border border-theme-color/50 rounded-md  flex flex-col gap-2">
                <div className="p-2 flex items-center justify-start font-semibold">
                    <span className="text-lg md:text-xl lg:text-2xl">
                        Billing & Shipping Details
                    </span>
                </div>
                <div className="w-full h-[1px] bg-slate-400"></div>
                <div className="px-2 flex items-center justify-start font-semibold">
                    <span className="text-base md:text-lg lg:text-xl">
                        Billing Details
                    </span>
                </div>

                <div className="p-2 w-full">
                    <div className="w-full md:w-11/12 ">
                        <Formik
                            onSubmit={submitHandler}
                            initialValues={InitialValues}
                            validationSchema={BillingSchema}
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
                                        className="grid grid-cols-6 grid-rows-8 gap-y-1 gap-x-2 p-0.5 "
                                    >
                                        {/* First Name */}
                                        <>
                                            <label
                                                className="col-span-2  md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="firstNameform2"
                                            >
                                                First Name
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
                                                {/* TODO remove comments */}
                                                {/* <input
                                                    id="firstName"
                                                    type="text"
                                                    name="first_name"
                                                    className={`w-full focus:outline-none bg-white border rounded-md py-1 px-3  ${
                                                        touched.first_name &&
                                                        errors.first_name
                                                            ? 'border-red-upschool'
                                                            : 'border-theme-color/50'
                                                    }`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.first_name}
                                                /> */}
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    id="firstNameform2"
                                                    type="text"
                                                    hiddenLabel
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.first_name}
                                                    name="first_name"
                                                    error={
                                                        Boolean(
                                                            touched.first_name,
                                                        ) &&
                                                        Boolean(
                                                            errors.first_name,
                                                        )
                                                    }
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
                                                            color: '#03014C',
                                                        },
                                                    }}
                                                />
                                                {touched.first_name &&
                                                errors.first_name ? (
                                                    <ErrorMessage
                                                        name="first_name"
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
                                        {/* Last Name */}
                                        <>
                                            <label
                                                className="col-span-2  md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="lastNameform2"
                                            >
                                                Last Name
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    id="lastNameform2"
                                                    type="text"
                                                    hiddenLabel
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.last_name}
                                                    name="last_name"
                                                    error={
                                                        Boolean(
                                                            touched.last_name,
                                                        ) &&
                                                        Boolean(
                                                            errors.last_name,
                                                        )
                                                    }
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
                                                            color: '#03014C',
                                                        },
                                                    }}
                                                />
                                                {touched.last_name &&
                                                errors.last_name ? (
                                                    <ErrorMessage
                                                        name="last_name"
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
                                        {/* Email */}
                                        <>
                                            <label
                                                className="col-span-2 md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="emailform2"
                                            >
                                                Email Address
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    id="emailform2"
                                                    type="email"
                                                    hiddenLabel
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
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
                                                            color: '#03014C',
                                                        },
                                                    }}
                                                />
                                                {touched.email &&
                                                errors.email ? (
                                                    <ErrorMessage
                                                        name="email"
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
                                        {/* Address */}
                                        <>
                                            <label
                                                className="row-span-2 col-span-2 md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="address"
                                            >
                                                Address
                                            </label>
                                            <div className="row-span-2 col-span-4 md:col-span-5 w-full grid grid-cols-4 md:grid-cols-5 grid-rows-2 gap-x-2 md:gap-x-5">
                                                {/* Street Address */}
                                                <div className="row-span-1 col-span-full w-full">
                                                    <TextField
                                                        size="small"
                                                        fullWidth
                                                        id="address"
                                                        type="text"
                                                        hiddenLabel
                                                        placeholder="Unit, Street Number, Street Name"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={
                                                            values.streetAddress
                                                        }
                                                        name="streetAddress"
                                                        error={
                                                            Boolean(
                                                                touched.streetAddress,
                                                            ) &&
                                                            Boolean(
                                                                errors.streetAddress,
                                                            )
                                                        }
                                                        InputProps={{
                                                            style: {
                                                                borderRadius:
                                                                    '8px',
                                                                color: '#03014C',
                                                            },
                                                        }}
                                                    />
                                                    {touched.streetAddress &&
                                                    errors.streetAddress ? (
                                                        <ErrorMessage
                                                            name="streetAddress"
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
                                                {/* City */}
                                                <div className="col-span-1 md:col-span-2 w-full">
                                                    <TextField
                                                        size="small"
                                                        fullWidth
                                                        id="city"
                                                        type="text"
                                                        hiddenLabel
                                                        placeholder="City"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.city}
                                                        name="city"
                                                        error={
                                                            Boolean(
                                                                touched.city,
                                                            ) &&
                                                            Boolean(errors.city)
                                                        }
                                                        InputProps={{
                                                            style: {
                                                                borderRadius:
                                                                    '8px',
                                                                color: '#03014C',
                                                            },
                                                        }}
                                                    />
                                                    {touched.city &&
                                                    errors.city ? (
                                                        <ErrorMessage
                                                            name="city"
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
                                                {/* Post Code */}
                                                <div className="col-span-1 w-full">
                                                    <TextField
                                                        size="small"
                                                        fullWidth
                                                        id="postcode"
                                                        type="text"
                                                        hiddenLabel
                                                        placeholder="Post Code"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.postcode}
                                                        name="postcode"
                                                        error={
                                                            Boolean(
                                                                touched.postcode,
                                                            ) &&
                                                            Boolean(
                                                                errors.postcode,
                                                            )
                                                        }
                                                        InputProps={{
                                                            style: {
                                                                borderRadius:
                                                                    '8px',
                                                                color: '#03014C',
                                                            },
                                                        }}
                                                    />
                                                    {touched.postcode &&
                                                    errors.postcode ? (
                                                        <ErrorMessage
                                                            name="postcode"
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
                                                {/* Country */}
                                                <div className="col-span-2 w-full">
                                                    <TextField
                                                        size="small"
                                                        fullWidth
                                                        id="country"
                                                        select
                                                        hiddenLabel
                                                        defaultValue=""
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.country}
                                                        name="country"
                                                        error={
                                                            Boolean(
                                                                touched.country,
                                                            ) &&
                                                            Boolean(
                                                                errors.country,
                                                            )
                                                        }
                                                        SelectProps={{
                                                            MenuProps: {
                                                                style: {
                                                                    maxHeight:
                                                                        '28%',
                                                                    maxWidth:
                                                                        '20%',
                                                                }, // Set your desired max height and max width for dropdown menu
                                                            },
                                                        }}
                                                        InputProps={{
                                                            style: {
                                                                borderRadius:
                                                                    '8px',
                                                                color: '#03014C',
                                                            },
                                                        }}
                                                    >
                                                        {countries.map(
                                                            (country) => (
                                                                <MenuItem
                                                                    key={
                                                                        country.name
                                                                    }
                                                                    value={
                                                                        country.name
                                                                    }
                                                                >
                                                                    {
                                                                        country.name
                                                                    }
                                                                </MenuItem>
                                                            ),
                                                        )}
                                                    </TextField>
                                                    {touched.country &&
                                                    errors.country ? (
                                                        <ErrorMessage
                                                            name="country"
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
                                            </div>
                                        </>
                                        {/* Organization */}
                                        <>
                                            <label
                                                className="col-span-2 md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="organization"
                                            >
                                                Organization
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    id="organization"
                                                    type="text"
                                                    hiddenLabel
                                                    placeholder="Company/Organization"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.organization}
                                                    name="organization"
                                                    error={
                                                        Boolean(
                                                            touched.organization,
                                                        ) &&
                                                        Boolean(
                                                            errors.organization,
                                                        )
                                                    }
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
                                                            color: '#03014C',
                                                        },
                                                    }}
                                                />
                                                {touched.organization &&
                                                errors.organization ? (
                                                    <ErrorMessage
                                                        name="organization"
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
                                        {/* Shipping Details */}
                                        <>
                                            <div className="row-span-1 col-span-full ">
                                                <label
                                                    className="p-1 w-full text-left cursor-pointer font-semibold"
                                                    htmlFor="shippingDetails"
                                                >
                                                    Shipping Details
                                                </label>
                                                <div className="p-1 w-full text-left cursor-pointer">
                                                    <label
                                                        id="shippingDetails"
                                                        className="flex flex-1 justify-start gap-x-4 items-center hover:cursor-pointer"
                                                    >
                                                        <Field
                                                            className="h-4 w-4"
                                                            type="checkbox"
                                                            name="shippingDetails"
                                                        />
                                                        Shipping Details same as
                                                        Billing Address
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                        {/* Save button */}
                                        <button
                                            type="submit"
                                            id="form2"
                                            className=" col-start-5 col-span-2 px-8 py-3 w-fit h-fit bg-theme-color text-white block  justify-self-end text-xs xm:text-base text-center"
                                        >
                                            Save
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
