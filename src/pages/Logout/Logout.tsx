import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/Axios';
import useUser from '../../hooks/useUser';

function Logout() {
    const { user, refresh } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if (!user || !user.id) {
                return;
            }
            try {
                await axiosInstance.get('/sanctum/csrf-cookie');
                const resp = await axiosInstance.post('/auth/logout/');
                if (!resp.data?.success) {
                    console.log(resp.data);
                }
                await refresh();
                navigate('/');
            } catch (error) {
                console.error('Error in logout', error);
            }
        })();
    });

    if (!user || !user.id) {
        return <Navigate to="/" />;
    }

    return <div>Logging out...</div>;
}

export default Logout;
