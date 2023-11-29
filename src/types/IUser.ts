export interface IUser {
    id: number;
    email: string;
    avatar: string;
    first_name: string;
    last_name: string;
    country: string;
    type: {
        id: number;
        name: string;
        image: string;
        created_at: string;
        updated_at: string;
    };
}
