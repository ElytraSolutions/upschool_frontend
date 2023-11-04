import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import resolveImgURL from '../../utlis/resolveImgURL';
import { useEffect } from 'react';
interface IStep6Props {
    oldValues: Record<string, any>;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
}
const style =
    'flex items-start justify-start py-1 gap-1 md:gap-2 lg:gap-3 text-sm tab:text-base 2xl:text-xl  ';
const UploadBookStep6 = ({ oldValues, submitHandler }: IStep6Props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex flex-row justify-center h-full xm:h-[565px] w-fit  overflow-y-auto overflow-x-hidden ">
            <div className=" flex flex-col justify-between text-font-color font-medium lg:font-semibold h-full w-full ">
                <div className="flex items-center justify-start py-3 w-full">
                    <p className="text-sm sm:text-base tab:text-xl  font-lexend">
                        Book Summary and Preview
                    </p>
                </div>
                <Formik onSubmit={submitHandler} initialValues={oldValues}>
                    {({ values, handleSubmit }) => (
                        <>
                            <form
                                onSubmit={handleSubmit}
                                className="w-[95%] h-fit"
                            >
                                <div className={style}>
                                    <p className="">Book Title:</p>
                                    <p className="font-light ">
                                        {values.book_title}
                                    </p>
                                </div>
                                <div className={style}>
                                    <p className="">Book Description:</p>
                                    <p className="font-light">
                                        {values.book_description}
                                    </p>
                                </div>
                                <div className={style}>
                                    <p className=" ">Project:</p>
                                    <p className="font-light ">
                                        {values.project}
                                    </p>
                                </div>
                                <div className={style}>
                                    <p className=" ">Category:</p>
                                    <p className="font-light ">
                                        {values.categories.map(
                                            (category, index) => (
                                                <span key={index}>
                                                    {category}
                                                    {index <
                                                        values.categories
                                                            .length -
                                                            1 && ', '}
                                                </span>
                                            ),
                                        )}
                                    </p>
                                </div>
                                {values.school_name && (
                                    <div className={style}>
                                        <p className=" ">School:</p>
                                        <p className="font-light ">
                                            {values.school_name}
                                        </p>
                                    </div>
                                )}
                                <div className={style}>
                                    <p className=" ">
                                        Guardian/&shy;Teacher&shy;/Parents
                                        Email:
                                    </p>
                                    <p className="font-light break-all">
                                        {values.email}
                                    </p>
                                </div>
                                <div className={style}>
                                    <p className=" ">Canva Link:</p>
                                    <p className="font-light break-all ">
                                        {values.canva_book_link}
                                    </p>
                                </div>
                                <div className="py-5">
                                    <div className="rounded-md w-fit h-fit bg-white">
                                        <NavLink to="#">
                                            {/* TODO url or link to view the uploaded book */}
                                            <img
                                                src={resolveImgURL(
                                                    '/images/UBStepVImg.png',
                                                )}
                                                alt="Click here to view your book"
                                                width="full"
                                                height="full"
                                            />
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="pb-2 ">
                                    <button
                                        type="submit"
                                        className="text-center px-8 py-4 bg-red-upschool text-white"
                                    >
                                        <span className="inline-block text-sm">
                                            Upload Your Book
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export { UploadBookStep6 };
