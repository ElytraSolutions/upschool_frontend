import { useEffect, useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const data = [
    {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Madrid', 'Berlin'],
        correct: 1,
    },
    {
        question: 'What is the capital of Nepal?',
        options: ['London', 'Paris', 'Kathmandu', 'Berlin'],
        correct: 2,
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Jupiter', 'Venus', 'Mercury'],
        correct: 0,
    },
];

const CertificateStep2 = ({changeCurrentStep}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [marks, setMarks] = useState(0);
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState<(number | String)[]>([])
    const [submit, setSubmit] = useState(false)

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const correctAnswer = data.map((data) => data.correct)

    // const handleSubmit = (e, value) => {
    //     e.preventDefault();
    //     if (currentQuestion + 1 < data.length) {
    //         setCurrentQuestion(currentQuestion + 1);
    //         if (
    //             value ===
    //             data[currentQuestion].options[data[currentQuestion].correct]
    //         ) {
    //             setCorrectAnswers(correctAnswers + 1);
    //         }
    //         setValue('');
    //     } else {
    //         console.log(
    //             value,
    //             currentQuestion,
    //             data[currentQuestion].options[data[currentQuestion].correct],
    //             data[currentQuestion].correct,
    //         );
    //         console.log(
    //             value ===
    //                 data[currentQuestion].options[
    //                     data[currentQuestion].correct
    //                 ],
    //         );
    //         if (
    //             value ===
    //             data[currentQuestion].options[data[currentQuestion].correct]
    //         ) {
    //             setCorrectAnswers(correctAnswers + 1);
    //         }
    //         setValue('');
    //         console.log(correctAnswers);
    //         changeCurrentStep()
    //     }
    // };


    const handleSubmit = (e, value) => {
        e.preventDefault();
        if (value !== ""){

            if (currentQuestion + 1 < data.length) {
                setCurrentQuestion(currentQuestion + 1);
                if (
                    value ===
                    data[currentQuestion].options[data[currentQuestion].correct]
                    ) {
                        let new_val = data[currentQuestion].correct
                        setAnswer(prev => [...prev, new_val])
                    } else {
                        let new_val = 10
                        setAnswer(prev => [...prev, new_val])
                    }
            setValue('');
        }
        else {
            if (
                value ===
                data[currentQuestion].options[data[currentQuestion].correct]
                ) {
                    let new_val = data[currentQuestion].correct
                setAnswer(prev => [...prev, new_val])
            } else {
                let new_val = 10
                setAnswer(prev => [...prev, new_val])
            }
            setValue('');
            setSubmit(true);
        }
    }
    }

    useEffect(() => {
        if(submit === true){
            correctAnswer.map((ans, i) => {
                console.log("The answer is", ans, "The correct answer is ", answer[i], ans === answer[i])
                if (ans === answer[i]){
                    setMarks(prev => prev + 1)
                    // console.log("Marks", marks, "correct")
                }
            })
        }
    }, [submit])


    useEffect(() => {
        console.log("Marks", marks);
        if (marks > Math.floor(data.length/2)){
            changeCurrentStep();
        }
    }, [marks])


    const radioIconStyle = {
        color: 'black',
        fontSize: '4px',
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, value)}>
                <FormControl sx={{ m: 3 }} variant="standard">
                    <h1 className="text-xl text-font-color font-bold mb-10">
                        Question {currentQuestion + 1} / {data.length}
                    </h1>
                    <h1 className="text-lg text-font-color">
                        {data[currentQuestion].question}
                    </h1>
                    <h2 className="text-xl text-font-color font-bold mt-10">
                        Choose Answer
                    </h2>
                    <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        color="secondary"
                        value={value}
                        onChange={handleRadioChange}
                    >
                        {data[currentQuestion].options.map((opt, i) => (
                            <FormControlLabel
                                value={opt}
                                control={<Radio style={radioIconStyle} />}
                                label={opt}
                                key={i}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
                {/* <Button type="submit">
                        
                    </Button> */}
                <div
                    className={`grid grid-cols-4  justify-items-end gap-4  text-sm md:text-base w-full h-fit font-normal mt-5`}
                >
                    <button
                        type="submit"
                        className=" col-start-3  sm:col-start-4 col-span-2 sm:col-span-1  flex  flex-1 flex-wrap items-center justify-center gap-x-0.5 bg-theme-color px-3 py-2 w-fit h-fit text-white"
                    >
                        <span>
                            {currentQuestion + 1 < data.length
                                ? 'Next'
                                : 'Submit'}
                        </span>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CertificateStep2;
