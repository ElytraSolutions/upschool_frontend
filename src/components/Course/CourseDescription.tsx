// import { FunctionalIFrameComponent } from './FuncIFrame';
// import { useRef } from 'react';

function CourseDescription({ editorData, title, subtitle, theme }) {
    // const divRef = useRef<any>(null);
    // const [dynHeight, setDynHeight] = useState(0);
    // useEffect(() => {
    //     const timerId = setTimeout(() => {
    //         if (divRef.current) {
    //             const divHeight = divRef.current.clientHeight;
    //             console.log('div height;test:', divHeight);
    //             setDynHeight(divHeight + 50);
    //         }
    //     }, 3000);
    //     return () => clearTimeout(timerId);
    // }, [divRef]);

    return (
        <>
            <div className="grid w-full font-sans text-theme-color">
                <div className="md:text-[4.7rem] sm:text-[3.4rem] text-[2.4rem]  text-center font-bold font-kumbh">
                    {title}
                </div>
                <div
                    className="flex xl:w-[1120px] lg:w-[1020px] w-screen text-[24px] text-center font-semibold mb-5"
                    style={{ color: theme }}
                >
                    {subtitle}
                </div>
                <div
                    className={`flex w-full justify-center overflow-y-hidden`}
                    // style={{ height: `${dynHeight}px` }}
                >
                    <div className="flex xl:w-[1120px] lg:w-[1020px] w-screen font-kumbh">
                        {/* <FunctionalIFrameComponent title={title}> */}
                        <div
                            // ref={divRef}
                            style={{ display: 'grid', gap: '1.1rem' }}
                            dangerouslySetInnerHTML={{
                                __html: editorData
                                    ? editorData
                                          .replace(
                                              /<iframe/g,
                                              '<iframe style="width:100%"',
                                          )
                                          .replace(
                                              /<img/g,
                                              '<img style="width:100%" ',
                                          )
                                          .replace(
                                              /<h1|<h2|<h3|<h4/g,
                                              (match) =>
                                                  `${match} class="desc-title"`,
                                          )
                                    : '',
                            }}
                        ></div>
                        {/* </FunctionalIFrameComponent> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseDescription;
