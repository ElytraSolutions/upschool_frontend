import LoggedProfileBox from './LoggedProfileBox';
// import { SmallScreenRightCornerBarAfterLogin as AfterLoginSS } from './SmallScreenRightCornerBarAfterLogin';
import { SmallScreenRightCornerBarBeforeLogin as BeforeLoginSS } from './SmallScreenRightCornerBarBeforeLogin';
import { userData } from '../../data/NavbarBoxData';

type LogInProps = {
    isLoggedIn: boolean;
    setIsopen: any;
};

const SmallScreenRightCornerBar = ({ isLoggedIn, setIsopen }: LogInProps) => {
    return (
        <>
            {isLoggedIn ? (
                <LoggedProfileBox inf={userData} />
            ) : (
                <BeforeLoginSS />
            )}
            <span
                onClick={() => {
                    setIsopen((oldstate: boolean) => !oldstate);
                    // disables background scrolling when modal is opened
                    if (typeof window != 'undefined' && window.document) {
                        document.body.style.overflow = 'hidden';
                    }
                }}
            >
                <svg //hamburger
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-7 w-7 xm:w-8 xm:h-8 text-theme-color xm:text-white hover:cursor-pointer scale-125  md:ml-2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </span>
        </>
    );
};

export { SmallScreenRightCornerBar };
