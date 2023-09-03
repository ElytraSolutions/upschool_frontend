import { userData } from '../../data/NavbarBoxData';
import ProfileIcon from '../../parts/PartsNavbar/ProfileIcon';
import { NavLink, Navigate } from 'react-router-dom';
import { NavbarBox as Box } from '../../parts/PartsNavbar/NavbarBox';
import useUser from '../../hooks/useUser';

const LargeScreenRightCornerBarAfterLogin = () => {
    const { user } = useUser();
    if (!user) {
        return <Navigate to="/login" />;
    }
    const userData = {
        id: 1,
        title: user.first_name + ' ' + user.last_name,
        children: [
            { title: 'Dashboard', path: '/dashboard' },
            { title: 'Logout', path: '/logout' },
        ],
    };
    return (
        <>
            <span className="">
                <NavLink to="/dashboard">
                    <ProfileIcon />
                </NavLink>
            </span>
            <Box key={userData.id} inf={userData} />
        </>
    );
};

export { LargeScreenRightCornerBarAfterLogin };
