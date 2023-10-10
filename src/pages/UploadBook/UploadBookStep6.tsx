import { Formik } from 'formik';
import UBStepVImg from '../../assets/UBStepVImg.png';
import { NavLink } from 'react-router-dom';
interface IStep6Props {
    oldValues: Record<string, any>;
    submitHandler: (values: any, onSubmitProps: any) => Promise<void>;
}
const style =
    'flex items-start justify-start py-1 gap-1 md:gap-2 lg:gap-3 text-sm tab:text-base 2xl:text-xl ';
const UploadBookStep6 = ({ oldValues, submitHandler }: IStep6Props) => {
    return (
        <div className="flex flex-row justify-center items-center h-fit w-[600px]">
            <div className="flex flex-col items-start text-font-color font-medium lg:font-semibold ">
                <div className="flex items-center justify-start py-3">
                    <h1 className="text-base tab:text-xl xl:text-2xl 2xl:text-3xl">
                        Book Summary and Preview
                    </h1>
                </div>
                <Formik onSubmit={submitHandler} initialValues={oldValues}>
                    {({ values, handleSubmit }) => (
                        <>
                            <form onSubmit={handleSubmit}>
                                <div className={style}>
                                    <h1 className=" ">Book Title:</h1>
                                    <h3 className="font-normal ">
                                        {values.book_title}
                                    </h3>
                                </div>
                                <div className={style}>
                                    <h1 className=" ">Book Description:</h1>
                                    <h3 className="font-normal ">
                                        {values.book_description}
                                    </h3>
                                </div>
                                <div className={style}>
                                    <h1 className=" ">Project:</h1>
                                    <h3 className="font-normal ">
                                        {values.project}
                                    </h3>
                                </div>
                                <div className={style}>
                                    <h1 className=" ">Category:</h1>
                                    <h3 className="font-normal ">
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
                                    </h3>
                                </div>
                                {values.school_name && (
                                    <div className={style}>
                                        <h1 className=" ">School:</h1>
                                        <h3 className="font-normal ">
                                            {values.school_name}
                                        </h3>
                                    </div>
                                )}
                                <div className={style}>
                                    <h1 className=" ">
                                        Guardian/Teacher/Parents Email:
                                    </h1>
                                    <h3 className="font-normal ">
                                        {values.email}
                                    </h3>
                                </div>
                                <div className={style}>
                                    <h1 className=" ">Canva Link:</h1>
                                    <h3 className="font-normal ">
                                        {values.canva_book_link}
                                    </h3>
                                </div>
                                <div className="rounded-md w-fit h-fit bg-white my-4 lg:my-6">
                                    <NavLink to="#">
                                        {' '}
                                        {/* TODO url or link to view the uploaded book */}
                                        <img
                                            src={UBStepVImg}
                                            alt="Click here to view your book"
                                            width="full"
                                            height="full"
                                        />
                                    </NavLink>
                                </div>
                                <button
                                    type="submit"
                                    className="text-center px-8 py-4 bg-red-upschool text-white"
                                >
                                    <span className="inline-block">
                                        Upload Your Book
                                    </span>
                                </button>
                            </form>
                        </>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export { UploadBookStep6 };
