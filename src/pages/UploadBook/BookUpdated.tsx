import { NavLink } from 'react-router-dom';

type BookUpdatedProps = {
    setIsUploadBookCompleted: (value: boolean) => void;
    setCurrentStep: (value: number) => void;
    setCurrentData: (object: Record<string, any>) => void;
};
export default function BookUpdated({
    setIsUploadBookCompleted,
    setCurrentStep,
    setCurrentData,
}: BookUpdatedProps) {
    return (
        <>
            <div className="flex justify-center items-center p-3 md:p-5 lg:p-8 bg-gray-200 h-fit xs:h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh]  w-full text-font-color font-medium lg:font-semibold ">
                <div className="flex flex-col items-start h-fit w-[95vw] md:w-[80vw] tab:w-[70vw] py-2">
                    <div className="bg-white p-6 md:p-10 lg:p-14 2xl:p-18 w-full flex flex-col items-start gap-3 md:gap-6 mt-4">
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
                    <div className="flex  flex-col m-3  xs:mx-3 xs:my-6 lg:my-12  xs:flex-row xs:justify-around  md:justify-evenly w-10/12 xs:w-full">
                        <NavLink to="/dashboard" className="my-4">
                            <div
                                className=" bg-red-upschool text-white py-2 px-4  sm:py-4 sm:px-8  "
                                onClick={() => {
                                    setIsUploadBookCompleted(false);
                                    setCurrentStep(0);
                                    setCurrentData({
                                        first_name: '',
                                        last_name: '',
                                        school_name: '',
                                        country: '',
                                        age: '',
                                        email: '',
                                        book_title: '',
                                        book_description: '',
                                        canva_book_link: '',
                                        file: '',
                                        categories: [],
                                        project: '',
                                    });
                                }}
                            >
                                Go To Dashboard
                            </div>
                        </NavLink>

                        <NavLink to="." className="my-4 ">
                            <div
                                className="bg-red-upschool text-white  py-2 px-4 sm:py-4 sm:px-8"
                                onClick={() => {
                                    setIsUploadBookCompleted(false);
                                    setCurrentStep(0);
                                    setCurrentData({
                                        first_name: '',
                                        last_name: '',
                                        school_name: '',
                                        country: '',
                                        age: '',
                                        email: '',
                                        book_title: '',
                                        book_description: '',
                                        canva_book_link: '',
                                        file: '',
                                        categories: [],
                                        project: '',
                                    });
                                }}
                            >
                                Upload a New Book
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
