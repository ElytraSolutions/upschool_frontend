import resolveImgURL from '../../../utlis/resolveImgURL';
import CourseEnrol from '../../Cards/Course/CourseEnrol';

function CourseTop({ title, subtitle, thumbnail }) {
    return (
        <>
            <div className="flex">
                <div className="w-full grid grid-cols-14">
                    <div className="z-0 col-span-full relative max-h-[328px]">
                        <div className="relative flex">
                            <div className="w-full h-[328px] relative bg-gradient-to-b from-[#242254] to-[#b81242]"></div>
                            <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="grid tab:grid-cols-16 grid-flow-row justify-center">
                                    <div className="tab:col-start-3 col-start-1 col-span-8 grid text-left p-3">
                                        <h2
                                            style={{
                                                textShadow: '1px 1px #000000',
                                            }}
                                            className="tab:text-[53px] md:font-bold text-[43px] drop-shadow-xl font-bold font-kumbh text-white"
                                        >
                                            {title}
                                        </h2>
                                        <h3
                                            style={{
                                                textShadow: '1px 1px #000000',
                                            }}
                                            className="tab:text-base text-sm tracking-wider drop-shadow-xl font-kumbh text-white"
                                        >
                                            {subtitle}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab:-mt-24 -mt-12 col-span-full">
                        <div className="grid tab:grid-cols-16 grid-flow-row gap-y-2 justify-center items-center">
                            <div className="relative tab:col-span-4 tab:col-start-11 row-start-1 tab:h-[496px] h-fit">
                                <div className="flex w-fit justify-center h-fit">
                                    <CourseEnrol
                                        thumbnail={resolveImgURL(thumbnail)}
                                    />
                                </div>
                                {/*using a overlay to keep the container size fix */}
                                {/* <div className="absolute top-0 left-0 w-full h-full bg-white-100 opacity-80"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseTop;
