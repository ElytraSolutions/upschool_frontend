import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

function CourseStaticBottom({ questionList }) {
    const [openQuestion, setOpenQuestion] = useState(
        Array(questionList.length).fill(false),
    );
    function toggleQuestion(index: number) {
        setOpenQuestion((prevOpenQuestion) => {
            const newOpenQuestion = [...prevOpenQuestion];
            newOpenQuestion[index] = !newOpenQuestion[index];
            return newOpenQuestion;
        });
    }
    const { user } = useUser();

    return (
        <>
            <div className="grid bg-[#fff] xl:grid-cols-5 grid-flow-row text-theme-color mb-24 gap-y-4">
                <div className="xl:col-start-1 xl:col-span-2 flex justify-start h-fit font-sans ml-12 mr-[200px] w-[390px]">
                    <div className="grid">
                        <div className="text-[38px] font-bold">
                            Some Common Questions
                        </div>
                        <div className="">
                            You probably have a lot of questions!
                        </div>
                        {user === null && (
                            <>
                                <div className="flex my-2">
                                    <Link to="/register">
                                        <button className="bg-[#3c74cf] rounded-sm font-thin text-[18px] px-11 py-2">
                                            REGISTER
                                            <span>
                                                <KeyboardArrowRightIcon
                                                    style={{ color: '#242254' }}
                                                />
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                                <div className="text-sm font-bold mb-[20px]">
                                    Register for a FREE Upschool account to
                                    enrol in this course.
                                </div>
                            </>
                        )}
                        <div className="grid grid-cols-3 mt-6">
                            <div className="col-start-1 col-span-1 w-[130px] h-[130px] bg-[#61ce70] flex items-center justify-center">
                                <QuestionMarkIcon
                                    style={{ fontSize: '112px', color: '#fff' }}
                                />
                            </div>
                            <div className="col-start-2 col-span-1 w-[130px]">
                                <div className="grid grid-cols-2 grid-rows-2">
                                    <div className="col-start-1 col-span-1 row-start-2 w-[65px] h-[65px] bg-yellow-400"></div>
                                    <div className="col-start-2 col-span-1 row-start-1 bg-red-upschool"></div>
                                </div>
                            </div>
                            <div className="col-start-3 col-span-1 ml-4">
                                <div className="grid grid-cols-3">
                                    <div className="row-start-1 col-start-1 col-span-1 bg-yellow-400 h-[40px]"></div>
                                    <div className="row-start-1 col-start-2 col-span-1 bg-yellow-400 h-[40px]"></div>
                                    <div className="row-start-1 col-start-3 col-span-1 bg-[#59b3f8] h-[40px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-start-3 xl:col-span-3 mr-12 xl:ml-0 ml-12 grid font-nunito border-t-2 border-theme-color h-fit">
                    {questionList.map((q, index) => (
                        <div className="grid">
                            <button
                                className="w-full grid border-b border-gray-400"
                                onClick={() => toggleQuestion(index)}
                            >
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-theme-color text-[20px] my-8">
                                        {/*here is the question */}
                                        {q.question}
                                    </p>
                                    {/*hide addicon once the button is clicked */}
                                    {openQuestion[index] === false && (
                                        <AddIcon
                                            style={{
                                                fontSize: '20px',
                                                stroke: '#242254',
                                                strokeWidth: 2,
                                            }}
                                        />
                                    )}
                                    {/*show remove icon once the button is clicked */}
                                    {openQuestion[index] && (
                                        <RemoveIcon
                                            style={{
                                                color: '#B81342',
                                                fontSize: '20px',
                                                stroke: '#B81342',
                                                strokeWidth: 2,
                                            }}
                                        />
                                    )}
                                </div>
                                {openQuestion[index] && (
                                    <div className="mb-2 flex justify-start">
                                        {/*here is the answer, show when the button above is clicked */}
                                        <p className="text-base text-red-upschool px-4 pb-8">
                                            {q.answer}
                                        </p>
                                    </div>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CourseStaticBottom;