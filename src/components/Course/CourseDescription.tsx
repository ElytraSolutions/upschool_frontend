// import { FunctionalIFrameComponent } from './FuncIFrame';
// import { useRef } from 'react';

import { useEffect, useState } from 'react';

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
    const [showDownloadButton, setShowDownloadButton] = useState(false);
    const [downloadHref, setDownloadHref] = useState('');

    useEffect(() => {
        if (editorData !== null) {
            //Check if a img tag occurs within a <a> tag... just an assumption...
            const anchorWithImgRegex = /<a.*?href="(.*?)">.*?<img.*?>.*?<\/a>/i;

            //check the occurence of the regex in the editorData
            const contains = editorData.match(anchorWithImgRegex);

            if (contains) {
                const href = contains[1];
                setDownloadHref(href);
                setShowDownloadButton(true);
            } else {
                setShowDownloadButton(false);
            }
        }
    }, [editorData]);
    console.log('download button:   ', showDownloadButton);
    const updatedEditorData = showDownloadButton
        ? editorData.replace(
              /(<a.*?href="(.*?)">.*?<img.*?>.*?<\/a>)/i,
              `$1<p style="display:flex; justify-content:center; margin-left:20px; margin-right:20px"><button style="background-color:${theme}" class="course-download-button"><a href="${downloadHref}" download>download your free teaching program here</a></button></p>`,
          )
        : editorData;
    return (
        <>
            <div className="grid w-full font-sans text-theme-color">
                <div className="md:text-[4.7rem] sm:text-[3.4rem] text-[2.4rem]  text-center font-bold font-kumbh">
                    {title}
                </div>
                <div
                    className="flex text-[24px] xl:w-[1120px] lg:w-[1020px] w-screen text-center justify-center mx-auto font-semibold mb-5"
                    style={{ color: theme }}
                >
                    {subtitle}
                </div>
                <div
                    className={`flex w-full justify-center overflow-y-hidden`}
                    // style={{ height: `${dynHeight}px` }}
                >
                    <div className="flex xl:w-[1120px] lg:w-[1020px] w-screen font-kumbh text-theme-color">
                        {/* <FunctionalIFrameComponent title={title}> */}
                        <div
                            // ref={divRef}
                            style={{ display: 'grid', gap: '1.1rem' }}
                            dangerouslySetInnerHTML={{
                                __html: updatedEditorData
                                    ? updatedEditorData
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
