import { userData } from '../../data/NavbarBoxData';
import ProfileIcon from '../../parts/PartsNavbar/ProfileIcon';
import { NavLink } from 'react-router-dom';
import { NavbarBox as Box } from '../../parts/PartsNavbar/NavbarBox';

const LargeScreenRightCornerBarAfterLogin = () => {
    return (
        <>
            <span className="">
                <NavLink to="/demo">
                    <ProfileIcon />
                </NavLink>
            </span>
            <Box key={userData.id} inf={userData} />
        </>
    );
};

export { LargeScreenRightCornerBarAfterLogin };
