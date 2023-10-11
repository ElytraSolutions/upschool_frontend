import { useState } from 'react';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import { UploadBookStep1 as UBStep1 } from './UploadBookStep1';
import { UploadBookStep2 as UBStep2 } from './UploadBookStep2';
import { UploadBookStep3 as UBStep3 } from './UploadBookStep3';
import { UploadBookStep4 as UBStep4 } from './UploadBookStep4';
import { UploadBookStep5 as UBStep5 } from './UploadBookStep5';
import { UploadBookStep6 as UBStep6 } from './UploadBookStep6';
import { UploadBookProgressSection as ProgressSectionUB } from '../../parts/PartsUploadBook/UploadBookProgressSection';
import BookUpdated from './BookUpdated';
// import axiosInstance from '../../config/Axios';

export default function UploadBook() {
    const { isLargeScreen } = useScreenWidthAndHeight(); //min-width=768px
    const [isUploadBookCompleted, setIsUploadBookCompleted] =
        useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [currentData, setCurrentData] = useState<Record<string, any>>({
        first_name: '',
        last_name: '',
        school_name: '',
        country: '',
        date_of_birth: '',
        email: '',
        book_title: '',
        book_description: '',
        canva_book_link: '',
        file: '',
        categories: [],
        project: '',
    });
    const components = [
        <UBStep1
            isLargeScreen={isLargeScreen}
            oldValues={currentData}
            submitHandler={async (data, onSubmitProps) => {
                // console.log(data);
                setCurrentData((oldValue) => {
                    return { ...oldValue, ...data };
                });
                onSubmitProps.resetForm();
                setCurrentStep((oldStep) => oldStep + 1);
            }}
        />,
        <UBStep2
            isLargeScreen={isLargeScreen}
            oldValues={currentData}
            submitHandler={async (data, onSubmitProps) => {
                // console.log(data);
                setCurrentData((oldValue) => {
                    return { ...oldValue, ...data };
                });
                onSubmitProps.resetForm();
                setCurrentStep((oldStep) => oldStep + 1);
            }}
        />,
        <UBStep3
            isLargeScreen={isLargeScreen}
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
        <UBStep4
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
        <UBStep5
            oldValues={currentData}
            submitHandler={async (data, onSubmitProps) => {
                setCurrentData((oldValue) => {
                    return { ...oldValue, ...data };
                });
                onSubmitProps.resetForm();
                setCurrentStep((oldStep) => oldStep + 1);
            }}
            backHandler={(data) => {
                setCurrentData((oldValue) => {
                    return { ...oldValue, ...data };
                });
                setCurrentStep(1);
            }}
        />,
        <UBStep6
            oldValues={currentData}
            submitHandler={async (data, onSubmitProps) => {
                const fullData = { ...currentData, ...data };
                // const csrfResp = await axiosInstance.get(
                //     '/sanctum/csrf-cookie',
                // );
                // axiosInstance.defaults.headers['X-XSRF-TOKEN'] =
                //     csrfResp.data.csrfToken;
                // await axiosInstance.post('/auth/register', fullData);
                console.log(fullData);
                onSubmitProps.resetForm();
                setIsUploadBookCompleted(true);
            }}
        />,
    ];
    return (
        <>
            {isUploadBookCompleted ? (
                <BookUpdated
                    setIsUploadBookCompleted={setIsUploadBookCompleted}
                    setCurrentStep={setCurrentStep}
                    setCurrentData={setCurrentData}
                />
            ) : (
                <div
                    className={`flex justify-center items-center bg-gray-200 py-4 px-2 h-full w-full`}
                >
                    {/* w-[90vw] xl:w-[75vw] 2xl:w-[60vw] h-[67vh] xs:h-[60vh] xm:h-[65vh] md:h-[70vh] tab:h-[75vh] */}
                    {/*Layout*/}
                    <div
                        className={`grid ${
                            isLargeScreen
                                ? 'grid-cols-16 ' // h-[75vh]
                                : 'grid-cols-11' // h-[67vh]
                        } gap-0 w-fit h-fit`}
                    >
                        {/* first column:Upload Book Form*/}
                        <div className="col-span-11 flex  items-center justify-center w-full h-full  bg-gray-100 ">
                            <div className="relative w-11/12 h-fit py-3 ">
                                {components[currentStep]}
                            </div>
                        </div>
                        {/* Second column*/}
                        {isLargeScreen && (
                            <ProgressSectionUB currentStep={currentStep} />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
