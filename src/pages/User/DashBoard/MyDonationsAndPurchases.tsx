import { useState } from 'react';
import DonationsTable from '../../../parts/UserDashboard/Tables/DonationsTable';
import PurchasesTable from '../../../parts/UserDashboard/Tables/PurchasesTable';

export default function MyDonationsAndPurchases() {
    const [selectedOption, setSelectedOption] = useState<string>('Donations');

    return (
        <>
            <div className="p-4 w-full">
                <div className="flex flex-col gap-10 w-full">
                    {/* Options section */}
                    <div className="flex flex-row justify-start w-full gap-4">
                        {/* Donations option */}
                        <div className="flex flex-col w-fit  gap-2">
                            <div
                                className={`${
                                    selectedOption === 'Donations'
                                        ? 'text-theme-color'
                                        : 'text-gray-400'
                                } hover:cursor-pointer w-full text-center px-1 sm:px-4 md:px-6 lg:px-10`}
                                onClick={() => setSelectedOption('Donations')}
                            >
                                {/* TODO fetch number form backend */}
                                Donations (2)
                            </div>
                            <div
                                className={`w-full h-1 ${
                                    selectedOption === 'Donations'
                                        ? 'bg-theme-color'
                                        : 'bg-gray-400'
                                }`}
                            ></div>
                        </div>
                        {/* Purchases option */}
                        <div className="flex flex-col w-fit gap-2">
                            <div
                                className={`${
                                    selectedOption === 'Purchases'
                                        ? 'text-theme-color'
                                        : 'text-gray-400'
                                } hover:cursor-pointer text-center w-full px-1 sm:px-4 md:px-6 lg:px-10`}
                                onClick={() => setSelectedOption('Purchases')}
                            >
                                {/* TODO fetch number form backend */}
                                Purchases (3)
                            </div>
                            <div
                                className={`w-full h-1 ${
                                    selectedOption === 'Purchases'
                                        ? 'bg-theme-color'
                                        : 'bg-gray-400'
                                }`}
                            ></div>
                        </div>
                    </div>
                    {/* Detail section */}
                    <div className="w-full xl:w-10/12">
                        {/* Donations section */}
                        {selectedOption === 'Donations' && (
                            <div className="">
                                {/* TODO fetch Donations data from backend and use it inside this component */}
                                <DonationsTable />
                            </div>
                        )}
                        {/* Purchases section */}
                        {selectedOption === 'Purchases' && (
                            <div className=" ">
                                {/* TODO fetch Purchases data from backend and use it inside this componet */}
                                <PurchasesTable />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
