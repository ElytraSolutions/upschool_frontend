import { Navigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';

const ProtectRoute = ({ children }) => {
    const { user } = useUser();
    if (!user) {
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
};

export default ProtectRoute;
