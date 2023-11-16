import { NavLink } from 'react-router-dom';
import LoginIcon from './LoginIcon';
const LargeScreenRightCornerBarBeforeLogin = () => {
    return (
        <>
            <span className="inline-block ">
                <NavLink to="/login">
                    <LoginIcon />
                </NavLink>
            </span>
            <span className="inline-block text-sm  text-white">
                <NavLink to="/register">Register</NavLink>
            </span>
        </>
    );
};

export { LargeScreenRightCornerBarBeforeLogin };
