import { useState, useCallback } from 'react';
import PriceSectionPopup from './PriceSectionPopup';
import SmallProjectCard from '../Cards/PopupCards/SmallProjectCard';

function ProjectPopup({ onClose }) {
    const [isPriceSectionOpen, setPriceSectionOpen] = useState(false);

    const openPriceSection = useCallback(() => {
        setPriceSectionOpen(true);
    }, []);

    const closeBuySelectionPopup = useCallback(() => {
        setPriceSectionOpen(false);
    }, []);

    // useEffect(() => {
    //     document.body.style.overflow = isPriceSectionOpen ? 'hidden' : 'hidden';
    // }, [isPriceSectionOpen]);

    return (
        <>
            <div className="z-30 fixed font-family-lexend inset-0 bg-black bg-opacity-20 backdrop-blur-sm grid justify-center items-center">
                <div className="z-30 bg-[white] max-w-500px max-h-250px px-25px py-25px grid rounded">
                    <div className="flex justify-end">
                        <button onClick={onClose}>
                            <img
                                src="../../images/closeIcon.svg"
                                alt="closeIcon"
                            />
                        </button>
                    </div>
                    <div className="grid 1450:grid-cols-2 gap-5 p-10 ">
                        <div className="flex justify-center">
                            <div className="px-50px py-50px grid text-center justify-center items-center">
                                <div className="text-theme-color font-bold text-xs xm:text-xl lg:text-2xl">
                                    Your Purchase Supports A Project
                                </div>
                                <div className="col-span-1 p-4 flex justify-center">
                                    <div className="flex justify-center max-w-[350px]">
                                        <SmallProjectCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white items-center grid">
                            <div className="grid p-3">
                                <div className="bg-red-upschool hover:bg-pink-900 row-span-1 justify-center p-4">
                                    <button onClick={openPriceSection}>
                                        <p className="text-white font-bold text-xs xm:text-xl lg:text-2xl">
                                            Continue to Author's Recommendation
                                        </p>
                                    </button>
                                </div>
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
            {isPriceSectionOpen && (
                <PriceSectionPopup onclose={closeBuySelectionPopup} />
            )}
        </>
    );
}

export default ProjectPopup;
