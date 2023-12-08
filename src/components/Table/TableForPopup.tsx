function TableForPopup() {
    return (
        <>
            <div className="flex w-full flex-col overflow-x-hidden">
                <div className="xs:-mx-6 md:-mx-8">
                    <div className="inline-block min-w-full py-2 xs:px-6 md:px-8">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>{/* no headers */}</tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-[#f4f4f4] dark:border-neutral-500">
                                        <td className="px-3 py-2">
                                            Credit Card/Bank Processing Fee
                                            (2.9% + AU $0.30)
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-2 text-right">
                                            AU $0.56
                                        </td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-3 py-2">
                                            Extra Donation
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-2 text-right">
                                            AU $1.00
                                        </td>
                                    </tr>
                                    <tr className="border-b bg-[#f4f4f4] ">
                                        <td className="whitespace-nowrap px-3 py-2">
                                            Upschool Tip
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-2 text-right">
                                            AU $5.00
                                        </td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500 font-bold">
                                        <td className="whitespace-nowrap px-3 py-2">
                                            Total
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-2 text-right">
                                            AU $5.56
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TableForPopup;
