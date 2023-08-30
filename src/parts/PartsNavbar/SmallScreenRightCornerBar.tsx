import { SmallScreenRightCornerBarAfterLogin as AfterLoginSS } from './SmallScreenRightCornerBarAfterLogin';
import { SmallScreenRightCornerBarBeforeLogin as BeforeLoginSS } from './SmallScreenRightCornerBarBeforeLogin';

type LogInProps = {
    isLoggedIn: boolean;
    setIsopen: any;
};

const SmallScreenRightCornerBar = ({ isLoggedIn, setIsopen }: LogInProps) => {
    return (
        <>
            {isLoggedIn ? <AfterLoginSS /> : <BeforeLoginSS />}
            <span
                onClick={() => {
                    setIsopen((oldstate) => !oldstate);
                }}
            >
                <svg //hamburger
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-white hover:cursor-pointer"
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
