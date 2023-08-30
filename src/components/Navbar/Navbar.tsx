import { useState } from 'react';
import upschoolLogo from '../../assets/upschool_logo.png';
import { NavLink } from 'react-router-dom';
import { ComputerMenu } from '../../parts/PartsNavbar/LargeScreenMenuBar';
import CartIcon from '../../parts/PartsNavbar/CartIcon';
import { LargeScreenRightCornerBar as RightCornerBarLS } from '../../parts/PartsNavbar/LargeScreenRightCornerBar';
import { SmallScreenRightCornerBar as RightCornerBarSS } from '../../parts/PartsNavbar/SmallScreenRightCornerBar';
import useScreenWidth from '../../hooks/useScreenWidth';
import { MobileNavMenubar as MobileMenu } from '../../parts/PartsNavbar/MobileNavMenuBar';

import { createPortal } from 'react-dom';

export default function Navbar() {
    const styles = {
        minWidth: '150px',
    };
    const [isOpen, setIsopen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true); //TODO logic requird for loggedIn || not
    const { isBigScreen } = useScreenWidth(); //min-width=1200px
    return (
        <>
            {!isBigScreen &&
                isOpen &&
                createPortal(
                    <MobileMenu
                        isOpen={isOpen}
                        onClose={() => {
                            setIsopen((oldstate) => !oldstate);
                        }}
                    />,
                    document.body,
                )}

            <div
                className="bg-theme-color p-1 md:py-7 md:px-2  flex flex-1 items-center"
                style={{ height: '10vh' }}
            >
                <div className="flex flex-1 gap-2 md:gap-3 items-center lg:gap-10 justify-between">
                    <div
                        className={`flex  ${
                            isBigScreen ? 'grow-2 shrink' : 'flex-1'
                        } items-center lg:gap-4 xl:gap-6`}
                    >
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
                    {/* TODO left to maintain CSS properties */}
                    <div className="flex flex-1 gap-1 lg:gap-2 2xl:gap-3 justify-end items-center mr-3">
                        <span className="">
                            <NavLink to="/">
                                <CartIcon />
                            </NavLink>
                        </span>
                        {isBigScreen ? (
                            <RightCornerBarLS isLoggedIn={isLoggedIn} />
                        ) : (
                            <RightCornerBarSS
                                isLoggedIn={isLoggedIn}
                                setIsopen={setIsopen}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
