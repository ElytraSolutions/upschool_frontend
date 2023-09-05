import { useState } from 'react';
import useScreenWidth from '../../hooks/useScreenWidth';
import { UploadBookStep1 as UBStep1 } from './UploadBookStep1';
import { UploadBookStep2 as UBStep2 } from './UploadBookStep2';
import { UploadBookStep3 as UBStep3 } from './UploadBookStep3';
import { UploadBookProgressSection as ProgressSectionUB } from '../../parts/PartsUploadBook/UploadBookProgressSection';
import axiosInstance from '../../config/Axios';

export const UploadBook = () => {
    const { isLargeScreen } = useScreenWidth(); //min-width=768px
    const [currentStep, setCurrentStep] = useState(0);
    const [currentData, setCurrentData] = useState({
        first_name: '',
        last_name: '',
        school_name: '',
        country: '',
        age: '',
        email: '',
        book_title: '',
        book_description: '',
        canva_book_link: '',
        file: '',
        categories: '',
        project: '',
    });
    const components = [
        <UBStep1
            isLargeScreen={isLargeScreen}
            oldValues={currentData}
            submitHandler={async (data, onSubmitProps) => {
                console.log(data);
                setCurrentData((oldValue) => {
                    return { ...oldValue, ...data };
                });
                onSubmitProps.resetForm();
                setCurrentStep((oldStep) => oldStep + 1);
            }}
        />,
        <UBStep2
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
        <UBStep3
            oldValues={currentData}
            submitHandler={async (data, onSubmitProps) => {
                const fullData = { ...currentData, ...data };
                const csrfResp = await axiosInstance.get(
                    '/sanctum/csrf-cookie',
                );
                axiosInstance.defaults.headers['X-XSRF-TOKEN'] =
                    csrfResp.data.csrfToken;
                await axiosInstance.post('/auth/register', fullData);
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
        <>
            <div
                className="flex justify-center items-center bg-gray-200 py-8"
                style={{ minHeight: '90vh' }}
            >
                {/*Layout*/}
                <div
                    className={`grid ${
                        isLargeScreen ? 'grid-cols-16' : 'grid-cols-11'
                    } gap-0 w-[90vw] xl:w-[60vw] ${
                        isLargeScreen ? 'min-h-[80vh]' : 'min-h-[85vh]'
                    }`}
                >
                    {/* first column:Registration Form*/}
                    <div
                        className="col-span-11 flex  items-center justify-center bg-gray-100"
                        style={{ height: 'inherit' }}
                    >
                        <div className="w-11/12 h-[90%]">
                            {components[currentStep]}
                        </div>
                    </div>
                    {/* Second column*/}
                    {isLargeScreen && (
                        <ProgressSectionUB currentStep={currentStep} />
                    )}
                </div>
            </div>
        </>
    );
};
