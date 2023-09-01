export interface ICourse {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    slug: string;
    intro: string;
    starredText: string;
    image: string;
    theme: string;
    description: string;
    active: true;
    course_category_id: number;
    tagline: string;
    thumbnail: string;
}
