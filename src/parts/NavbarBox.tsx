import { NavLink } from "react-router-dom";

import '../NavbarBox.css'

type ChildObject = {
    title: string;
    path: string;
    children?: ChildObject[];
}

type BoxProps = {
    inf: {
        id: number;
        title: string;
        path?: string;
        children?: ChildObject[];
    }
}
export function NavbarBox({ inf }: BoxProps) {
    return (
        <>
            <div className="group inline-block">
                <div className=" py-1 text-white rounded-sm flex items-center">
                    <span className="pr-1 font-semibold "><NavLink to={inf.path ? inf.path : "#"}>{inf.title}</NavLink></span>
                    {inf.children && <span>
                        <svg
                            className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                    </span>
                    }
                </div >
                <ul className="bg-white border rounded-md transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">
                    {inf.children?.map(detail => {
                        return (
                            <>
                                {detail.children ?
                                    <>
                                        <li key={inf.id} className="relative rounded-md px-2 py-1 hover:bg-red-700 " >
                                            <div
                                                className="w-full text-left flex items-center"
                                            >
                                                <span className="pr-1 flex-1"><NavLink to={detail.path ? detail.path : "#"}>{detail.title}</NavLink></span>
                                                <span className="mr-auto" >
                                                    <svg
                                                        className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                        />
                                                    </svg>
                                                </span >
                                            </div >
                                            <ul
                                                className="bg-white border rounded-md absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-96 max-w-max"
                                            >
                                                {detail.children.map(child => <li key={inf.id} className=" px-2 py-1  hover:bg-red-700 rounded-md"><NavLink to={child.path ? child.path : "#"} >{child.title}</NavLink></li>)}
                                            </ul >
                                        </li >
                                    </> :
                                    <>
                                        <li key={inf.id} className="rounded-md px-2 py-1 hover:bg-red-700"><NavLink to={detail.path ? detail.path : "#"}>{detail.title}</NavLink></li>
                                    </>
                                }
                            </>
                        )
                    })}
                </ul >
            </div >
        </>
    )
}