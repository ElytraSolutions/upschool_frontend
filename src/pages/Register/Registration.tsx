import { useState } from 'react';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';

import RegisterStepIHeader from '../../parts/PartsRegisterPage/RegisterStepIHeader';
import RegisterStepIIIHeader from '../../parts/PartsRegisterPage/RegisterStepIIIHeader';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { SecondColumnProgressSection as ProgressSection } from '../../parts/PartsRegisterPage/SecondColumnProgressSection';
import LoginPart from '../../parts/PartsRegisterPage/LoginPart';
import axiosInstance from '../../config/Axios';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import { toast } from 'react-toastify';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Registration() {
    const { user, refresh } = useUser();
    const { isLargeScreen } = useScreenWidthAndHeight(); //min-width=768px
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();
    const [currentData, setCurrentData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        country: '',
        user_type_id: '',
        date_of_birth: '',
        canvaAccount: 'true',
        condition1: false,
        condition2: false,
        condition3: false,
    });
    const components = [
        <Step1
            isLargeScreen={isLargeScreen}
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
            submitHandler={async (data, { resetForm }) => {
                try {
                    const fullData = { ...currentData, ...data };
                    const csrfResp = await axiosInstance.get(
                        '/sanctum/csrf-cookie',
                    );
                    axiosInstance.defaults.headers['X-XSRF-TOKEN'] =
                        csrfResp.data.csrfToken;
                    await axiosInstance.post('/auth/register', fullData);
                    await axiosInstance.post(
                        '/auth/email/verification-notification',
                    );
                    await refresh();
                    resetForm();
                    navigate('/');
                } catch (error) {
                    const resp = (error as any).response.data;
                    toast.error(resp.message || 'Something went wrong');
                }
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
        <div className="h-full w-full">
            <Navbar />
            {user && user.id ? (
                <div className="w-full h-full">
                    <div className="flex justify-center items-center px-2 py-6 sm:px-6 sm:py-10 md:px-10 md:py-14 bg-white w-full h-full">
                        <div className="h-fit w-full xl:w-[1140px] p-2 md:p-4 my-[40px] xss:my-[90px]  xs:my-[150px]  bg-blue-50">
                            <div className="flex flex-col gap-3 xs:gap-6">
                                <div className="flex justify-center items-center w-full h-full">
                                    <i
                                        className="fa fa-check-circle"
                                        aria-hidden="true"
                                        style={{
                                            fontSize: '100px',
                                            color: '#21D375',
                                        }}
                                    ></i>
                                </div>
                                <p className=" text-font-color text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center font-lexend">
                                    You are already registered!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center bg-gray-200 py-3 px-2 sm:py-4 md:py-6 lg:py-8 h-full w-full">
                    {/*Layout*/}
                    <div
                        className={`grid ${
                            isLargeScreen ? 'grid-cols-16' : 'grid-cols-11'
                        } gap-0 w-[97vw] sm:w-[90vw] lg:w-[80vw] xl:w-[65vw] h-fit md:h-[550px] 2xl:h-[570px]`}
                    >
                        {/* first column:Registration Form*/}
                        <div className=" col-span-11 flex justify-center bg-white py-4 w-full h-full">
                            <div className="w-11/12 flex flex-col gap-2 h-full">
                                {/* <!-- Heading --> */}
                                {currentStep == 0 && (
                                    <RegisterStepIHeader
                                        showOauth
                                        isLargeScreen={isLargeScreen}
                                    />
                                )}
                                {currentStep == 1 && (
                                    <RegisterStepIHeader showOauth={false} />
                                )}
                                {currentStep == 2 && <RegisterStepIIIHeader />}

                                {/* <!-- Form --> */}
                                {/* First form */}
                                {components[currentStep]}
                                {!isLargeScreen && (
                                    <div className="text-font-color grid grid-cols-10 content-center w-full">
                                        <div className="col-span-10 flex flex-1 flex-wrap justify-center text-sm ">
                                            <LoginPart />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Second column*/}
                        {isLargeScreen && (
                            <ProgressSection currentStep={currentStep} />
                        )}
                    </div>
                </div>
            )}

            <div className="">
                <Footer />
            </div>
        </div>
    );
}
