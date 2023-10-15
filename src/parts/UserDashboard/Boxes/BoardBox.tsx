type BoardBoxProps = {
    icon: string;
    text: string;
    number: number;
};
export default function BoardBox({ icon, text, number }: BoardBoxProps) {
    return (
        <>
            <div className="border rounded-md border-theme-color px-0 md:px-4  tab:px-6 lg:px-10  w-full sm:w-fit text-theme-color">
                <div className="flex flex-row justify-start sm:flex-col sm:justify-center items-center gap-2 xs:gap-1 sm:gap-2 p-2 md:p-4 ">
                    <img src={icon} alt={text} width="60px" height="60px" />
                    <h1 className="text-3xl text-center">{number}</h1>
                    <h1 className="text-center font-lexend">{text}</h1>
                </div>
            </div>
        </>
    );
}
