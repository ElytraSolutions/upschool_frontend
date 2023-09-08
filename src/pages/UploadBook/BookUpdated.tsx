import { NavLink } from 'react-router-dom';

export default function BookUpdated() {
    return (
        <>
            <div className="flex justify-center items-center p-3 md:p-5 lg:p-8 bg-gray-200 h-fit xs:h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh]  w-full text-font-color font-medium lg:font-semibold ">
                <div className="flex flex-col items-start h-full w-[95vw] md:w-[80vw] tab:w-[70vw] my-1 xs:my-20">
                    <div className="bg-white p-6 md:p-10 lg:p-14 2xl:p-18 w-full flex flex-col items-start gap-3 md:gap-6">
                        <div className="">
                            <h1 className="text-base tab:text-xl xl:text-2xl 2xl:text-3xl">
                                Your Book is Already Uploaded!
                            </h1>
                        </div>
                        <div className="font-normal">
                            <p className="text-sm tab:text-base xl:text-xl 2xl:text-2xl">
                                Your book is uploaded to the Upschool Library.
                                To manage this book, please go to your dashboard
                                by clicking on the "Go To Dashboard" button. If
                                you would like to upload a new book, click on
                                the "Upload a New Book" button below.
                            </p>
                        </div>
                    </div>
                    {/* <div className="grid grid-rows-2 xs:grid-cols-4 gap-0.5  xs:gap-4 md:gap-6 lg:gap-10 w-full">
                        <div className=" row-span-1 xs:col-start-2 xs:col-span-1 inline-block">
                            <NavLink to="#">Go To Dashboard</NavLink>
                        </div>
                        <div className=" row-span-1 xs:col-span-1 inline-block">
                            <NavLink to="#"></NavLink>Upload a New Book
                        </div>
                    </div> */}
                    <div className="flex  flex-col m-3 mr-0 xs:mx-3 xs:my-6 lg:my-12  xs:flex-row xs:justify-around  md:justify-evenly w-10/12 xs:w-full">
                        <div className=" ">
                            <NavLink to="#">Go To Dashboard</NavLink>
                        </div>
                        <div className=" ">
                            <NavLink to="#"></NavLink>Upload a New Book
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}