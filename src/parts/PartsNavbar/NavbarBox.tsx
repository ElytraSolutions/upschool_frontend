import { NavLink } from 'react-router-dom';

type ChildObject = {
    title: string;
    path: string;
    children?: ChildObject[];
};

type BoxProps = {
    key: number;
    inf: {
        id: number;
        title: string;
        path?: string;
        children?: ChildObject[];
    };
};
export function NavbarBox({ inf }: BoxProps) {
    return (
        <>
            <div className="group/navmenu inline-block font-light">
                <div className=" py-1 text-white rounded-sm flex items-center">
                    <span className="pr-1  text-sm ">
                        <NavLink to={inf.path ? inf.path : '#'}>
                            {inf.title}
                        </NavLink>
                    </span>
                    <span>
                        <svg
                            className="fill-current h-4 w-4  group-hover/navmenu:-rotate-180 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </span>
                </div>
                <ul className="bg-white  rounded-md scale-0 group-hover/navmenu:scale-100 absolute transition duration-150 ease-in-out origin-top ">
                    {inf.children?.map((detail, index) => {
                        return (
                            <>
                                {detail.children ? (
                                    <li
                                        key={index}
                                        className="relative  px-6 py-3 hover:bg-red-upschool  group/list first:rounded-t-md last:rounded-b-md "
                                    >
                                        <div className="w-full text-left flex items-center">
                                            <span className="pr-1 flex-1  text-sm">
                                                <NavLink
                                                    to={
                                                        detail.path
                                                            ? detail.path
                                                            : '#'
                                                    }
                                                >
                                                    {detail.title}
                                                </NavLink>
                                            </span>
                                            <span className="mr-auto">
                                                <svg
                                                    className=" -rotate-90 group-hover/list:rotate-90 fill-current h-4 w-4 transition duration-150 ease-in-out"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <ul className=" scale-0 translate-x-[100%] group-hover/list:translate-x-[100.1%] group-hover/list:scale-100 bg-white rounded-md absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-96 max-w-max">
                                            {detail.children.map(
                                                (child, index) => (
                                                    <li
                                                        key={index}
                                                        className="px-6 py-3 text-sm  hover:bg-red-upschool first:rounded-t-md last:rounded-b-md"
                                                    >
                                                        <NavLink
                                                            to={
                                                                child.path
                                                                    ? child.path
                                                                    : '#'
                                                            }
                                                        >
                                                            {child.title}
                                                        </NavLink>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </li>
                                ) : (
                                    <li
                                        key={index}
                                        className="first:rounded-t-md last:rounded-b-md px-6 py-3  text-sm  hover:bg-red-upschool"
                                    >
                                        <NavLink
                                            to={detail.path ? detail.path : '#'}
                                        >
                                            {detail.title}
                                        </NavLink>
                                    </li>
                                )}
                            </>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
