import { useState } from 'react';
import useScreenWidth from '../../hooks/useScreenWidth';
import { UploadBookStep1 as UBStep1 } from './UploadBookStep1';
import { UploadBookStep2 as UBStep2 } from './UploadBookStep2';
import { UploadBookStep3 as UBStep3 } from './UploadBookStep3';
import { UploadBookProgressSection as ProgressSectionUB } from '../../parts/PartsUploadBook/UploadBookProgressSection';
import axiosInstance from '../../config/Axios';

const options = [
    'Accepting Differences',
    'Compassion for Others',
    'Empathy',
    'Family',
    'Generosity and Sharing',
    'Hard Work',
    'Honesty and Trust',
    'Imagination and Exploring Possibiities',
    'Loss and Grief',
    'Loyality and Dedication',
    'Peace on Earth',
    'Racism and Injustice',
    'Self-Control',
    'Value and Power of Friendship',
    'Bravery and Courage',
    'Education',
    'Fairness and Equity',
    'Friendships',
    'Growing Up',
    'Holidays and Traditions',
    'Hope for the Future',
    'Perseverance and Persistence',
    'Kindness',
    'Love',
    'Making a Difference',
    'Teamwork and Collaboration',
    'School Live',
];
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
            options={options}
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
                className={`flex justify-center items-center bg-gray-200 py-4 max-h-[90vh] `}
            >
                {/*Layout*/}
                <div
                    className={`grid ${
                        isLargeScreen
                            ? 'grid-cols-16 h-[75vh] '
                            : 'grid-cols-11 h-[67vh]'
                    } gap-0 w-[90vw] xl:w-[60vw] `}
                >
                    {/* first column:Registration Form*/}
                    <div
                        className="col-span-11 flex  items-center justify-center  overflow-y-auto bg-gray-100 "
                        style={{ height: 'inherit' }}
                    >
                        <div className="w-11/12 h-full ">
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
