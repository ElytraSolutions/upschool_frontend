function Navbar() {
    return (
        <>
            <div className="flex justify-between p-4 border items-center">
                <div>
                    {' '}
                    <img src="/images/logo.png" className="h-10" alt="" />
                </div>
                <div className="flex items-center gap-4">
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-bell"></i>
                    <p className="p-2 bg-black rounded-[50%] h-8 w-8"></p>
                    <div>
                        <p>Ram Lal</p>
                        <p className="text-sm">email@email.com</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
