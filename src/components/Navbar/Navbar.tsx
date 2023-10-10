import { useState, useEffect } from 'react';
import upschoolLogo from '../../assets/upschool_logo.png';
import { NavLink } from 'react-router-dom';
import { ComputerMenu } from '../../parts/PartsNavbar/LargeScreenMenuBar';
import CartIcon from '../../parts/PartsNavbar/CartIcon';
import { LargeScreenRightCornerBar as RightCornerBarLS } from '../../parts/PartsNavbar/LargeScreenRightCornerBar';
import { SmallScreenRightCornerBar as RightCornerBarSS } from '../../parts/PartsNavbar/SmallScreenRightCornerBar';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import { MobileNavMenubar as MobileMenu } from '../../parts/PartsNavbar/MobileNavMenuBar';

import { createPortal } from 'react-dom';
import useUser from '../../hooks/useUser';

export default function Navbar() {
    const styles = {
        minWidth: '145px',
    };
    const [isOpen, setIsopen] = useState(false);
    const { user, refresh } = useUser();
    const { isBigScreen } = useScreenWidthAndHeight(); //min-width=1200px

    const [isScrolled, setIsScrolled] = useState(false);

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLoggedIn = user && user.id ? true : false;
    // console.log(user);
    // console.log(isLoggedIn);

    useEffect(() => {
        refresh();
        console.log(isLoggedIn);
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [refresh]);

    return (
        <>
            {!isBigScreen &&
                isOpen &&
                createPortal(
                    <MobileMenu
                        isOpen={isOpen}
                        onClose={() => {
                            setIsopen(false);
                            // enables scrolling when modal is closed
                            document.body.style.overflow = 'unset';
                        }}
                    />,
                    document.body,
                )}

            <div
                className={`${
                    isScrolled ? 'fixed' : ''
                } h-fit z-20 w-full bg-theme-color px-1 py-2 md:py-3 md:px-2  flex flex-1 items-center `}
            >
                <div className="flex flex-1 gap-2 md:gap-3 items-center lg:gap-10 justify-between w-full">
                    <div
                        className={`flex  ${
                            isBigScreen ? 'grow-2 shrink' : 'flex-1'
                        } items-center lg:gap-4 xl:gap-6 2xl:gap-8 `}
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
                    <div className="flex flex-1  xm:gap-1 lg:gap-2 2xl:gap-3 justify-end items-center mr-3 z-10">
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
