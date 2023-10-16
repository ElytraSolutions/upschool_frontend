import DownloadIcon from '../../../assets/DownloadIcon.png';
// TODO fetch 'purchases from backend
const purchases = [
    {
        id: '10236',
        name: 'Biscuit and Aria in Cat (Paperback)',
        quantity: 2,
        price: 72.65,
        file: '', // TODO add link to download invoice file
    },
    {
        id: '10256',
        name: 'R.U.O.K (Hardback',
        quantity: 1,
        price: 69.65,
        file: '', // TODO add link to download invoice file
    },
    {
        id: '10276',
        name: 'Scooby Doo: The Mysterious Shapeshifter (eBook)',
        quantity: 1,
        price: 5.65,
        file: '', // TODO add link to download invoice file
    },
];

export default function PurchasesTable() {
    return (
        <>
            <table className="text-sm md:text-base text-theme-color w-fit xl:w-full">
                <thead className="bg-white text-center font-semibold">
                    <tr>
                        <th className="p-1 xs:p-4">Order ID</th>
                        <th className="p-1 xs:p-4">Product Name</th>
                        <th className="p-1 xs:p-4">Qty</th>
                        <th className="p-1 xs:p-4">Price</th>
                        <th className="p-1 xs:p-4">Invoice</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase, index) => (
                        <>
                            <tr
                                key={index}
                                className={` font-normal w-full odd:bg-stone-200/50`}
                            >
                                {/* Purchse Id */}
                                <td className="p-1 xs:p-4 font-semibold ">
                                    {/* align-top */}
                                    <div className="flex justify-center">
                                        <span>#{purchase.id}</span>
                                    </div>
                                </td>
                                {/* Name */}
                                <td className=" max-w-lg p-1 xs:p-4  text-left font-light">
                                    <span>{purchase.name}</span>
                                </td>
                                {/* Quantity */}
                                <td className=" p-1 xs:p-4  text-center  font-light">
                                    <span>{purchase.quantity}</span>
                                </td>
                                {/* Price */}
                                <td className="p-1 xs:p-4 text-center font-semibold">
                                    AU ${purchase.price}
                                </td>
                                {/* Invoice download */}
                                <td className="p-1 xs:p-4">
                                    <div className="flex flex-row justify-center cursor-pointer">
                                        {/* TODO implement download of invoice */}
                                        <img
                                            src={DownloadIcon}
                                            alt="Download"
                                            width="23px"
                                            height="22px"
                                        />
                                    </div>
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </>
    );
}
