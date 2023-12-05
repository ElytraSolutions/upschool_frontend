import { useEffect, useState } from 'react';
import Loading from '../../Loading';

function CourseContent({ susDetails, editorData }) {
    const [showDownloadButton, setShowDownloadButton] = useState(false);
    const [downloadHref, setDownloadHref] = useState('');

    useEffect(() => {
        if (editorData !== undefined) {
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

    if (!editorData) return <Loading />;

    console.log(typeof susDetails);

    const updatedEditorData = showDownloadButton
        ? editorData.replace(
              /(<a.*?href="(.*?)">.*?<img.*?>.*?<\/a>)/i,
              `$1<p style="display:flex; justify-content:left; margin-right:20px"><button style="background-color:#B81342" class="course-download-button"><a href="${downloadHref}" style="color:white">download your free teaching program here</a></button></p>`,
          )
        : editorData;

    return (
        <>
            <div className="tab:-mt-[23rem] mt-4 mb-8 grid tab:grid-cols-16 grid-flow-row justify-center items-center">
                <div className="tab:col-start-3 col-span-8 font-kumbh text-theme-color grid gap-y-6 p-3">
                    <div className="flex tab:justify-start justify-center mb-[20px] xs:text-[32px] text-[26px] h-[37px] font-bold font-kumbh">
                        <span
                            style={{
                                color: '#B81342',
                            }}
                        >
                            100% Free{' '}
                            <svg
                                className="-mt-3  w-[10rem]"
                                height="32"
                                viewBox="0 0 793 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="path stroke-[15] "
                                    d="M6 30.7841C21.7883 30.7841 37.2527 30.1065 52.962 28.6204C62.4639 27.7216 72.0356 27.5841 81.5326 26.6043C100.558 24.6413 119.415 21.3537 138.477 19.7198C161.885 17.7134 185.439 17.0059 208.896 15.5399C223.888 14.6029 238.838 12.415 253.841 11.3109C265.953 10.4196 278.022 10.8234 290.133 10.229C308.824 9.31165 327.611 7.50908 346.29 6.93432C371.774 6.1502 397.315 7.36705 422.806 6.83597C462.957 5.9995 503.108 6 543.285 6C578.051 6 612.837 7.70037 647.536 9.98317C674.214 11.7383 701.011 13.7916 727.396 18.5888C730.85 19.2168 733.929 20.8802 737.083 22.3261C741.49 24.346 746.53 24.5308 751.147 25.9158C755.883 27.3366 759.497 28.7439 763.736 31.1284C765.431 32.0818 767.827 31.8197 769.686 32.5544C772.002 33.4701 774.061 34.7369 776.472 35.4066C779.061 36.1258 786.701 42.8755 786.701 37.8653"
                                    stroke="#B81342"
                                    // stroke-width="8"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </span>
                        <span className="text-theme-color">Program</span>
                    </div>
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
                </div>
            </div>
        </>
    );
}

export default CourseContent;
