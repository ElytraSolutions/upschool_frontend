import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ComputerMenu } from '../../parts/PartsNavbar/LargeScreenMenuBar';
import CartIcon from '../../parts/PartsNavbar/CartIcon';
import { LargeScreenRightCornerBar as RightCornerBarLS } from '../../parts/PartsNavbar/LargeScreenRightCornerBar';
import { SmallScreenRightCornerBar as RightCornerBarSS } from '../../parts/PartsNavbar/SmallScreenRightCornerBar';
import useScreenWidthAndHeight from '../../hooks/useScreenWidthAndHeight';
import { MobileNavMenubar as MobileMenu } from '../../parts/PartsNavbar/MobileNavMenuBar';

import { createPortal } from 'react-dom';
import useUser from '../../hooks/useUser';
import resolveImgURL from '../../utlis/resolveImgURL';

export default function Navbar() {
    const styles = {
        minWidth: '145px',
    };
    const [isOpen, setIsopen] = useState(false);
    const { user, refresh } = useUser();
    const { isTabScreen } = useScreenWidthAndHeight(); //min-width=1200px

    const [isScrolled, setIsScrolled] = useState(false);

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLoggedIn = user && user.id ? true : false;
    // console.log(user);
    // console.log(isLoggedIn);

    useEffect(() => {
        refresh();
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
            {!isTabScreen &&
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
                } h-fit z-20 w-full bg-white xm:bg-theme-color px-1 py-2 md:py-3 md:px-2  flex flex-1 items-center `}
            >
                <div className="flex flex-1 gap-2 md:gap-3 items-center tab:gap-20 justify-between w-full">
                    <div
                        className={`flex items-center tab:gap-4 xl:gap-6 2xl:gap-8`}
                    >
                        <div style={styles}>
                            <NavLink to="/">
                                <img
                                    src={resolveImgURL(
                                        '/images/upschool_logo.png',
                                    )}
                                    alt="Logo"
                                    width={`${isTabScreen ? '100' : '150'}`}
                                    height="50"
                                />
                            </NavLink>
                        </div>
                        {isTabScreen && <ComputerMenu />}
                    </div>
                    {/* TODO left to maintain CSS properties */}
                    <div className="flex gap-2 xm:gap-2 lg:gap-2 2xl:gap-3 justify-end items-center pr-3 z-10">
                        <span className="">
                            <NavLink to="/">
                                <CartIcon />
                            </NavLink>
                        </span>
                        {isTabScreen ? (
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
