import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from '../../data/countries';
import { useState } from 'react';

// import Select from '@mui/material/Select';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const coursesName = [
//     {
//         course: 'A',
//         course_id: '1',
//     },
//     {
//         course: 'B',
//         course_id: '2',
//     },
//     {
//         course: 'C',
//         course_id: '3',
//     },
// ];

const CertificateStep1 = ({
    formData,
    setFormData,
    changeCurrentStep,
    courses,
    coursesName,
}) => {
    const { isLargeScreen } = useScreenWidthAndHeight();
    console.log('courses', courses);
    console.log('coursesName', coursesName);
    const [countriesList, _setCountriesList] = useState(
        countries.map((country) => country.name),
    );

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            formData.course !== null &&
            formData.firstName !== '' &&
            formData.age !== '' &&
            formData.email !== ''
        ) {
            changeCurrentStep();
        }
    };
    console.log('FormData', formData);
    console.log('countries', countriesList);

    return (
        <div>
            <div className="p-2 sm:p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-5">
                <h1 className="text-3xl font-bold text-font-color p-2">
                    Get Your Certificate
                </h1>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ minWidth: 120 }}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={coursesName}
                            sx={{ width: '100%' }}
                            value={formData.course}
                            onChange={(_, newValue) =>
                                handleChange({
                                    target: { name: 'course', value: newValue },
                                })
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    name="course"
                                    label="Course Name"
                                    onChange={handleChange}
                                />
                            )}
                        />
                        <h1 className="text-2xl font-bold text-font-color p-2">
                            About You
                        </h1>
                        <div className={`grid w-full grid-cols-4 gap-4`}>
                            <TextField
                                className={`${
                                    isLargeScreen ? 'col-span-2' : 'col-span-4'
                                }`}
                                type="text"
                                label="First Name"
                                onChange={handleChange}
                                value={formData.firstName}
                                name="firstName"
                            />
                            <TextField
                                className={`${
                                    isLargeScreen ? 'col-span-2' : 'col-span-4'
                                }`}
                                type="text"
                                label="Last Name"
                                onChange={handleChange}
                                value={formData.lastName}
                                name="lastName"
                            />

                            <TextField
                                className=" col-span-4"
                                type="email"
                                label="Email"
                                onChange={handleChange}
                                value={formData.email}
                                name="email"
                            />

                            <TextField
                                className=" col-span-4"
                                type="school"
                                label="Your School Name (Optional)"
                                onChange={handleChange}
                                value={formData.school}
                                name="school"
                            />
                            {/* <TextField
                                className={`${
                                    isLargeScreen ? 'col-span-2' : 'col-span-4'
                                }`}
                                type="text"
                                label="Country"
                                onChange={handleChange}
                                value={formData.country}
                                name="country"
                            /> */}
                            <Autocomplete
                                className={`${
                                    isLargeScreen ? 'col-span-2' : 'col-span-4'
                                }`}
                                disablePortal
                                id="combo-box-demo"
                                options={countriesList}
                                sx={{ width: '100%' }}
                                value={formData.country}
                                onChange={(_, newValue) =>
                                    handleChange({
                                        target: {
                                            name: 'country',
                                            value: newValue,
                                        },
                                    })
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        name="country"
                                        label="Country"
                                        onChange={handleChange}
                                    />
                                )}
                            />
                            <TextField
                                className={`${
                                    isLargeScreen ? 'col-span-2' : 'col-span-4'
                                }`}
                                type="number"
                                label="Age"
                                onChange={handleChange}
                                value={formData.age}
                                name="age"
                            />
                        </div>
                        <div
                            className={`grid grid-cols-4  justify-items-end gap-4  text-sm md:text-base w-full h-fit font-normal mt-5`}
                        >
                            <button
                                type="submit"
                                className=" col-start-3  sm:col-start-4 col-span-2 sm:col-span-1  flex  flex-1 flex-wrap items-center justify-center gap-x-0.5 bg-theme-color px-3 py-2 w-fit h-fit text-white"
                            >
                                <span>Next</span>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
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
                    </Box>
                </form>
            </div>
        </div>
    );
};

export default CertificateStep1;
