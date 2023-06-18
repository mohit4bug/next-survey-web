'use client'

import { useState } from "react"
function RadioButton({ isChecked, onClick }) {
    const style = isChecked ? "rounded-full h-6 w-6 bg-violet-500 text-white flex items-center justify-center" : "rounded-full h-6 w-6 border text-white"
    return (
        <div className={style} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </div>
    )
}
function SurveyCompleted({ name }) {
    return (
        <div className="h-fit border shadow-md bg-white p-4 flex flex-col gap-4 rounded-md">
            <h1 className="text-xl font-semibold">Thanks {name}</h1>
        </div>
    )
}

export default function Question({ question, setCurrentQuestion, len, currQuestion, name }) {

    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [completed, setCompleted] = useState(false)
    const handleVote = async () => {
        console.log(selectedIndex)
        if (selectedIndex === -1) {
            return
        }

        const URL = "/api/questions/vote/?question=" + question.question + "&votename=" + question.options[selectedIndex].name
        const res = await fetch(URL)
        const data = await res.json()
        console.log(data)

        if (currQuestion < len - 1) {
            setCurrentQuestion((prev) => prev + 1)
            setSelectedIndex(-1)
        }
        else {
            setCompleted(true)
        }

    }

    return completed ? <SurveyCompleted name={name} /> : (
        <div className="h-fit border shadow-md bg-white p-4 flex flex-col gap-4 rounded-md">
            <h1 className="text-xl font-semibold" >{question.question}</h1>
            {question.options.map((option, index) => {
                return (
                    <div className="flex items-center gap-4" key={index}>
                        <RadioButton isChecked={selectedIndex == index && true} onClick={() => setSelectedIndex(index)} />
                        <p className="font-medium">{option.name}</p>
                    </div>
                )
            })}
            <div className="w-full items-center flex justify-between">
                <p className="text-sm text-neutral-400">Total Votes: {question.votes}</p>
                <button className="bg-violet-500 px-4 py-2 rounded-md text-white font-medium" onClick={handleVote}>Vote</button>
            </div>
        </div>
    )
}