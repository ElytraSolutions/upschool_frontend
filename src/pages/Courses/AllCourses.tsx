import CourseCard from '../../components/Cards/CourseCard';
import useCourses from '../../hooks/useCourses';
import useCourseCategories from '../../hooks/useCourseCategories';
// import { ICourseCategory } from '../../types/ICourseCategory';
import Loading from '../../components/Loading';
import { useEffect, useRef, useState } from 'react';
import { ICourse } from '../../types/ICourse';

interface CategoryData {
    categoryName: string;
    categoryId: number;
    courses: ICourse[];
}

function AllCourses() {
    const categories = useCourseCategories();
    const courses = useCourses();
    const dynamicRef = useRef<HTMLElement | null>(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [courseData, setCourseData] = useState<CategoryData[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (categories && courses) {
            const data = categories.map((category) => ({
                categoryName: category.name,
                categoryId: getCategoryId(category),
                courses: getCoursesByCategory(category.id),
            }));
            setCourseData(data);
            console.log('courseData', courseData);
            setDataLoaded(true);
        }
    }, [categories, courses]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const hashValue = window.location.hash.substring(1);

        if (hashValue && document.getElementById(hashValue)) {
            dynamicRef.current = document.getElementById(hashValue);
            if (dynamicRef.current) {
                dynamicRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }
    }, [categories, dataLoaded]);

    if (!categories || !courses) return <Loading />;
    categories.sort((a, b) => a.id - b.id);
    const getCoursesByCategory = (categoryId: number) => {
        return courses.filter(
            (course) => course.course_category_id === categoryId,
        );
    };
    const getCategoryId = (category) => {
        return category.name.replace(/\s+/g, '-').toLowerCase();
    };

    return (
        <>
            <div className="h-full w-full">
                <div className="bg-gradient-to-b text-white from-[#242254] to-[#b81242] flex flex-col justfy-center items-center p-24">
                    <h1 className="text-[2.4rem] text-center font-bold font-kumbh w-[90vw]">
                        Explore Upschool's Courses
                    </h1>
                    <div className="flex flex-wrap mt-4 justify-center min-w-[20rem]">
                        {categories.map((category) => (
                            <div className="py-2" key={category.id}>
                                <a
                                    href={`#${getCategoryId(category)}`}
                                    className="px-4 border-r-2 sm:text-base text-[0.8rem]"
                                >
                                    {category.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div
                    id="10-weeks"
                    className="my-10 h-full  md:max-w-6xl mx-auto "
                >
                    {categories.map((category) => (
                        <div
                            className="p-4 h-full"
                            key={category.id}
                            id={getCategoryId(category)}
                        >
                            <h1 className="text-[1.8rem] font-kumbh  text-font-color font-bold">
                                {category.name}
                            </h1>
                            <div className="grid lg:justify-items-start justify-items-center md:grid-cols-2 xm:grid-cols-1 lg:grid-cols-3  py-2 gap-2 xm:gap-4 md:gap-x-2">
                                {getCoursesByCategory(category.id).map(
                                    (data) => {
                                        return (
                                            <div
                                                className="py-4 px-0 w-fit"
                                                key={data.id}
                                            >
                                                <CourseCard
                                                    key={data.name}
                                                    data={data}
                                                />
                                            </div>
                                        );
                                    },
                                )}
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="my-10 h-full  md:max-w-6xl mx-auto ">
                    <div className="p-4 h-full">
                        {courseData.map((course) => (
                            <div
                                id={String(course.categoryId)}
                                className="p-4 h-full"
                            >
                                <h1 className="text-[1.8rem] font-kumbh  text-font-color font-bold">
                                    {course.categoryName}
                                </h1>
                                <div className="grid lg:justify-items-start justify-items-center md:grid-cols-2 xm:grid-cols-1 lg:grid-cols-3  py-2 gap-2 xm:gap-4 md:gap-x-2">
                                    {course.courses.map((data) => {
                                        return (
                                            <div>
                                                <CourseCard
                                                    key={data.name}
                                                    data={data}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllCourses;
