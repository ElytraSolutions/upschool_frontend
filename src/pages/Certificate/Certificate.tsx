import { useState } from 'react';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import { CertificateProgressSection } from '../../parts/PartsCertificate/CertificateProgressSection';
import CertificateStep1 from './CertificateStep1';
import CertificateStep2 from './CertificateStep2';
import CertificateStep3 from './CertificateStep3';

const Certificate = () => {

    const [formData, setFormData] = useState({
        course : "",
        firstName : "",
        lastName : "",
        email:"",
        county:"",
        age:"",
        school:""
    })
    const { isLargeScreen } = useScreenWidthAndHeight();
    const [currentStep, setCurrentStep] = useState(0);

    const changeCurrentStep = () => {
        setCurrentStep(currentStep+1)
    }

    const components = [
        <CertificateStep1 formData = {formData} setFormData = {setFormData} changeCurrentStep = {changeCurrentStep}/>,
        <CertificateStep2 changeCurrentStep = {changeCurrentStep}/>,
        <CertificateStep3 formData = {formData} setFormData={setFormData}/>
        ]


    // console.log("CurrentS Step is : ",currentStep)
    return (
        <div>
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
                    } gap-0  w-[95%] sm:w-[90vw] md:w-[80vw]  lg:w-[75vw] 2xl:w-[65vw] h-fit`}
                >
                    {/* first column:Upload Book Form*/}
                    <div className="col-span-11 flex  items-center justify-center w-full h-full  bg-gray-100 ">
                        <div className="relative w-11/12 h-fit py-3 ">
                            {components[currentStep]}
                        </div>
                    </div>
                    {isLargeScreen && <CertificateProgressSection currentStep={currentStep}/>}
                </div>
            </div>
        </div>
    );
};

export default Certificate;