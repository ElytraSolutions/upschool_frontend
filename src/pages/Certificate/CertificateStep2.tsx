import { useState } from 'react';

import CertificateStep2Choose from './CertificateStep2Choose';
import CertificateSendFile from './CertificateSendFile';
import axiosInstance from '../../config/Axios';

const CertificateStep2 = ({ changeCurrentStep, formData, courseMapping }) => {
    const [option, setOption] = useState(null);
    const [canvaLink, setCanvaLink] = useState('');
    const [fileLink, setFileLink] = useState(null);
    const isUrlValid = (url) => {
        // Regular expression for a simple URL validation
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(url);
    };
    console.log(
        'FormData',
        formData.course,
        'CourseMapping',
        courseMapping[formData.course],
    );
    const components = [
        <CertificateStep2Choose setOption={setOption} option={option} />,
        <CertificateSendFile
            option={option}
            setCanvaLink={setCanvaLink}
            canvaLink={canvaLink}
            isUrlValid={isUrlValid}
            fileLink={fileLink}
            setFileLink={setFileLink}
        />,
    ];
    const [currentSubmitYourWorkStep, setCurrentSubmitYourWorkStep] =
        useState(0);

    const handleSubmit = async () => {
        if (option === 'link') {
            try {
                const resp = await axiosInstance.post(
                    `/data/courses/${courseMapping[formData.course]}/complete`,
                    { coursework_type: option, coursework: canvaLink },
                );
                console.log(resp);
            } catch (error) {
                console.log('Error', error);
            }
        }

        if (option === 'file') {
            try {
                const resp = await axiosInstance.post(
                    `/data/courses/${courseMapping[formData.course]}/complete`,
                    { coursework_type: option, coursework: fileLink },
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    },
                );
                console.log(resp);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleNext = () => {
        if (option) {
            if (currentSubmitYourWorkStep < 1) {
                console.log('called');
                setCurrentSubmitYourWorkStep(currentSubmitYourWorkStep + 1);
            } else if ((canvaLink && isUrlValid(canvaLink)) || fileLink) {
                console.log('Submit Your Work');
                handleSubmit();
                changeCurrentStep();
            }
        }
    };
    const handleBack = () => {
        setCurrentSubmitYourWorkStep(currentSubmitYourWorkStep - 1);
    };
    return (
        <div className="w-full h-full">
            <div className="">{components[currentSubmitYourWorkStep]}</div>
            <div
                className={`flex w-full ${
                    currentSubmitYourWorkStep === 1
                        ? 'justify-between'
                        : 'justify-end'
                } `}
            >
                {currentSubmitYourWorkStep === 1 && (
                    <div
                        className="justify-items-end w-fit bg-theme-color px-4 py-2 text-white cursor-pointer"
                        onClick={handleBack}
                    >
                        Back
                    </div>
                )}
                <div
                    className="justify-items-end w-fit bg-theme-color px-4 py-2 text-white cursor-pointer"
                    onClick={handleNext}
                >
                    Next
                </div>
            </div>
        </div>
    );
};

export default CertificateStep2;
