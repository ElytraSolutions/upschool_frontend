import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Link } from "react-router-dom";



type BoxProps = {
    key: number;
    inf: {
        id: number;
        name: string;
        option: string[];
    }
}
export function NavbarBox({ key, inf }: BoxProps) {
    console.log(inf);
    return (
        <>
            <div className="px-4">
                <div className="group py-2 ">
                    <div className="flex flex-row cursor-pointer ml-6">
                        <div>{inf.name}</div>
                        <ChevronDownIcon className="text-red-950 h-6 w-6 m-0 p-0" />
                    </div>
                    <ul className="hidden absolute top-8 m-2 space-y-1 bg-white  group-hover:block">
                        {inf.option.map(option => <li key={key} className="hover:bg-red-600"><Link to="#" className="block ml-6 p-2 hover:bg-red-600" >{option}</Link></li>)}
                    </ul>
                </div>
            </div>




        </>
    )
}