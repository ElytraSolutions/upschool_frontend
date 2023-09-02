import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axiosInstance from '../../config/Axios';
import useUser from '../../hooks/useUser';

function Logout() {
    const [success, setSuccess] = useState(false);
    const { user, refresh } = useUser();
    if (!user || !user.id) {
        return <Navigate to="/" />;
    }
    useEffect(() => {
        (async () => {
            const resp = await axiosInstance.post('/auth/logout/');
            if (!resp.data?.success) {
                console.log(resp.data);
            }
            setSuccess(true);
            await refresh();
        })();
    }, [refresh]);
    if (!success) {
        return <div>Logging out...</div>;
    }
    return <Navigate to="/" />;
}

export default Logout;
