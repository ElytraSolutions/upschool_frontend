import { NavLink } from 'react-router-dom';

const SmallScreenRightCornerBarBeforeLogin = () => {
    return (
        <span className="group/bar w-9 h-9">
            <span className="relative w-full h-full overflow-hidden bg-gray-100 rounded-full hover:cursor-pointer ">
                {' '}
                {/* dark:bg-gray-600*/}
                <svg //imported from tailwind components templates user
                    className="w-8 h-8 text-white -left-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </span>
            <ul className="bg-white border rounded-md transform scale-0 group-hover/bar:scale-100 absolute transition duration-150 ease-in-out origin-top -translate-x-7 overflow-hidden">
                <li className="hover:bg-red-700">
                    <NavLink to="login">Login</NavLink>
                </li>
                <li className="hover:bg-red-700">
                    <NavLink to="register">register</NavLink>
                </li>
            </ul>
        </span>
    );
};
export { SmallScreenRightCornerBarBeforeLogin };
