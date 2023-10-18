export default interface ILesson {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    slug: string;
    chapter_id: number;
    priority: number;
    active: boolean;
    isCompleted: boolean;
}
