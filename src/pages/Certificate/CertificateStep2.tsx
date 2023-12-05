import { useState } from 'react';

import CertificateStep2Choose from './CertificateStep2Choose';
import CertificateSendFile from './CertificateSendFile';

const CertificateStep2 = ({ changeCurrentStep }) => {
    const [option, setOption] = useState(null);
    const [canvaLink, setCanvaLink] = useState('');
    const components = [
        <CertificateStep2Choose setOption={setOption} option={option} />,
        <CertificateSendFile
            option={option}
            setCanvaLink={setCanvaLink}
            canvaLink={canvaLink}
        />,
    ];
    const [currentSubmitYourWorkStep, setCurrentSubmitYourWorkStep] =
        useState(0);

    const handleNext = () => {
        if (currentSubmitYourWorkStep < 1) {
            console.log('called');
            setCurrentSubmitYourWorkStep(currentSubmitYourWorkStep + 1);
        } else {
            console.log('Submit Your Work');
            changeCurrentStep();
        }
    };
    return (
        <div className="w-full h-full">
            <div className="">{components[currentSubmitYourWorkStep]}</div>
            <div className="flex w-full justify-end">
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
