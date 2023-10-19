import { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HTMLFlipBook from 'react-pageflip';
import crossmark from '../../assets/CrossMark.png';

const ChapterMedia = ({ contentType, chapter }) => {
    const [videoPlatform, setVideoPlatform] = useState('youtube'); //type of video platform [youtube, vimeo]
    const [videoUrl, setVideoUrl] = useState(chapter.media.youtubeId); //video url
    const [showPopUp, setShowPopUp] = useState(false); //show pop up when click on image or caurosel

    //disable scroll
    useEffect(() => {
        if (showPopUp) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'visible';
    }, [showPopUp]);

    return (
        <div className="w-full h-full flex justify-center items-center">
            {contentType === 'image' ? (
                <img
                    className="w-3/4"
                    src={chapter.media.image}
                    onClick={() => {
                        setShowPopUp(true);
                    }}
                ></img>
            ) : contentType === 'video' ? (
                <div className="flex flex-col w-full h-full">
                    {/* select buttons */}
                    <div className="flex w-full h-16 ">
                        {/* youtube */}
                        <div className="w-1/2 flex flex-col items-center gap-0 ">
                            <div
                                className={`${
                                    videoPlatform === 'youtube'
                                        ? 'bg-red-upschool text-white'
                                        : 'bg-gray-200 text-black hover:bg-slate-400 hover:text-white'
                                } w-full flex-row flex items-center justify-center h-10 text-sm font-semibold cursor-pointer gap-2`}
                                onClick={() => {
                                    setVideoPlatform('youtube');
                                    setVideoUrl(chapter.media.youtubeId);
                                }}
                            >
                                <svg
                                    width="25"
                                    height="18"
                                    viewBox="0 0 25 18"
                                    className={`${
                                        videoPlatform === 'youtube'
                                            ? 'fill-current text-white'
                                            : 'fill-current text-black'
                                    } hover:fill-white `}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M24.4776 2.75038C24.1901 1.66777 23.3429 0.815139 22.2673 0.525787C20.3177 0 12.5 0 12.5 0C12.5 0 4.68232 0 2.73266 0.525787C1.65706 0.815184 0.80992 1.66777 0.522399 2.75038C0 4.71267 0 8.80681 0 8.80681C0 8.80681 0 12.901 0.522399 14.8632C0.80992 15.9459 1.65706 16.763 2.73266 17.0523C4.68232 17.5781 12.5 17.5781 12.5 17.5781C12.5 17.5781 20.3177 17.5781 22.2673 17.0523C23.3429 16.763 24.1901 15.9459 24.4776 14.8632C25 12.901 25 8.80681 25 8.80681C25 8.80681 25 4.71267 24.4776 2.75038ZM9.94316 12.524V5.08964L16.4772 8.8069L9.94316 12.524Z" />
                                </svg>
                                Youtube
                            </div>
                            <div
                                className={`${
                                    videoPlatform === 'youtube'
                                        ? 'block'
                                        : 'hidden'
                                } w-0 h-0 border-r-8 border-l-8 border-t-8 border-r-transparent border-l-transparent border-red-upschool`}
                            ></div>
                        </div>
                        {/* vimeo */}
                        <div className="w-1/2 flex flex-col items-center gap-0">
                            <div
                                className={`${
                                    videoPlatform === 'vimeo'
                                        ? 'bg-red-upschool text-white'
                                        : 'bg-gray-200 text-black hover:bg-slate-400 hover:text-white'
                                } w-full flex-row flex items-center justify-center h-10 text-sm font-semibold cursor-pointer gap-2`}
                                onClick={() => {
                                    setVideoPlatform('vimeo');
                                    setVideoUrl(chapter.media.vimeoId);
                                }}
                            >
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    className={`${
                                        videoPlatform === 'vimeo'
                                            ? 'fill-current text-white'
                                            : 'fill-current text-black'
                                    } hover:fill-white `}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M22.5 0H2.5C1.12165 0 0 1.12165 0 2.5V22.5C0 23.8783 1.12165 25 2.5 25H22.5C23.8783 25 25 23.8783 25 22.5V2.5C25 1.12165 23.8783 0 22.5 0ZM21.0379 8.30357C20.9598 10.0614 19.7321 12.4721 17.3549 15.5246C14.8996 18.7165 12.8181 20.3125 11.1217 20.3125C10.067 20.3125 9.17969 19.3415 8.44866 17.394C7.02567 12.1875 6.41741 9.13504 5.24554 9.13504C5.11161 9.13504 4.63728 9.41964 3.82812 9.98326L2.97991 8.88951C5.06138 7.05915 7.04799 5.0279 8.29241 4.91629C9.69866 4.78237 10.5636 5.74219 10.8873 7.80134C12.0424 15.1228 12.5558 16.2277 14.6596 12.9129C15.4129 11.7187 15.8203 10.8092 15.8761 10.1842C16.0714 8.33147 14.4308 8.45982 13.3203 8.93415C14.2076 6.02679 15.904 4.61496 18.4096 4.69308C20.2679 4.7433 21.144 5.94866 21.0379 8.30357Z" />
                                </svg>
                                Vimeo
                            </div>
                            <div
                                className={`${
                                    videoPlatform === 'vimeo'
                                        ? 'block'
                                        : 'hidden'
                                } w-0 h-0 border-r-8 border-l-8 border-t-8 border-r-transparent border-l-transparent border-red-upschool`}
                            ></div>
                        </div>
                    </div>

                    {/* video */}
                    <div className="w-full h-[50vh]">
                        <iframe
                            className="w-full h-full"
                            src={videoUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                </div>
            ) : contentType === 'flipbook' ? (
                <div>
                    <HTMLFlipBook
                        minWidth={150}
                        width={250}
                        maxWidth={200}
                        minHeight={250}
                        height={250}
                        maxHeight={250}
                        style={{}}
                        startPage={0}
                        usePortrait={false}
                        drawShadow={false}
                        flippingTime={1000}
                        startZIndex={0}
                        autoSize={true}
                        clickEventForward={false}
                        useMouseEvents={true}
                        swipeDistance={30}
                        showPageCorners={false}
                        disableFlipByClick={false}
                        size="stretch"
                        maxShadowOpacity={0.5}
                        showCover={false}
                        mobileScrollSupport={false}
                        onFlip={() => {}}
                        onChangeOrientation={() => {}}
                        onChangeState={() => {}}
                        className="demo-book"
                    >
                        {chapter.media.images.map((image) => (
                            <div className="h-full w-full">
                                {/* <h1>page {index + 1}</h1> */}
                                <img
                                    src={image}
                                    className="object-cover h-full w-full "
                                />
                            </div>
                        ))}
                    </HTMLFlipBook>
                </div>
            ) : contentType === 'carousel' ? (
                <div>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        emulateTouch={true}
                    >
                        {chapter.media.images.map((image) => (
                            <div
                                className="h-max-[30vh]"
                                onClick={() => {
                                    setShowPopUp(true);
                                }}
                            >
                                <img src={image} alt="cau" />
                            </div>
                        ))}
                    </Carousel>
                </div>
            ) : (
                <div>error</div>
            )}
            <div
                className={`${
                    showPopUp ? 'block' : 'hidden'
                } fixed top-0 left-0 z-10 w-screen h-screen bg-[#727374ae]  flex justify-center items-center gap-0`}
            >
                <div className="w-[40vw] h-[80vh] relative flex justify-center">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showArrows={false}
                        showStatus={false}
                        emulateTouch={true}
                        className=" w-[40vw]  h-full flex justify-center"
                    >
                        {contentType === 'image' ? (
                            <img
                                src={chapter.media.image}
                                className="object-contain max-h-[80vh]"
                            />
                        ) : contentType === 'carousel' ? (
                            chapter.media.images.map((image) => (
                                <div className="h-full">
                                    <img
                                        src={image}
                                        alt="cau"
                                        className="object-contain max-h-[80vh]"
                                    />
                                </div>
                            ))
                        ) : (
                            ''
                        )}
                    </Carousel>
                    <div
                        className="absolute top-[-25px] right-30 cursor-pointer hover:scale-125 transition"
                        onClick={() => {
                            setShowPopUp(false);
                        }}
                    >
                        <img src={crossmark} alt="cross" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChapterMedia;
