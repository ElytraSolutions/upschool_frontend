import { useNavigate } from 'react-router-dom';
const CertificateThanks = () => {
    const naviagte = useNavigate();
    return (
        <div className="font-kumbh text-theme-color md:text-[1.2rem] text-[1rem]">
            <h1>
                Thank you for your submission. We will send you an email with
                the certificate in 2 business days. Please check your spam or
                other inboxes. If you did not receive a certificate, please
                email us at{' '}
                <span className="underline cursor-pointer">
                    hello@upschool.co.
                </span>
            </h1>
            <div
                className="underline mt-16 sm:text-[1.1rem] text-[1rem] cursor-pointer"
                onClick={() => naviagte('/')}
            >
                Return To Homepage
            </div>
        </div>
    );
};

export default CertificateThanks;
