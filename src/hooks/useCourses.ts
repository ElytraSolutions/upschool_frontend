import { useEffect, useState } from 'react';
import axiosInstance from '../config/Axios';
import useCourseCategories from './useCourseCategories';
import { ICourse } from '../types/ICourse';

function useCourses(category: string | null = null) {
    const categories = useCourseCategories();
    const [courses, setCourses] = useState<ICourse[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await axiosInstance.get('/api/courses');
                setCourses(res.data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    if (category) {
        const id = categories.find((c) => c.name === category)?.id;
        return courses.filter((c) => c.course_category_id === id);
    }
    return courses;
}

export default useCourses;
