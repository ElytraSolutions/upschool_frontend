type BuyOptionBoxProps = {
    inf: {
        tiltle: string;
        price: number;
        donation: number;
    };
};
export default function BuyOptionBox({ inf }: BuyOptionBoxProps) {
    return (
        <>
            <div className=" bg-red-custom flex flex-col gap-2 w-full p-2 h-full">
                <p className="md:text-xs lg:text-sm">Buy in {inf.tiltle}</p>
                <p className="md:text-xs lg:text-base font-semibold">
                    AU ${inf.price}
                </p>
                <p className="md:text-xs lg:text-sm">
                    Donation: AU ${inf.donation}
                </p>
            </div>
        </>
    );
}
