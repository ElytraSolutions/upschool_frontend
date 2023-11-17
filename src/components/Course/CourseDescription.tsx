import { FunctionalIFrameComponent } from './FuncIFrame';
import { useRef, useEffect, useState } from 'react';

function CourseDescription({ editorData, title, subtitle, theme }) {
    const divRef = useRef<any>(null);
    const [dynHeight, setDynHeight] = useState(0);
    useEffect(() => {
        const timerId = setTimeout(() => {
            if (divRef.current) {
                const divHeight = divRef.current.clientHeight;
                // console.log('div height:', divHeight);
                setDynHeight(divHeight + 25);
            }
        }, 3000); // Adjust the timeout duration as needed

        return () => clearTimeout(timerId);
    }, [divRef]);
    return (
        <>
            <div className="grid w-full font-sans text-theme-color">
                <div className="text-[75px] text-center font-semibold">
                    {title}
                </div>
                <div
                    className="text-[24px] text-center font-semibold mb-5"
                    style={{ color: theme }}
                >
                    {subtitle}
                </div>
                <div
                    className="flex w-full justify-center overflow-scroll-hidden"
                    style={{ height: `${dynHeight}px` }}
                >
                    <div className="flex w-[1140px]">
                        <FunctionalIFrameComponent title={title}>
                            <div
                                ref={divRef}
                                dangerouslySetInnerHTML={{
                                    __html: editorData,
                                }}
                            ></div>
                        </FunctionalIFrameComponent>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseDescription;
