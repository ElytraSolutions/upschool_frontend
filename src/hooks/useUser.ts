import { useState, useCallback } from 'react';
import axiosInstance from '../config/Axios';
import { IUser } from '../types/IUser';
import { AxiosError } from 'axios';

function useUser() {
    const storedUser = localStorage.getItem('user');
    const oldUser =
        storedUser === null || storedUser === 'undefined'
            ? null
            : JSON.parse(storedUser);
    const [user, setUser] = useState<IUser | null>(oldUser);
    const refresh = useCallback(async () => {
        try {
            const res = await axiosInstance.get('/data/user');
            let dbUser: IUser | null = null;
            if (res.status === 200) {
                dbUser = res.data as IUser;
            }
            dbUser ? setUser({ ...dbUser }) : setUser(null);
            localStorage.setItem('user', JSON.stringify(dbUser));
        } catch (error) {
            if ((error as AxiosError).response?.status === 401) {
                localStorage.removeItem('user');
                setUser(null);
            } else {
                console.error('From useUser', error);
            }
        }
    }, []);
    if (storedUser === 'undefined') {
        refresh();
    }
    return { user, refresh };
}

export default useUser;
