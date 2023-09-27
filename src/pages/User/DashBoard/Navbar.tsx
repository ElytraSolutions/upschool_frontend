type NavbarProps = {
    setIsopen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ setIsopen }: NavbarProps) {
    return (
        <>
            <div className="z-10 flex justify-between p-4 border items-center h-[10dvh] w-full bg-white">
                <div>
                    <img src="/images/logo.png" className="h-10 w-32" alt="" />
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="tab:flex tab:items-center gap-4  hidden">
                        <i className="fa fa-heart"></i>
                        <i className="fa fa-bell"></i>
                    </div>

                    <p className="p-2 bg-black rounded-[50%] h-8 w-8"></p>
                    <div className="hidden tab:block">
                        <p>Ram Lal</p>
                        <p className="text-sm">email@email.com</p>
                    </div>
                    <span
                        className="block tab:hidden hover:cursor-pointer"
                        onClick={() => {
                            setIsopen((oldstate) => !oldstate);
                        }}
                    >
                        <svg //hamburger
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#242254"
                            className="w-8 h-8 text-white hover:cursor-pointer"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Navbar;
