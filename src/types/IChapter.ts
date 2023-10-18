import ILesson from './ILesson';

export default interface IChapter {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    slug: string;
    course_id: number;
    active: boolean;
    totalLessons: number;
    completedLessons: number;
    lessons: ILesson[];
}
