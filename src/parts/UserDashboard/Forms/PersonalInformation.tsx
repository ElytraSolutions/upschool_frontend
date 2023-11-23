import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { countries } from '../../../data/countries';

import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import stringAvatar from '../../../utlis/AvatarColor/avatar_color';
import useScreenWidthAndHeight from '../../../hooks/useScreenWidthAndHeight';

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

const submitHandler = (data, onSubmitProps) => {
    // TODO implement logic for submmited data
    console.log(data);
    onSubmitProps.resetForm();
};

export const PersonalInformation = ({ user }) => {
    console.log('Personal INformation', user);
    const InitialValues = {
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        country: user.country || '',
        date_of_birth: user.date_of_birth.slice(0, 10) || '',
    };

    const {
        isLargeScreen,
        isMobileHeight,
        isTabHeight,
        isSmallHeight,
        isLgHeight,
    } = useScreenWidthAndHeight();
    const AvatarHeight = isLargeScreen ? 80 : 40;
    const AvatarWidth = isLargeScreen ? 80 : 40;
    const SelectCountryHeight = isSmallHeight
        ? '70%'
        : isMobileHeight
        ? '50%'
        : isTabHeight
        ? '40%'
        : isLgHeight
        ? '35%'
        : '28%';
    return (
        <div className="w-full">
            <div className="w-full h-full border border-theme-color/50 rounded-md  flex flex-col gap-2 divide-y divide-slate-400">
                <div className="p-2 pb-0 flex items-center justify-start font-semibold">
                    <span className="text-lg md:text-xl lg:text-2xl font-lexend">
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
                                        className=" flex flex-col sm:grid sm:grid-cols-6 sm:grid-rows-8 gap-y-1 gap-x-2  p-0.5 "
                                    >
                                        {/* Profile Photo */}
                                        <>
                                            <label
                                                className="sm:row-span-2 sm:col-span-2 md:col-span-1 w-full text-left cursor-pointer  xs:self-start pt-2 md:pt-0 md:self-center font-semibold"
                                                htmlFor="profile"
                                            >
                                                Profile Photo
                                            </label>
                                            {/* TODO add functionality for profile photo */}
                                            <div className="sm:row-span-2 sm:col-span-4 md:col-span-5 w-full flex flex-row gap-2 xs:self-center ">
                                                <div className="cursor-pointer">
                                                    <Avatar
                                                        {...stringAvatar(
                                                            'Kent Dodds',
                                                            AvatarHeight,
                                                            AvatarWidth,
                                                        )}
                                                        style={{
                                                            fontSize: '15px',
                                                        }}
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
                                                    <p className="text-sm xs:text-sm">
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
                                                className="sm:col-span-2  md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="firstName"
                                            >
                                                First Name
                                            </label>
                                            <div className="sm:col-span-4 md:col-span-5 w-full">
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
                                                            <div className="text-left text-sm text-red-upschool p-1">
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
                                                className="sm:col-span-2  md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="lastName"
                                            >
                                                Last Name
                                            </label>
                                            <div className="sm:col-span-4 md:col-span-5 w-full">
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
                                                            <div className="text-left text-sm text-red-upschool p-1">
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
                                                className="sm:col-span-2 md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="emailAddress"
                                            >
                                                Email Address
                                            </label>
                                            <div className="sm:col-span-4 md:col-span-5 w-full">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    id="emailAddress"
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
                                                            <div className="text-left text-sm text-red-upschool p-1">
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
                                                className="sm:col-span-2 md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="country_info"
                                            >
                                                Country
                                            </label>
                                            <div className="sm:col-span-4 md:col-span-5 w-full">
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    id="country_info"
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
                                                                    SelectCountryHeight,
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
                                                            <div className="text-left text-sm text-red-upschool p-1">
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
                                                className="sm:col-span-2 md:col-span-1 p-1 w-full text-left cursor-pointer font-semibold"
                                                htmlFor="dob"
                                            >
                                                Date of Birth
                                            </label>
                                            <div className="sm:col-span-4 md:col-span-5 w-full">
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
                                                            <div className="text-left text-sm text-red-upschool p-1">
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
                                            id="form1"
                                            className=" sm:col-start-5 sm:col-span-2 px-8 py-3 w-fit h-fit bg-theme-color text-white block  xs:justify-self-end text-sm xm:text-base text-center"
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
