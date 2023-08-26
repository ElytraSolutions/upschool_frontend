import { useState } from "react";
import ProgressBar from "../../parts/partsRegisterPage/ProgressBar";
import { NavLink } from "react-router-dom";
import RegisterStepIHeader from "../../parts/partsRegisterPage/RegisterStepIHeader";
import RegisterStepIIIHeader from "../../parts/partsRegisterPage/RegisterStepIIIHeader";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function Registration() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentData, setCurrentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    role: "",
    age: "",
    canvaAccount: true,
    condition1: false,
    condition2: false,
    condition3: false,
  });
  const components = [
    <Step1
      oldValues={currentData}
      submitHandler={async (data, onSubmitProps) => {
        setCurrentData((oldValue) => {
          return { ...oldValue, ...data };
        });
        onSubmitProps.resetForm();
        setCurrentStep((oldStep) => oldStep + 1);
      }}
    />,
    <Step2
      oldValues={currentData}
      submitHandler={async (data, onSubmitProps) => {
        setCurrentData((oldValue) => {
          return { ...oldValue, ...data };
        });
        onSubmitProps.resetForm();
        setCurrentStep((oldStep) => oldStep + 1);
      }}
      backHandler={(values) => {
        setCurrentData((oldData) => {
          return { ...oldData, ...values };
        });
        setCurrentStep(0);
      }}
    />,
    <Step3
      oldValues={currentData}
      submitHandler={async (data, onSubmitProps) => {
        const fullData = { ...currentData, ...data };
        console.log(fullData);
        onSubmitProps.resetForm();
      }}
      backHandler={(data) => {
        setCurrentData((oldValue) => {
          return { ...oldValue, ...data };
        });
        setCurrentStep(1);
      }}
    />,
  ];
  return (
    <div
      className="flex justify-center items-center bg-gray-200"
      style={{ height: "90vh" }}
    >
      {/*Layout*/}
      <div className={`grid grid-cols-16 gap-0 w-[90vw] xl:w-[60vw] h-[80vh]`}>
        {/* first column:Registration Form*/}
        <div
          className=" col-span-11 flex flex-wrap content-center  justify-center bg-white"
          style={{ height: "inherit" }}
        >
          <div className="w-11/12 ">
            {/* <!-- Heading --> */}
            {currentStep == 0 && <RegisterStepIHeader showOauth />}
            {currentStep == 1 && <RegisterStepIHeader showOauth={false} />}
            {currentStep == 2 && <RegisterStepIIIHeader />}

            {/* <!-- Form --> */}
            {/* First form */}
            {components[currentStep]}
          </div>
        </div>

        {/* Second column*/}
        <div
          className=" col-span-5 flex flex-wrap content-center justify-center bg-theme-color"
          style={{ height: "inherit" }}
        >
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className={`relative w-8 h-8 mt-1 text-theme-color ${currentStep > 0 ? "" : "hidden"
                          }`}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* text information */}
                <div className="col-span-3  justify-self-start flex flex-row flex-1 justify-start">
                  <h1 className="text-white">Account Information</h1>
                </div>

                {/* first line */}
                <div className=" col-start-1 col-span-1">
                  <div
                    className={`h-8 max-h-full border w-0  ${currentStep == 0 ? "border-white" : "border-gray-400"
                      } `}
                  ></div>
                </div>
                {/* occupying extra spaces */}

                {/* second label */}
                <div className=" col-start-1 col-span-1">
                  {/* Circle container */}
                  {/* Circle */}
                  <div
                    className={`${currentStep == 1
                      ? "border-pink-600 bg-white "
                      : "border-gray-400"
                      } border-2  w-10 h-10 rounded-full`}
                  >
                    {/* tick mark */}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className={`${currentStep > 1 ? "" : "hidden"
                          } relative w-8 h-8 mt-1 text-theme-color`}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* text information */}
                <div className="col-span-3 justify-self-start flex flex-row flex-1 justify-start">
                  <h1
                    className={`${currentStep == 1 ? "text-white" : "text-gray-400"
                      }`}
                  >
                    About You
                  </h1>
                </div>
                {/* second line */}
                <div className=" col-start-1 col-span-1 ">
                  <div
                    className={`h-8 max-h-full border w-0 ${currentStep == 2 ? "border-white" : "border-gray-400"
                      } `}
                  ></div>
                </div>
                {/* occupying extra spaces */}

                {/* third label */}
                <div className=" col-start-1 col-span-1">
                  {/* Circle container */}
                  {/* Circle */}
                  <div
                    className={`${currentStep == 2
                      ? "border-pink-600 bg-white "
                      : "border-gray-400"
                      } border-2 w-10 h-10 rounded-full`}
                  >
                    {/* tick mark */}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className={`${currentStep > 2 ? "" : "hidden"
                          } relative w-8 h-8 mt-1 text-theme-color`}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* text information */}
                <div className="col-span-3 justify-self-start flex flex-row flex-1 justify-start">
                  <h1
                    className={`${currentStep == 2 ? "text-white" : "text-gray-400"
                      }`}
                  >
                    Your Canva Account
                  </h1>
                </div>
              </div>
              {/* second row:progress bar */}
              <div className=" row-start-11 row-span-2">
                <ProgressBar currentLevel={currentStep} />
              </div>
              {/* third column:Login link */}
              <div className=" row-start-13 row-span-2 text-white grid grid-cols-10 content-center w-full">
                <div className="col-start-2 col-end-10 text-sm ">
                  Already have an account ?{" "}
                  <NavLink to={"/demo"} className="text-base">
                    <u>
                      <b>Log in</b>
                    </u>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
