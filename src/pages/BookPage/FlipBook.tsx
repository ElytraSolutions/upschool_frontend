// import { useState } from 'react';
import PageFlip from 'react-pageflip';

import { books } from '../../data/LibraryBooks';
import { useState } from 'react';

const FlipBook = () => {
    const [book, _] = useState(books);
    // const [currentPage, setCurrentPage] = useState(0);
    // const pageTurnAudio = new Audio(
    //     '../../../public/audio/BookPage/pageturn.mp3',
    // );

    const OnFlip = () => {
        // pageTurnAudio.play();
        // console.log('Audio');
    };

    return (
        <>
            <PageFlip
                className=""
                style={{}}
                width={200}
                height={200}
                autoSize={true}
                maxShadowOpacity={1}
                // onFlip={OnFlip}
                startPage={0}
                showCover={true}
                minWidth={200}
                maxWidth={400}
                size="stretch"
                minHeight={10}
                maxHeight={100}
                flippingTime={1000}
                drawShadow={true}
                usePortrait={true}
                startZIndex={0}
                mobileScrollSupport={true}
                swipeDistance={30}
                clickEventForward={false}
                useMouseEvents={true}
                showPageCorners={false}
                disableFlipByClick={false}
                onFlip={OnFlip}
            >
                {book.map((page, index) => {
                    return (
                        <div className="h-full w-full border-x-2 border-gray-300">
                            <img
                                className="h-full w-full object-cover"
                                src={page.image}
                            />
                            <div
                                className={`absolute text-xs bottom-[5px] right-[5px] text-white ${
                                    index == 0 || index == book.length - 1
                                        ? 'hidden'
                                        : ''
                                }`}
                            >
                                {index} of {books.length - 2}
                            </div>
                        </div>
                    );
                })}
            </PageFlip>
        </>
    );
};

export default FlipBook;
