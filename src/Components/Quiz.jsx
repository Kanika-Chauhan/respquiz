import React from "react";
import { useState } from "react";
import "./quiz.css"

export default function Quiz() {

    var questions = [
        {
            qst: "what is js?",
            answer: [
                { ans: "react", isCorrect: false },
                { ans: "Java Script", isCorrect: true },
                { ans: "html", isCorrect: false },
                { ans: "none of these", isCorrect: false }
            ]
        },
        {
            qst: " What is a Moon?",
            answer: [
                { ans: "star", isCorrect: false },
                { ans: "satalite", isCorrect: true },
                { ans: "planet", isCorrect: false },
                { ans: "UFO", isCorrect: false }
            ]
        },
        {
            qst: "Sun is a ____?",
            answer: [
                { ans: "UFO", isCorrect: false },
                { ans: "Stone", isCorrect: false },
                { ans: "star", isCorrect: true },
                { ans: "planet", isCorrect: false }
            ]
        },
        {
            qst: "what is 1+1?",
            answer: [
                { ans: "2", isCorrect: true },
                { ans: "1", isCorrect: false },
                { ans: "3", isCorrect: false },
                { ans: "4", isCorrect: false }
            ]
        }


    ];
    const [currentqstn, setCurrentqstn] = useState(0)
    const [score, setScore] = useState(0)
    const [totalScore, setTotalScore] = useState(false)


    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);

        }
    }

    const handleNext = () => {
        if (currentqstn + 1 < questions.length) {
            setCurrentqstn(currentqstn + 1)
        } else {
            setTotalScore(true)

        }
    }
    const handlePrev = () => {
        if (currentqstn > 0) {
            setCurrentqstn(currentqstn - 1)
        }
    }



    return (
        <>

            <div className=" p-4 question mb-5 ">
                {totalScore ? (
                    <div className="text-center mt-3 "> <h4> Your total score is <i className="fa-solid fa-trophy"></i> : {score} / {questions.length} </h4>
                        <h4 className="mt-4"> Percentage <i className="fa-solid fa-award"></i> : {(score / questions.length) * 100}% </h4>

                        <table className="text-start table  mt-md-4" >
                            <tr >
                                <td><h5>Correct answers <i className="fa-regular fa-face-laugh"></i></h5></td>
                                <td><h5>{score}</h5></td>
                            </tr>
                            <tr>
                                <td><h5>Wrong answers <i className="fa-regular fa-face-frown"></i></h5></td>
                                <td><h5>{(questions.length)-(score)}</h5></td>
                            </tr>
                        </table>
                    </div>

                ) : (
                    <>
                        <div className="text-center text-md-start mb-3 mb-md-0">
                            <span className="badge bg-dark p-2 ">
                                {currentqstn + 1}/{questions.length}</span>
                        </div>
                        <div className="text-center mainheading">
                            <h3>{questions[currentqstn].qst}</h3>
                            <br />
                            {questions[currentqstn].answer.map((val) => (
                                <button type="button" className="btn btn-outline-dark m-2" onClick={() => handleAnswer(val.isCorrect)}>{val.ans}</button>

                            ))}
                        </div>
                        <br /> <br />
                        <div className="d-md-flex text-center  justify-content-evenly  ">
                            <button type="button" className="btn btn-dark" onClick={handlePrev} >Previous</button>
                            <button type="button" className="btn btn-dark ms-1 mt-md-0" onClick={handleNext} >Next</button>

                        </div>


                    </>
                )}
            </div>
        </>
    )
}