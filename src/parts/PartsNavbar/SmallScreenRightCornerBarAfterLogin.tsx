import { NavLink } from 'react-router-dom';
const SmallScreenRightCornerBarAfterLogin = () => {
    return (
        <span className="group/bar w-9 h-9">
            <span className="relative w-full h-full overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                {' '}
                {/* */}
                <svg //imported from tailwind components templates user
                    className="w-8 h-8 text-gray-400 -left-0.5 hover:cursor-pointer"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </span>
            <ul className="bg-white border rounded-md transform scale-0 group-hover/bar:scale-100 absolute transition duration-150 ease-in-out origin-top -translate-x-7 overflow-hidden">
                <li>
                    <NavLink to="login">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="register">upSchool</NavLink>
                </li>
            </ul>
        </span>
    );
};
export { SmallScreenRightCornerBarAfterLogin };
