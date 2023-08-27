import { NavLink } from 'react-router-dom';
export default function LoginPart() {
    return (
        <div className=" row-start-13 row-span-2 text-white grid grid-cols-10 content-center w-full">
            <div className="col-start-2 col-end-10 text-sm ">
                Already have an account ?{' '}
                <NavLink to={'/demo'} className="text-base">
                    <u>
                        <b>Log in</b>
                    </u>
                </NavLink>
            </div>
        </div>
    );
}
