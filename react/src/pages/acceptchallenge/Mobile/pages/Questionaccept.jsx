import React, { useEffect, useRef, useState } from "react";
import { Header } from "../../../setchallenge/Mobile/pages/component/questionheader";
import { Question } from "../../../setchallenge/Mobile/pages/component/questionbody";
import { Options } from "../../../setchallenge/Mobile/pages/component/questionoption";
import { QuestionArray } from "../../../qarray";
import { Loader } from "../../../../Loader";
export const AcceptQuestion = ({ detail, scoreget, c_id, page }) => {
  const [load, setLoad] = useState(false);
  const [score, setScore] = useState(0);
  const [canclick, setCanClick] = useState(true);
  const r_no = useRef(Math.floor(Math.random() * 2 + 1));
  const [questionno, setQuestionNo] = useState(1);
  const d_array = QuestionArray(detail.name);
  const c = detail.choosen.split(",");
  const c_int = c.map((ele) => parseInt(ele));
  const f = d_array.filter((ele) => c_int.includes(ele.q_no) === true);
  f.push({
    image: "./used/custom.png",
    opt1: [detail.RightOpt, true],
    opt2: [detail.WrongOpt, false],
    q_no: 16,
    question: detail.question,
  });
  const second = r_no.current == 1 ? 2 : 1;
  const handleClick = (event) => {
    setCanClick((prev) => !prev);
    const s_o = event.target.name;
    if (f[questionno - 1][s_o][1] === true) {
      event.target.classList.add("acorrect");
      if (questionno == 11) {
        setScore((prev) => prev + 16);
      } else {
        setScore((prev) => prev + 10);
      }
    } else {
      event.target.classList.add("acorrect");
      if (questionno == 11) {
        setScore((prev) => prev - 9);
      } else {
        setScore((prev) => prev - 3);
      }
    }
    setTimeout(() => {
      if (questionno < 11) {
        setQuestionNo((prev) => prev + 1);
        r_no.current = Math.floor(Math.random() * 2 + 1);
        if (f[questionno - 1][s_o][1]) {
          event.target.classList.remove("acorrect");
        } else {
          event.target.classList.remove("acorrect");
        }
        setCanClick((prev) => !prev);
      }
    }, 500);
  };
  useEffect(() => {
    scoreget(score);
    if (questionno == 11) {
      const form = new FormData();
      form.append("cid", c_id);
      form.append("score", score);
      const sendChallengeScore = async () => {
        setLoad(true);
        const send = await fetch(
          "../../php/sendscore.php",
          {
            method: "post",
            headers: {
              key: "1212fck",
            },
            body: form,
          }
        );
        const resp = await send.json();
        if (!resp) {
          setLoad(false);
          alert("You have a connetion issue,Kindly take the test again");
          page("Home");
        } else {
          setLoad(false);
          page("Score");
        }
      };
      var subs = setTimeout(() => {
        sendChallengeScore();
      }, 505);
    }
    return () => clearTimeout(subs);
  }, [score]);
  return (
    <main className="questionmobile">
      {load ? <Loader /> : null}
      <Header accept={true} no={questionno} />
      <Question
        no={questionno}
        accept={true}
        question={f[questionno - 1].question}
        img={f[questionno - 1].image}
      />
      <Options
        next={canclick && questionno < 12 ? handleClick : () => {}}
        name1={`opt${r_no.current}`}
        name2={`opt${second}`}
        opt1={f[questionno - 1][`opt${r_no.current}`]}
        opt2={f[questionno - 1][`opt${second}`]}
      />
    </main>
  );
};
