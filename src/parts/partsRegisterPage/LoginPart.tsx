import { NavLink } from 'react-router-dom';
export default function LoginPart() {
    return (
        <div>
            <span className="">Already have an account ?</span>
            <NavLink to={'/demo'} className="text-base inline-block">
                <u>
                    <b>Log in</b>
                </u>
            </NavLink>
        </div>
    );
}
