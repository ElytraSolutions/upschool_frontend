import resolveImgURL from '../../utlis/resolveImgURL';
import SelectedSection from '../Cards/PopupCards/SelectedSection';
import TableForPopup from '../Table/TableForPopup';

function PriceSectionPopup({ onclose }) {
    return (
        <>
            <div className="z-40 fixed font-family-lexend inset-0 bg-black bg-opacity-20 backdrop-blur-sm grid justify-center items-center px-[50px] popup transition duration-500 ease-in-out opacity-0 invisible animate-fade-in">
                <div className="z-40 bg-white pb-[30px] grid rounded h-[80vh] overflow-hidden">
                    <div className="flex justify-end">
                        <button onClick={onclose}>
                            <img
                                src={resolveImgURL('/images/closeIcon.svg')}
                                alt="closeIcon"
                            />
                        </button>
                    </div>
                    <div className="flex text-theme-color justify-center font-bold py-[24px] text-3xl text-center px-[24px]">
                        <h2>Buy and Download the eBook - AU $5</h2>
                    </div>
                    <div className="md:max-w-[910px] max-h-[575px] xm:max-w-[392px] overflow-y-scroll no-scrollbar">
                        <div className="grid md:grid-cols-5 xm:grid-flow-row gap-2 max-w-[910px] max-h-[575px] pb-[24px] px-[30px] overflow-y-scroll no-scrollbar">
                            <div className="md:col-start-1 md:col-span-2 xm:row-span-full xm:row-start-1 flex justify-center rounded">
                                <div className="flex justify-center rounded">
                                    <SelectedSection />
                                </div>
                            </div>
                            <div className="md:col-start-3 md:col-span-3 xm:row-span-full xm:row-start-2 px-3">
                                {/* <div className="flex flex-grow"> */}
                                <div className="grid gap-4">
                                    {/* <div className="row-span-1 text-left text-theme-color font-bold text-2xl text-left">
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
                                    </div> */}
                                    <div className="row-span-1 text-left text-theme-color font-bold text-2xl text-left">
                                        Extra Donation
                                    </div>
                                    <div className="flex flex-grow text-theme-color text-lg text-left">
                                        $2.50 from the purchase of this book
                                        will be donated to your selected
                                        charity. Would you like to make an extra
                                        donation?
                                    </div>
                                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-y-2">
                                        <div className="flex justify-center">
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
                                    <div className="row-span-1 text-left text-theme-color font-bold text-2xl text-left">
                                        Upschool Tip
                                    </div>
                                    <div className="row-span-1 text-left text-theme-color text-lg text-left">
                                        Please consider giving Upschool a tip to
                                        help fund our FREE courses and
                                        resources.
                                    </div>
                                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-y-2">
                                        <div className="flex justify-center">
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
                                    <div className="flex overflow-x-scroll no-scrollbar">
                                        <TableForPopup />
                                    </div>
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
                                        <div className="hover:bg-pink-900 flex justify-center bg-red-upschool p-2 text-white font-normal text-xs xm:text-lg lg:text-xl">
                                            <button>
                                                Continue to Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PriceSectionPopup;
