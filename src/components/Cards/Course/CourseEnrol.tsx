function CourseEnrol() {
    return (
        <>
            <div className="grid border-2 border-gray-200 rounded-lg overflow-hidden">
                <div>
                    <img
                        src="../../images/Course/courseEnrol.png"
                        alt="courseEnrol"
                        className="w-[340px] h-[408px]"
                    />
                </div>
                <div className="flex justify-center bg-white px-9 py-4">
                    <button className="bg-theme-color text-white px-8 py-2 rounded-sm flex-grow">
                        ENROL NOW
                    </button>
                </div>
            </div>
        </>
    );
}

export default CourseEnrol;
