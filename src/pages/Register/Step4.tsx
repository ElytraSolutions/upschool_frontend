import verification from '../../assets/verification.png';
const Step4 = ({ data, refresh, navigate, return_slug }) => {
    console.log(data);
    return (
        <div className="flex justify-center flex-col items-center text-font-color gap-y-3 xl:gap-y-6 mt-8">
            <h1 className=" w-[75%] text-base lg:text-lg 2xl:text-2xl font-bold font-lexend text-center">
                Congratulations! Your Upschool account is created!
            </h1>
            <p className=" text-sm lg:text-base 2xl:text-lg font-normal text-center w-[75%]">
                Before you can log into Upschool, please verify your email
                address. We have sent you an email with a verification link.
                Please remember to check your junk/spam folders.
            </p>
            <img
                src={verification}
                alt="verification"
                className="w-[50%] 2xl:w-[30%] mt-4 mb-4"
            />
            <button className=" flex  items-center justify-center bg-theme-color px-5 py-2 w-fit h-fit text-white mb-0">
                Resend Verification Email
            </button>
            <button
                className=" flex  items-center justify-center bg-pink-upschool px-5 py-2 w-fit h-fit text-white mb-5"
                onClick={async () => {
                    try {
                        if (return_slug !== null) {
                            refresh();
                            navigate(`/course/${return_slug.course.course}`);
                        } else {
                            refresh();
                            navigate('/');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                Verify Later, Continue
            </button>
        </div>
    );
};

export default Step4;
