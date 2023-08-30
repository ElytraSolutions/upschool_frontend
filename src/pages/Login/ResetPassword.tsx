export default function ResetPassword() {
    return (
        <>
            <div className="  w-full h-[80vh] bg-gray-300 flex justify-center items-start">
                <div className="flex justify-center bg-white w-10/12 md:w-2/3 lg:w-[768px] h-2/3 md:3/5 lg:h-[60%] mt-10">
                    <div className="w-11/12 h-[90%]  grid grid-rows-3">
                        <div className="row-span-1 px-2 py-0.5 mx-2 my-0.5 md:p-2 md:m-2">
                            <h3 className="text-font-color font-normal ">
                                we'll sen password reset instructions to the
                                email address associated with your account.
                            </h3>
                        </div>
                        <div className="row-span-2 px-2 py-0.5 mx-2 my-0.5 md:p-2 md:m-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
