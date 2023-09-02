import CourseCard from '../../components/Cards/CourseCard';
import useCourses from '../../hooks/useCourses';
import useCourseCategories from '../../hooks/useCourseCategories';
import { ICourseCategory } from '../../types/ICourseCategory';
import Loading from '../../components/Loading';

function AllCourses() {
    const categories = useCourseCategories();
    const courses = useCourses();

    if (!categories || !courses) return <Loading />;
    categories.sort((a, b) => a.id - b.id);
    const getCoursesByCategory = (categoryId: number) => {
        return courses.filter(
            (course) => course.course_category_id === categoryId,
        );
    };
    const getCategoryId = (category: ICourseCategory) => {
        return category.name.replace(/\s+/g, '-').toLowerCase();
    };

    return (
        <>
            <div>
                <div className="bg-gradient-to-b text-[#fff] from-[#242254] to-[#b81242] flex flex-col justfy-center items-center p-24">
                    <h1 className="text-4xl text-center font-bold">
                        Explore Upschool's Courses
                    </h1>
                    <div className="flex flex-wrap mt-4 justify-center">
                        {categories.map((category) => (
                            <div className="py-2" key={category.id}>
                                <a
                                    href={`#${getCategoryId(category)}`}
                                    className="px-4 border-r-2"
                                >
                                    {category.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="10-weeks" className="my-10 md:max-w-6xl mx-auto ">
                    {categories.map((category) => (
                        <div
                            className="p-4"
                            key={category.id}
                            id={getCategoryId(category)}
                        >
                            <h1 className="text-2xl font-bold text-[#242254]">
                                {category.name}
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-4">
                                {getCoursesByCategory(category.id).map(
                                    (data) => (
                                        <div
                                            className="py-4 px-0"
                                            key={data.id}
                                        >
                                            <CourseCard
                                                key={data.name}
                                                data={data}
                                            />
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AllCourses;
