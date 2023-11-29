import { useEffect } from 'react';
import NotFoundImage from '/images/404-Flat-Illustration.png';
import { LiaHomeSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Page Not Found | Upschool';
    }, []);
    return (
        <div className="flex flex-col sm:flex-row  max-w-[70rem] ml-auto mr-auto items-center justify-center py-20 px-10">
            <div className="text">
                <h1 className="lg:text-[4rem] text-[3rem] text-font-color font-semibold font-lexend">
                    Oops..
                </h1>
                <h1 className="lg:text-[3rem] text-[2rem] text-[#38D0D0] font-semibold font-lexend">
                    You got lost in the jungle.
                </h1>
                <h1 className="text-[1rem] font-light text-lexend py-4">
                    It's ok though, your tour guide is here to take you home!
                </h1>
                <div
                    onClick={handleButtonClick}
                    className="bg-[#38D0D0] text-white w-fit py-2 pl-3 pr-4 flex items-center rounded-sm transition-all cursor-pointer group hover:text-font-color"
                >
                    <div className="icon text-white mr-2 text-[1.2rem] group-hover:text-font-color transition-all">
                        <LiaHomeSolid />
                    </div>
                    <div className="text">Home</div>
                </div>
            </div>
            <div className="img sm:w-[30rem] w-[20rem]">
                <img src={NotFoundImage} />
            </div>
        </div>
    );
};

export default NotFound;
