import SmallProjectCard from '../Cards/PopupCards/SmallProjectCard';
import TableForPopup from '../Table/TableForPopup';
import SmallBookCard from '../Cards/PopupCards/SmallBookCard';

function PriceSectionPopup({ onclose }) {
    return (
        <>
            <div className="fixed font-family-lexend inset-0 bg-black bg-opacity-20 backdrop-blur-sm grid justify-center items-center">
                <div className="z-39 bg-[white] px-25px py-25px grid  max-w-[1200px] max-h-[80vh] overflow-x-hidden">
                    <div className="flex justify-end">
                        <button onClick={onclose}>
                            <img
                                src="../../images/closeIcon.svg"
                                alt="closeIcon"
                            />
                        </button>
                    </div>
                    <div className="text-theme-color text-center font-bold py-10 text-2xl">
                        Buy and Download the eBook - AU $5
                    </div>
                    <div className="row-span-1">
                        <div className="grid md:grid-cols-2 xs,xss:grid-cols-1 gap-1 px-10 pb-20">
                            <div className="md:col-span-1">
                                <div className="flex justify-center">
                                    <div className="flex flex-grow max-w-[400px] max-h-[1500px] justify-center">
                                        <div className="col-span-1 flex bg-[#F4F4F4] justify-center p-4">
                                            <div className="grid gap-3">
                                                <div className="text-left text-theme-color font-bold text-2xl">
                                                    Your Selection
                                                </div>
                                                <div className="flex">
                                                    <div className="flex-grow items-center">
                                                        <SmallBookCard />
                                                    </div>
                                                </div>
                                                <SmallProjectCard />
                                                <div className="justify-left py-3">
                                                    <button className="text-theme-color underline underline-offset-4 text-xs xm:text-sm lg:text-base hover:cursor-pointer">
                                                        Select Another Project
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-1">
                                <div className="flex flex-grow max-w-[455px]">
                                    <div className="grid gap-4">
                                        <div className="row-span-1 text-left text-theme-color font-bold text-2xl text-left">
                                            Book Quantity
                                        </div>
                                        <div className="flex flex-grow justify-center">
                                            <div className="text-left text-theme-color font-bold text-2xl grid grid-cols-3 gap-2">
                                                <div className="flex justify-end">
                                                    <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                        -
                                                    </button>
                                                </div>
                                                <input
                                                    placeholder="1"
                                                    className="w-[70px] bg-gray-100 rounded-lg text-center text-lg"
                                                ></input>
                                                <div className="flex justify-start">
                                                    <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-span-1 text-left text-theme-color font-bold text-2xl text-left">
                                            Extra Donation
                                        </div>
                                        <div className="flex flex-grow text-theme-color font-bold text-lg text-left">
                                            $2.50 from the purchase of this book
                                            will be donated to your selected
                                            charity. Would you like to make an
                                            extra donation?
                                        </div>
                                        <div className="flex flex-grow justify-center">
                                            <div className="grid md:grid-cols-2 xs:grid-cols-1 xs:gap-1">
                                                <div className="text-left text-theme-color font-bold text-lg grid grid-cols-4 gap-4">
                                                    <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                        $5
                                                    </button>
                                                    <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                        $10
                                                    </button>
                                                    <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                        $15
                                                    </button>
                                                    <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                        $25
                                                    </button>
                                                </div>
                                                <div className="flex justify-center">
                                                    <div className="text-left text-theme-color font-bold text-2xl grid grid-cols-3 gap-2">
                                                        <div className="flex justify-end">
                                                            <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                                -
                                                            </button>
                                                        </div>
                                                        <input
                                                            placeholder="0.00"
                                                            className="w-[70px] bg-gray-100 rounded-lg text-center text-lg"
                                                        ></input>
                                                        <div className="flex justify-start">
                                                            <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-span-1 text-left text-theme-color font-bold text-2xl text-left">
                                            Upschool Tip
                                        </div>
                                        <div className="row-span-1 text-left text-theme-color font-bold text-lg text-left">
                                            Please consider giving Upschool a
                                            tip to help fund our FREE courses
                                            and resources.
                                        </div>
                                        <div className="flex flex-grow justify-center">
                                            <div className="grid md:grid-cols-2 xs:grid-cols-1 xs:gap-1">
                                                <div className="text-left text-theme-color font-bold text-lg grid grid-cols-4 gap-4 ">
                                                    <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                        $5
                                                    </button>
                                                    <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                        $10
                                                    </button>
                                                    <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                        $15
                                                    </button>
                                                    <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                        $25
                                                    </button>
                                                </div>
                                                <div className="flex justify-center">
                                                    <div className="text-left text-theme-color font-bold text-2xl grid grid-cols-3 gap-2">
                                                        <div className="flex justify-end">
                                                            <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                                -
                                                            </button>
                                                        </div>
                                                        <input
                                                            placeholder="0.00"
                                                            className="w-[70px] bg-gray-100 rounded-lg text-center text-lg"
                                                        ></input>
                                                        <div className="flex justify-start">
                                                            <button className="w-[50px] h-[40px] bg-gray-200 rounded-lg justify-center">
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <TableForPopup />
                                        <div className="grid md:grid-cols-2 xs:grid-cols-1 xs:gap-2">
                                            <div className="flex">
                                                <button>
                                                    <div className="flex items-center gap-1">
                                                        <img
                                                            src="../../images/backVector.svg"
                                                            alt="backIcon"
                                                        />
                                                        <p className="text-left text-theme-color underline underline-offset-4 text-xs xm:text-sm lg:text-base hover:cursor-pointer">
                                                            Continue to Shopping
                                                        </p>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="hover:bg-pink-900 flex justify-center bg-red-upschool p-2 text-white font-bold text-xs xm:text-lg lg:text-xl">
                                                <button>
                                                    Continue to Checkout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PriceSectionPopup;
