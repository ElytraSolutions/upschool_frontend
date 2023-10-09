import { NavLink } from 'react-router-dom';
const SmallScreenRightCornerBarAfterLogin = () => {
    return (
        <span className="group/bar w-7 h-7 xm:w-9 xm:h-9">
            <span className="relative flex items-center justify-center w-full h-full overflow-hidden rounded-full ">
                {/* */}
                <svg //imported from tailwind components templates user
                    className="h-5 w-5 xm:w-8 xm:h-8 text-gray-400 -left-0.5 hover:cursor-pointer"
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
            <ul className="bg-white rounded-md transform scale-0 group-hover/bar:scale-100 absolute transition duration-150 ease-in-out origin-top -translate-x-7 overflow-hidden">
                <li className="hover:bg-red-upschool p-0.5">
                    <NavLink to="login">Profile</NavLink>
                </li>
                <li className="hover:bg-red-upschool p-0.5">
                    <NavLink to="register">upSchool</NavLink>
                </li>
            </ul>
        </span>
    );
};
export { SmallScreenRightCornerBarAfterLogin };
