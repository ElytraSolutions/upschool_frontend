import resolveImgURL from '../../utlis/resolveImgURL';

function HelpPopup({ onClose }) {
    return (
        <>
            <div className="z-30 fixed font-family-lexend inset-0 bg-black bg-opacity-20 backdrop-blur-sm grid justify-center items-center px-[50px] popup transition duration-500 ease-in-out opacity-0 invisible animate-fade-in">
                <div className="z-30 bg-[white] max-w-[600px] grid rounded">
                    <div className="flex justify-end">
                        <button onClick={onClose}>
                            <img
                                src={resolveImgURL('/images/closeIcon.svg')}
                                alt="closeIcon"
                            />
                        </button>
                    </div>
                    <div className="flex py-[25px] px-[50px]">
                        <p className="text-theme-color md:text-base text-sm tracking-wide leading-relaxed">
                            By purchasing a book from the Upschool Library, you
                            are able to direct a portion of sale proceeds to
                            support an important charity project. Each book’s
                            author has recommended a project they’d like you to
                            support, but you can choose to support a different
                            project. The total amount your purchase will raise
                            for the charity project is shown when adding each
                            book to the Cart, and at Check Out. If you wish to
                            donate extra money to a charity project, you can do
                            so at Check Out. You are also able to donate money
                            to Upschool, to keep our courses free and to support
                            our work, but this is optional. The more books
                            purchased, greater the impact you can have in the
                            world!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HelpPopup;
