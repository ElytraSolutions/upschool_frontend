import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
// import { FunctionalIFrameComponent } from './FuncIFrame';
// import { useRef, useEffect, useState } from 'react';

function CourseTestimonial({ theme, tstData }) {
    const { user } = useUser();
    const [registerHover, setRegisterHover] = useState(false);
    // const divRef = useRef<any>(null);
    // const [dynHeight, setDynHeight] = useState(0);
    // useEffect(() => {
    //     const timerId = setTimeout(() => {
    //         if (divRef.current) {
    //             const divHeight = divRef.current.clientHeight;
    //             console.log('div height:', divHeight);
    //             setDynHeight(divHeight + 35);
    //         }
    //     }, 3000);

    //     return () => clearTimeout(timerId);
    // }, [divRef]);

    const handleHover = () => {
        setRegisterHover((oldstate) => !oldstate);
    };

    return (
        <>
            <div className="grid mt-2">
                <div className="flex justify-center w-full my-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        id="quote-left"
                        transform="rotate(180)"
                        className="w-[50px] h-[50px]"
                    >
                        <path
                            d="M334.125 256h78.125v62.5c0 34.473-28.027 62.5-62.5 62.5h-7.812a23.382 23.382 0 0 0-23.438 23.438v46.875a23.382 23.382 0 0 0 23.438 23.438h7.812c86.328 0 156.25-69.922 156.25-156.25V84.125c0-25.879-20.996-46.875-46.875-46.875h-125c-25.879 0-46.875 20.996-46.875 46.875v125c0 25.879 20.996 46.875 46.875 46.875zm-281.25 0H131v62.5c0 34.473-28.027 62.5-62.5 62.5h-7.812a23.382 23.382 0 0 0-23.438 23.438v46.875a23.382 23.382 0 0 0 23.438 23.438H68.5c86.328 0 156.25-69.922 156.25-156.25V84.125c0-25.879-20.996-46.875-46.875-46.875h-125C26.996 37.25 6 58.246 6 84.125v125C6 235.004 26.996 256 52.875 256z"
                            fill={theme}
                        ></path>
                    </svg>
                </div>
                <div className="font-sans grid justify-center text-center">
                    <div
                        className="flex w-full justify-center overflow-scroll-hidden"
                        // style={{ height: `${dynHeight}px` }}
                    >
                        <div className="flex xl:w-[1120px] lg:w-[1020px] w-screen">
                            {/* <FunctionalIFrameComponent title={''}> */}
                            <div
                                // ref={divRef}
                                dangerouslySetInnerHTML={{
                                    __html: tstData,
                                }}
                                style={{ display: 'grid', gap: '1.1rem' }}
                            ></div>
                            {/* </FunctionalIFrameComponent> */}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full my-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        id="quote-right"
                        className="w-[50px] h-[50px]"
                    >
                        <path
                            d="M334.125 256h78.125v62.5c0 34.473-28.027 62.5-62.5 62.5h-7.812a23.382 23.382 0 0 0-23.438 23.438v46.875a23.382 23.382 0 0 0 23.438 23.438h7.812c86.328 0 156.25-69.922 156.25-156.25V84.125c0-25.879-20.996-46.875-46.875-46.875h-125c-25.879 0-46.875 20.996-46.875 46.875v125c0 25.879 20.996 46.875 46.875 46.875zm-281.25 0H131v62.5c0 34.473-28.027 62.5-62.5 62.5h-7.812a23.382 23.382 0 0 0-23.438 23.438v46.875a23.382 23.382 0 0 0 23.438 23.438H68.5c86.328 0 156.25-69.922 156.25-156.25V84.125c0-25.879-20.996-46.875-46.875-46.875h-125C26.996 37.25 6 58.246 6 84.125v125C6 235.004 26.996 256 52.875 256z"
                            fill={theme}
                        ></path>
                    </svg>
                </div>
                {user === null && (
                    <div className="flex my-2 justify-center mb-8">
                        <Link to="/register">
                            <button
                                className={`rounded-sm font-thin text-[18px] px-11 py-2 hover:scale-[0.95] transition duration-400`}
                                style={{
                                    backgroundColor: registerHover
                                        ? '#ec96b3'
                                        : theme,
                                }}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHover}
                            >
                                REGISTER
                                <span>
                                    <KeyboardArrowRightIcon
                                        style={{ color: '#242254' }}
                                    />
                                </span>
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default CourseTestimonial;
