import React from "react";
import "../../../../asset/css/questionmobile.css";
import { Header } from "./component/questionheader";
import { Question } from "./component/questionbody";
import { Options } from "./component/questionoption";
import { useState } from "react";
import { QuestionArray } from "../../../qarray";
import { NameSet } from "./component/Introname";
import { useEffect } from "react";
export const Questions = ({ name, id }) => {
  const [questionno, setQuestionNo] = useState(1);
  const [totalno, setTotalNo] = useState(1);
  const [choosen, setChoosen] = useState([]);
  //This is to change between questions from the array without increasing the total no choosen by user
  const incr = () => {
    const no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const next = no.filter((ele, ind) => choosen.includes(ele) != true);
    const index = Math.floor(Math.random() * next.length);
    setQuestionNo(next[index]);
  };
  useEffect(() => {
    incr();
  }, [choosen]);
  //This is to set the total number of question chosen by the user
  const incrTotal = () => {
    setChoosen((prev) => [...prev, questionno]);
    setTotalNo((prev) => prev + 1);
  };
  //Array is returned by a function that collects user name
  const Q_array = QuestionArray(name);
  return (
    <main className="questionmobile">
      <Header accept={false} incr={incrTotal} no={totalno} />
      <Question
        question={Q_array[questionno - 1].question}
        img={Q_array[questionno - 1].image}
        incr={incr}
        no={totalno}
      />
      <Options
        accept={false}
        opt1={Q_array[questionno - 1].opt1}
        opt2={Q_array[questionno - 1].opt2}
        next={null}
      />
      {totalno > 10 ? (
        <NameSet
          q_set={true}
          btntext="Share Challenge"
          head="Add Your Question"
          id={id}
          choice={choosen}
        />
      ) : null}
    </main>
  );
};
