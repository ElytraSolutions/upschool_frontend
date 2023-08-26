import { useEffect, useState } from 'react';
import axiosInstance from '../config/axios';
import { ICourseCategory } from '../types/ICourseCategory';

function useCourseCategories() {
    const [categories, setCategories] = useState<ICourseCategory[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await axiosInstance.get('/api/courseCategories');
                setCategories(res.data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return categories;
}

export default useCourseCategories;
