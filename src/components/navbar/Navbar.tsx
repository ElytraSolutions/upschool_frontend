import { NavbarBox as Box } from "../../parts/NavbarBox"
import upschoolLogo from '../../assets/upschool_logo.png';

import { data } from "../../data/NavbarBoxData";

export default function Navbar() {
    return (
        <>
            <div className="bg-theme-color p-2 md:py-7 md:px-4">
                <div className="flex gap-2 md:gap-3 items-center lg:gap-10 " >
                    <div className="flex shrink-2 grow-1 ">
                        <img src={upschoolLogo} alt="Logo" width="250" height="60" />

                    </div>

                    <div className="flex justify-start shrink-1 grow-5 gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                        {data.map(inf => <Box key={inf.id} inf={inf} />)}
                    </div>

                    <div className="flex shrink-2 grow-3 bg-orange-500">
                        third
                    </div>
                </div>
            </div>

        </>
    )
}