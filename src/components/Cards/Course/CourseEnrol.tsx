import resolveImgURL from '../../../utlis/resolveImgURL';

function CourseEnrol() {
    return (
        <>
            <div className="grid border-1 border-gray-300 rounded-lg overflow-hidden shadow-2xl hover:scale-[1.05] hover:transition hover:duration-200">
                <img
                    src={resolveImgURL('./images/Course/courseEnrol.png')}
                    alt="courseEnrol"
                    className="max-w-[340px] max-h-[408px]"
                />
                <div className="flex justify-center bg-[#F4F4F4] px-9 py-4 w-[340px]">
                    <button className="bg-theme-color text-white px-8 py-2 rounded-sm flex-grow">
                        ENROL NOW
                    </button>
                </div>
            </div>
        </>
    );
}

export default CourseEnrol;
