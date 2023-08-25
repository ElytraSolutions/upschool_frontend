import { useState } from "react";
import { Formik } from "formik"
import * as yup from "yup"

import ProgressBar from "../../parts/partsRegisterPage/ProgressBar";

import {
  // Box,
  // Button,
  TextField,
  // useMediaQuery,
  // Typography,
  // useTheme,
  InputAdornment
} from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { NavLink } from "react-router-dom";
import RegisterStepIHeader from "../../parts/partsRegisterPage/RegisterStepIHeader";
import RegisterStepIIIHeader from "../../parts/partsRegisterPage/RegisterStepIIIHeader";


const registerSchema = yup.object().shape({
  firstName: yup.string().required("required").max(255, "Characters too long"),
  lastName: yup.string().required("required").max(255, "Characters too long"),
  email: yup.string().email("invalid email").required("required").max(255, "Characters too long"),
  password: yup.string()
    .required("Please enter a password")
    // check minimum characters
    .min(8, "Password must have at least 8 characters").max(255, "Characters too long")
    // different error messages for different requirements
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  confirmPassword: yup.string()
    .required("Please re-type your password")
    // use oneOf to match one of the values inside the array.
    // use "ref" to get the value of passwrod.
    .oneOf([yup.ref("password")], "Passwords does not match"),
  country: yup.string().required("required").max(255, "Characters too long"),
  role: yup.string().required("required"),
  age: yup.number().required("required"),
  canvaAccount: yup.bool(),
  conditin1: yup
    .bool()
    .oneOf([true], 'You need to accept the terms and conditions'),
  conditin2: yup
    .bool()
    .oneOf([true], 'You need to accept the terms and conditions'),
  conditin3: yup
    .bool()
    .oneOf([true], 'You need to accept the terms and conditions'),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  contry: "",
  role: "",
  age: null,
  canvaAccount: null,
  condition1: null,
  condition2: null,
  condition3: null,
};
const register = async (values, onSubmitProps) => {
  const formData = new FormData();
  for (let value in values) {
    formData.append(value, values[value]);
  }

  // const savedUserResponse = await fetch(
  //   "http://localhost:3001/auth/register",
  //   {
  //     method: "POST",
  //     body: formData,
  //   }
  // );
  // const savedUser = await savedUserResponse.json();
  onSubmitProps.resetForm();

};


export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [level1, setLevel1] = useState(true)
  const [level2, setLevel2] = useState(false)
  const [level3, setLevel3] = useState(false)
  // const[formlevel1,setFormlevel1]=useState(false)
  // const[formlevel2,setFormlevel2]=useState(false)
  // const[formlevel3,setFormlevel3]=useState(false)

  const handleTogglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowConfirmPassword(!showPassword);
  };
  return (
    <div className="flex justify-center items-center bg-gray-200" style={{ height: "90vh" }}>

      {/*Layout*/}
      <div className="grid grid-cols-16 gap-0 w-[90vw] xl:w-[70vw]" style={{ height: "70vh" }} >
        {/* first column:Registration Form*/}
        <div className=" col-span-11 flex flex-wrap content-center  justify-center bg-white" style={{ height: "inherit" }}>
          <div className="w-11/12 ">
            {/* <!-- Heading --> */}
            <RegisterStepIHeader />
            <RegisterStepIIIHeader />

            {/* <!-- Form --> */}
            <Formik
              onSubmit={register}
              initialValues={initialValuesRegister}
              validationSchema={registerSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
              }) => (
                <form className="" onSubmit={handleSubmit}>


                  <div className="grid grid-cols-4 w-11/12 gap-4 p-2 m-2">

                    <TextField
                      className=" col-span-2"
                      type="text"
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={
                        Boolean(touched.firstName) && Boolean(errors.firstName)
                      }
                      helperText={touched.firstName && errors.firstName}

                    />
                    <TextField
                      className=" col-span-2"
                      type="text"
                      label="Last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      name="lastName"
                      error={
                        Boolean(touched.lastName) && Boolean(errors.lastName)
                      }
                      helperText={touched.lastName && errors.lastName}
                    />

                    <TextField
                      className=" col-span-4"
                      type="email"
                      label="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      error={
                        Boolean(touched.email) && Boolean(errors.email)
                      }
                      helperText={touched.email && errors.email}
                    />
                    <TextField
                      className=" col-span-2"
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <button onClick={handleTogglePasswordVisibility}>
                              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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
                        Boolean(touched.password) && Boolean(errors.password)
                      }
                      helperText={touched.password && errors.password}
                    />
                    <TextField
                      className=" col-span-2"
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <button onClick={handleToggleConfirmPasswordVisibility}>
                              {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </button>
                          </InputAdornment>
                        ),
                      }}
                      label="Confirm password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.confirmPassword}
                      name="confirmPassword"
                      error={
                        Boolean(touched.confirmPassword) && Boolean(errors.confirmPassword)
                      }
                      helperText={touched.confirmPassword && errors.confirmPassword}
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-4  p-2 m-2 w-11/12 font-normal text-base">
                    <button className="col-start-1 col-span-1 flex flex-1 flex-wrap items-center justify-start gap-x-0.5 m-1 p-1">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                      </span>
                      <span><u>Back</u></span>
                    </button>

                    <button className="col-start-4 col-span-1 flex flex-1 flex-wrap items-center justify-center gap-x-0.5 m-1 p-1 bg-theme-color text-white">
                      <span>Next</span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              )
              }
            </Formik>
          </div>
        </div>

        {/* Second column*/}
        <div className=" col-span-5 flex flex-wrap content-center justify-center bg-theme-color" style={{ height: "inherit" }}>
          {/* second column layout */}
          <div className=" relative w-11/12" style={{ height: "inherit" }}>
            {/* grid of three rows */}
            <div className="grid grid-rows-15 gap-y-3 max-h-full py-2">
              {/* first row:progress stepper */}
              <div className="row-start-3 row-span-7 grid grid-cols-4 grid-rows-5 place-items-center gap-y-3 ">
                {/* first label */}
                <div className="col-span-1">
                  {/* Circle container */}
                  {/* Circle */}
                  <div className="border-2 border-pink-600 bg-white w-10 h-10 rounded-full">
                    {/* tick mark */}
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" relative w-8 h-8 mt-1 text-theme-color">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* text information */}
                <div className="col-span-3  justify-self-start flex flex-row flex-1 justify-start"><h1 className="text-white">Account Information</h1></div>

                {/* first line */}
                <div className=" col-start-1 col-span-1">
                  <div className="h-8 max-h-full border w-0 border-white "></div>
                </div>
                {/* occupying extra spaces */}

                {/* second label */}
                <div className=" col-start-1 col-span-1">
                  {/* Circle container */}
                  {/* Circle */}
                  <div className="border-2 border-pink-600 bg-white w-10 h-10 rounded-full">
                    {/* tick mark */}
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" relative w-8 h-8 mt-1 text-theme-color">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* text information */}
                <div className="col-span-3 justify-self-start flex flex-row flex-1 justify-start"><h1 className="text-white">About You</h1></div>
                {/* second line */}
                <div className=" col-start-1 col-span-1 ">
                  <div className="h-8 max-h-full border w-0 border-white"></div>
                </div>
                {/* occupying extra spaces */}

                {/* third label */}
                <div className=" col-start-1 col-span-1">
                  {/* Circle container */}
                  {/* Circle */}
                  <div className="border-2 border-pink-600 bg-white w-10 h-10 rounded-full">
                    {/* tick mark */}
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" relative w-8 h-8 mt-1 text-theme-color">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* text information */}
                <div className="col-span-3 justify-self-start flex flex-row flex-1 justify-start"><h1 className="text-white">Your Canva Account</h1></div>

              </div>
              {/* second row:progress bar */}
              <div className=" row-start-11 row-span-2">
                <ProgressBar />
              </div>
              {/* third column:Login link */}
              <div className=" row-start-13 row-span-2 text-white grid grid-cols-10 content-center w-full">
                <div className="col-start-2 col-end-10 text-sm ">Already have an account ? <NavLink to={"/demo"} className="text-base"><u><b>Log in</b></u></NavLink></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

