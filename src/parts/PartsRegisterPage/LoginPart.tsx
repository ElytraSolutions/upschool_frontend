import { NavLink } from 'react-router-dom';
export default function LoginPart() {
    return (
        <div className="mb-4">
            <span className="">Already have an account? </span>
            <NavLink to={'/login'} className="text-base inline-block">
                <u>
                    <b> Log in </b>
                </u>
            </NavLink>
        </div>
    );
}
