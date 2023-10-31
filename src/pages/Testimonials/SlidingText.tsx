const SlidingText = ({ text }) => {
    return (
        <div className="my-10">
            <div className="w-full py-6 text-center bg-[#FDCF60]">
                <div className="xss:text-xl xs:text-2xl sm:text-4xl font-extrabold">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default SlidingText;
