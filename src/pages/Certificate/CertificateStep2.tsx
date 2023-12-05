import { useState } from 'react';

import CertificateStep2Choose from './CertificateStep2Choose';
import CertificateSendFile from './CertificateSendFile';

const CertificateStep2 = ({ changeCurrentStep }) => {
    const [option, setOption] = useState(null);
    const [canvaLink, setCanvaLink] = useState(null);
    const isUrlValid = (url) => {
        // Regular expression for a simple URL validation
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(url);
    };
    const components = [
        <CertificateStep2Choose setOption={setOption} option={option} />,
        <CertificateSendFile
            option={option}
            setCanvaLink={setCanvaLink}
            canvaLink={canvaLink}
            isUrlValid={isUrlValid}
        />,
    ];
    const [currentSubmitYourWorkStep, setCurrentSubmitYourWorkStep] =
        useState(0);

    const handleNext = () => {
        if (option) {
            if (currentSubmitYourWorkStep < 1) {
                console.log('called');
                setCurrentSubmitYourWorkStep(currentSubmitYourWorkStep + 1);
            } else if (canvaLink && isUrlValid(canvaLink)) {
                console.log('Submit Your Work');
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
