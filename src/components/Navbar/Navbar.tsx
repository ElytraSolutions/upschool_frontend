import upschoolLogo from '../../assets/upschool_logo.png';
import { NavLink } from 'react-router-dom';
import { ComputerMenu } from '../../parts/PartsNavbar/LargeScreenMenuBar';
import CartIcon from '../../parts/PartsNavbar/CartIcon';
import { LargeScreenRightCornerBarAfterLogin as AfterLoginLS } from '../../parts/PartsNavbar/LargeScreenRightCornerBarAfterLogin';
import { LargeScreenRightCornerBarBeforeLogin as BeforeLoginLS } from '../../parts/PartsNavbar/LargeScreenRightCornerBarBeforeLogin';
import useScreenWidth from '../../hooks/useScreenWidth';

export default function Navbar() {
    const styles = {
        minWidth: '150px',
    };
    const isLoggedIn = false;
    const { isBigScreen } = useScreenWidth(); //min-width=1200px
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
                        {isLoggedIn ? <AfterLoginLS /> : <BeforeLoginLS />}
                    </div>
                </div>
            </div>
        </>
    );
}
