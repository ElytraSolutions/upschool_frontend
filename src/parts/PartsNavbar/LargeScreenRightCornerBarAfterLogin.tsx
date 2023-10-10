import { Navigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import LoggedProfileBox from './LoggedProfileBox';
import { userData } from '../../data/NavbarBoxData';

const LargeScreenRightCornerBarAfterLogin = () => {
    const { user } = useUser();
    if (!user) {
        return <Navigate to="/login" />;
    }

    const name = `${user.first_name} ${user.last_name}`;

    return (
        <>
            <LoggedProfileBox inf={userData} name={name} />
        </>
    );
};

export { LargeScreenRightCornerBarAfterLogin };
