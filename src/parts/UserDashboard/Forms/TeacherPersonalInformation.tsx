import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { countries } from '../../../data/countries';

import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// TODO Shema for image(avtar) of user
const PersonalInformationSchema = yup.object().shape({
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
    country: yup.string().required('required').max(255, 'Characters too long'),
    date_of_birth: yup.date().required('required'),
});

const InitialValues = {
    first_name: '',
    last_name: '',
    email: '',
    country: '',
    date_of_birth: '',
};

function stringToColor(string) {
    let hash = 0;
    let i;

    //  eslint-disable no-bitwise
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    //eslint-enable no-bitwise

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
            width: 80,
            height: 80,
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

export const TeacherPersonalInformation = () => {
    const submitHandler = (data, onSubmitProps) => {
        console.log(data);
        onSubmitProps.resetForm();
    };
    return (
        <div className="w-full">
            <div className="w-full h-full border border-theme-color/50 rounded-md  flex flex-col gap-2 divide-y divide-slate-400">
                <div className="p-2 pb-0 flex items-center justify-start font-semibold">
                    <span className="text-lg md:text-xl lg:text-2xl">
                        Personal Information
                    </span>
                </div>
                <div className="p-2 w-full">
                    <div className="w-full md:w-11/12 ">
                        <Formik
                            onSubmit={submitHandler}
                            initialValues={InitialValues}
                            validationSchema={PersonalInformationSchema}
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
                                        {/* Profile Photo */}
                                        <>
                                            <label
                                                className="row-span-2 col-span-2 md:col-span-1 w-full text-left cursor-pointer  self-start pt-2 md:pt-0 md:self-center font-semibold"
                                                htmlFor="profile"
                                            >
                                                Profile Photo
                                            </label>
                                            {/* TODO add functionality for profile photo */}
                                            <div className="row-span-2 col-span-4 md:col-span-5 w-full flex flex-row gap-2 self-center ">
                                                <div className="cursor-pointer">
                                                    <Avatar
                                                        {...stringAvatar(
                                                            'Kent Dodds',
                                                        )}
                                                    />
                                                    {/* <Avatar
                                                    alt="Apple Sharp"
                                                    src="/static/images/avatar/1.jpg"
                                                    sx={{
                                                        width: 80,
                                                        height: 80,
                                                    }}
                                                /> */}
                                                </div>
                                                <div className="flex flex-col items-start gap-2 px-2">
                                                    <p className="text-sm">
                                                        It can be PNG, JPG or
                                                        GIF file. The size
                                                        should not exceed 2Mb
                                                    </p>
                                                    <div className="flex flex-row divide-x bg-white border border-theme-color/50 divide-theme-color/50  rounded-xl w-fit h-fit">
                                                        <div className="p-2 cursor-pointer">
                                                            <CloudUploadIcon
                                                                sx={{
                                                                    fontSize: 20,
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="p-2 cursor-pointer">
                                                            <DeleteIcon
                                                                sx={{
                                                                    fontSize: 20,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        {/* First Name */}
                                        <>
                                            <label
                                                className="col-span-2  md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="firstName"
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
                                                    id="firstName"
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
                                                htmlFor="lastName"
                                            >
                                                Last Name
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    id="lastName"
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
                                                htmlFor="email"
                                            >
                                                Email Address
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    id="email"
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

                                        {/*Country */}
                                        <>
                                            <label
                                                className="col-span-2 md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="country"
                                            >
                                                Country
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
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
                                                        Boolean(errors.country)
                                                    }
                                                    SelectProps={{
                                                        MenuProps: {
                                                            style: {
                                                                maxHeight:
                                                                    '28%',
                                                                maxWidth: '20%',
                                                            }, // Set your desired max height and max width for dropdown menu
                                                        },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
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
                                                                {country.name}
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
                                        </>
                                        {/*Date of Birth */}
                                        <>
                                            <label
                                                className="col-span-2 md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="dob"
                                            >
                                                Date of Birth
                                            </label>
                                            <div className="col-span-4 md:col-span-5 w-full">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    id="dob"
                                                    type="date"
                                                    hiddenLabel
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.date_of_birth}
                                                    name="date_of_birth"
                                                    error={
                                                        Boolean(
                                                            touched.date_of_birth,
                                                        ) &&
                                                        Boolean(
                                                            errors.date_of_birth,
                                                        )
                                                    }
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '8px',
                                                            color: '#03014C',
                                                        },
                                                    }}
                                                />
                                                {touched.date_of_birth &&
                                                errors.date_of_birth ? (
                                                    <ErrorMessage
                                                        name="date_of_birth"
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
