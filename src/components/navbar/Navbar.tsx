import { NavbarBox as Box } from "../../parts/NavbarBox"
import upschoolLogo from '../../assets/upschool_logo.png';

import { data } from "../../data/NavbarBoxData";

export default function Navbar() {
    return (
        <>
            <div className="bg-theme-color">
                <div className="flex gap-2 md:gap-6  lg:gap-10 xl:gap-12">
                    <div className="flex flex-1 ">
                        <img src={upschoolLogo} alt="" />

                    </div>

                    <div className="flex  justify-start shrink-1 grow-4 bg-blue-600 gap-2 md:gap-4 lg:gap-6 xl:gap-8">
                        {data.map(inf => <Box key={inf.id} inf={inf} />)}
                        {/* <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box /> */}
                    </div>

                    <div className="flex shrink-2 grow-2 bg-orange-500">
                        third
                    </div>
                </div>
            </div>

        </>
    )
}