"use client"
import * as questions from './questions.json';
import { useState } from "react";
type questionType = {
  question: string,
  A: string,
  B: string,
  C: string,
  D: string,
  answer: string
}
let index: number = 0
let counter: number = 0
export default function Home() {
  const [display, setDisplay] = useState<boolean>(false)
  const [color1, setColor1] = useState<string>("#E5E7EB")
  const [color2, setColor2] = useState<string>("#E5E7EB")
  const [color3, setColor3] = useState<string>("#E5E7EB")
  const [color4, setColor4] = useState<string>("#E5E7EB")
  const [question, setQuestion] = useState<questionType>(questions[0])
  const onClickHandler = () => {
    setColor1("#E5E7EB")
    setColor2("#E5E7EB")
    setColor3("#E5E7EB")
    setColor4("#E5E7EB")
    if ((
      color1 === "red" ||
      color1 === "green" ||
      color2 === "red" ||
      color2 === "green" ||
      color3 === "red" ||
      color3 === "green" ||
      color4 === "red" ||
      color4 === "green"
    )) {
      if (index !== questions.length - 1) {
        index++;
        setQuestion(questions[index])
      }
      else {
        setDisplay(true);
      }
    }
    else{
      alert("Please Select Atleast One Option!")
    }
  }
  const onClickButtonHandler = (option: string) => {
    if (!(
      color1 === "red" ||
      color1 === "green" ||
      color2 === "red" ||
      color2 === "green" ||
      color3 === "red" ||
      color3 === "green" ||
      color4 === "red" ||
      color4 === "green"
    )) {
      if (option === "A") {
        if (option === question.answer) {
          setColor1("green")
          counter++
        }
        else {
          setColor1("red")
        }
      }
      else if (option === "B") {
        if (option === question.answer) {
          setColor2("green")
          counter++
        }
        else {
          setColor2("red")
        }
      }
      else if (option === "C") {
        if (option === question.answer) {
          setColor3("green")
          counter++
        }
        else {
          setColor3("red")
        }
      }
      else if (option === "D") {
        if (option === question.answer) {
          setColor4("green")
          counter++
        }
        else {
          setColor4("red")
        }
      }
    }
  }
  return (
    <main>
      <div style={{ display: display ? "none" : "flex" }} className="flex-col w-[100vw] h-[100vh] justify-center items-center gap-y-16 mobile:gap-y-10">
        <h1 className="text-6xl font-extrabold text-blue-900">Quiz</h1>
        <div className="w-[60%] flex flex-col justify-center items-center px-10 py-10 gap-y-10 mobile:w-full">
          <h1 className="text-xl font-bold mobile:text-lg mobile:font-semibold text-blue-900">Q{index+1}: {question.question}</h1>
          <button style={{ backgroundColor: color1 }} onClick={() => onClickButtonHandler("A")} className={"w-full min-h-14 h-auto rounded-3xl text-lg font-bold px-2 py-2 mobile:text-base mobile:font-semibold hover:scale-105 transition-all ease-out duration-300 shadow-xl"}>
            {question.A}
          </button>
          <button style={{ backgroundColor: color2 }} onClick={() => onClickButtonHandler("B")} className={"w-full min-h-14 h-auto rounded-3xl text-lg font-bold px-2 py-2 mobile:text-base mobile:font-semibold hover:scale-105 transition-all ease-out duration-300 shadow-xl"}>
            {question.B}
          </button>
          <button style={{ backgroundColor: color3 }} onClick={() => onClickButtonHandler("C")} className={"w-full min-h-14 h-auto rounded-3xl text-lg font-bold px-2 py-2 mobile:text-base mobile:font-semibold hover:scale-105 transition-all ease-out duration-300 shadow-xl"}>
            {question.C}
          </button>
          <button style={{ backgroundColor: color4 }} onClick={() => onClickButtonHandler("D")} className={"w-full min-h-14 h-auto rounded-3xl text-lg font-bold px-2 py-2 mobile:text-base mobile:font-semibold hover:scale-105 transition-all ease-out duration-300 shadow-xl"}>
            {question.D}
          </button>
          <button onClick={onClickHandler} className="w-60 h-14 rounded-3xl bg-blue-900 text-white text-lg font-bold mobile:w-40            hover:scale-105 transition-all ease-out duration-300">Next</button>
        </div>
      </div>
      <div style={{ display: display ? "" : "none" }} className="text-8xl text-blue-900 font-extrabold flex justify-center items-center w-[100vw] h-[100vh] mobile:text-5xl mobile:text-center"><h1>Your Score is {counter}/{questions.length}!</h1></div>
    </main>
  );
}
