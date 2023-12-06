import resolveImgURL from '../../utlis/resolveImgURL';

function ExpectPopup({ onClose }) {
    return (
        <>
            <div className="z-30 fixed font-family-lexend inset-0 bg-black bg-opacity-20 backdrop-blur-sm grid justify-center items-center px-[50px] popup transition duration-500 ease-in-out opacity-0 invisible animate-fade-in">
                <div className="z-30 bg-[white] max-w-[1050px] grid rounded">
                    <div className="flex justify-end">
                        <button onClick={onClose}>
                            <img
                                src={resolveImgURL('/images/closeIcon.svg')}
                                alt="closeIcon"
                            />
                        </button>
                    </div>
                    <div className="grid gap-y-4 py-[25px] px-[50px]">
                        <h1 className="font-semibold font-nunito md:text-[#e9c061] text-base text-[1.25rem]">
                            When I Buy A Book From The Upschool Library, What
                            Can I Expect?
                        </h1>
                        <div className="text-theme-color md:text-base text-sm grid gap-y-2">
                            <p>
                                When you purchase a paperback copy of a book
                                from the Upschool Library, you will receive a
                                physical book with the following specifications:
                            </p>
                            <ul>
                                <li>Size: A4</li>
                                <li>Cover: 300 GSM</li>
                                <li>Pages: 160 GSM</li>
                            </ul>
                            <p>
                                Delivery Time: We expect your book to arrive in
                                3-6 weeks of purchase date.
                            </p>
                            <p>
                                When you purchase a digital copy of a book from
                                the Upschool Library, it will be supplied to you
                                in a PDF format.
                            </p>
                            <p>
                                When an order is placed, we review the book file
                                to ensure it meets our printing criteria. Should
                                the text be in the wrong position (for example,
                                too close to a margin) or there is some other
                                issue present, we will either:
                            </p>
                            <ol>
                                <li>
                                    Contact the author requesting them to make
                                    changes to their book file and have them
                                    re-upload it, so we can arrange printing,
                                    or;
                                </li>
                                <li>
                                    We will edit the book on behalf of the
                                    author so that it complies with our printing
                                    requirements.
                                </li>
                            </ol>
                            <p>
                                Should edits to a book be necessary, this will
                                result in a delay to production and shipping. We
                                ask for your patience should this occur.
                            </p>
                            <p>
                                If the book does not require editing, we will
                                endeavour to arrange printing and shipping at
                                the soonest opportunity.
                            </p>
                            <p>
                                We will provide you with a tracking number once
                                the order is shipped from Upschool’s warehouse.
                            </p>
                            <p>
                                Contact us at hello@upschool.co to receive
                                further support if necessary.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExpectPopup;
