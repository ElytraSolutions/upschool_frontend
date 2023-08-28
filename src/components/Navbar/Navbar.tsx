import { NavbarBox as Box } from '../../parts/NavbarBox';
import upschoolLogo from '../../assets/upschool_logo.png';

import { userData } from '../../data/NavbarBoxData';
import { NavLink } from 'react-router-dom';
import CartIcon from '../../parts/CartIcon';
import ProfileIcon from '../../parts/ProfileIcon';
import { ComputerMenu } from '../../parts/PartsNavbar/LargeScreenMenuBar';

import useScreenWidth from '../../hooks/useScreenWidth';

export default function Navbar() {
    const styles = {
        minWidth: '150px',
    };

    const { isBigScreen } = useScreenWidth();
    return (
        <>
            <div
                className="bg-theme-color p-1 md:py-7 md:px-2"
                style={{ height: '10vh' }}
            >
                <div className="flex gap-2 md:gap-3 items-center lg:gap-10 justify-between">
                    <div className="flex  flex-1 gap-1 md:gap-1 items-center lg:gap-3">
                        <div style={styles}>
                            <NavLink to="/">
                                <img
                                    src={upschoolLogo}
                                    alt="Logo"
                                    width="200"
                                    height="50"
                                />
                            </NavLink>
                        </div>
                        {isBigScreen && <ComputerMenu />}
                    </div>

                    <div className="flex gap-1 lg:gap-2 2xl:gap-3 justify-end items-center">
                        <span className="">
                            <NavLink to="/">
                                <CartIcon />
                            </NavLink>
                        </span>
                        <span className="">
                            <NavLink to="https://www.youtube.com/">
                                <ProfileIcon />
                            </NavLink>
                        </span>
                        <Box key={userData.id} inf={userData} />
                    </div>
                </div>
            </div>
        </>
    );
}
