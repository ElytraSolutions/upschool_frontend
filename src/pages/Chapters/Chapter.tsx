import OpenBook from '../../assets/OpenBook.png';
import Sidebar from '../../parts/PartsChapters/Sidebar';
const detail = [
    {
        title: 'Lesson Resources',
        subtitle: [
            'Learning Sequence 1',
            'Learning Sequence 2',
            'Learning Sequence 3',
            'Learning Sequence 4',
        ],
    },
    {
        title: 'Completing the course',
        subtitle: [
            'Reflection(<8 yrs)',
            'Reflection(8+ yrs)',
            'Completing this course',
        ],
    },
];
export default function Chapter() {
    return (
        <div className="grid grid-cols-4 h-[90vh]">
            <div className="col-span-1 w-11/12">
                <div className="flex flex-row justify-center items-center bg-red-600 w-full">
                    <div className="flex flex-row items-center justify-center text-white w-fit gap-1  h-14">
                        <span className=" ">
                            <img
                                src={OpenBook}
                                width="25"
                                height="25"
                                alt="OpenBook"
                            />
                        </span>
                        <h3>Lesson List</h3>
                    </div>
                </div>
                <div className="overflow-y-auto">
                    {detail.map((section, index) => (
                        <Sidebar key={index} section={section} />
                    ))}
                </div>
            </div>
        </div>
    );
}
