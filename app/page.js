'use client'

import Question from "../components/Question"
import { useEffect, useRef, useState } from "react"

function AskName({ setName }) {
  const nameRef = useRef()
  const onStart = () => {
    setName(nameRef.current.value)
  }
  return (
    <div className="h-fit border shadow-md bg-white p-4 flex flex-col gap-4 rounded-md">
      <h1 className="text-xl font-semibold">What is your good name?</h1>
      <input ref={nameRef} placeholder="Enter your name" className="border h-10 px-2 rounded-md" />
      <button onClick={onStart} className="bg-violet-500 px-4 py-2 rounded-md text-white font-medium">Start</button>
      <p className="text-sm text-neutral-400">Everything will be saved except your name.😜</p>
      <p className="text-sm text-neutral-400">Source code for this: <a className="text-violet-500 underline" href="https://github.com/mohit4bug/next-survey-web">Github</a></p>
    </div>
  )
}

export default function Home() {

  const [currQuestion, setCurrentQuestion] = useState(0)
  const [questions, setQuestions] = useState([])
  const [name, setName] = useState("")

  useEffect(() => {
    const fetchQuestion = async () => {
      const res = await fetch("/api/questions")
      const data = await res.json()
      setQuestions(data.questions)
    }
    fetchQuestion()
  }, [])

  return (
    <main className="h-screen bg-violet-200 p-4 flex items-center justify-center">
      {name ? (<Question
        question={questions[currQuestion]}
        setCurrentQuestion={setCurrentQuestion}
        currQuestion={currQuestion}
        len={questions.length}
        name={name}
      />) : <AskName setName={setName} />}
    </main>
  )
}