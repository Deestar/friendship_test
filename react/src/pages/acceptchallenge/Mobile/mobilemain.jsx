import React, { useState } from "react";
import { Introaccept } from "./pages/Introaccept";
import { AcceptQuestion } from "./pages/Questionaccept";
import { ScorePage } from "./pages/Score";
import { Leaderboard } from "./pages/Board";
export const M_main = ({ id }) => {
  const [cid, setCid] = useState(null);
  const [score, setScore] = useState(0);
  //function to get user core
  const getScore = (score) => {
    setScore(score);
  };
  const [userdetail, setUserDetails] = useState({
    name: "",
    choosen: "",
    question: "",
    WrongOpt: "",
    RightOpt: "",
  });
  const setUdetail = (details) => {
    setUserDetails(details);
  };
  const [currentPage, setCurrentPage] = useState({
    Home: true,
    Questions: false,
    Score: false,
    ScoreBoard: false,
  });
  const setView = (page) => {
    setCurrentPage((prev) => ({
      Home: false,
      Questions: false,
      Score: false,
      ScoreBoard: false,
      [page]: true,
    }));
  };
  const setChallengeId = (id) => {
    setCid(id);
  };
  //prettier-ignore
  return currentPage.Home? <Introaccept
      setpage={setView}
      setdetail={setUdetail}
      setcid={setChallengeId}
      id={id}
    />
    :
    currentPage.Questions?
    <AcceptQuestion  page={setView} scoreget={getScore} detail={userdetail} c_id ={cid} />:
    currentPage.Score?
    <ScorePage score={score} page={setView} refname={userdetail.name}/>:
    currentPage.ScoreBoard?
    <Leaderboard id={id} prevpage={setView} page="Score"/>:
    <Introaccept setpage={setView}
    setdetail={setUdetail}
    setcid={setChallengeId}
    id={id}/>
};
