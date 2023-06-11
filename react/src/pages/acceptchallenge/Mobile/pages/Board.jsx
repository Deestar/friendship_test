import React, { useEffect, useState } from "react";
import { Points } from "./component/points";
import Fixed from "../../../../asset/img/Fixed3.png";
import "../../../../asset/css/leaderboard.css";
import Back from "../../../../asset/img/back.png";
import { Loader } from "../../../../Loader";
import Broke from "../../../../asset/img/broke2.png";
export const Leaderboard = ({ id, prevpage, page }) => {
  const [loader, setLoader] = useState(true);
  const [scores, setScores] = useState([]);
  const [message, setMessage] = useState(null);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const form = new FormData();
    form.append("id", id);
    const getScores = async () => {
      const send = await fetch(
        "../../php/getscores.php",
        {
          method: "post",
          headers: {
            key: "1212fck",
          },
          body: form,
        }
      );
      const resp = await send.json();
      if (resp.error) {
        setMessage("Connection Error,Kindly click refresh");
        setTimeout(() => {
          setMessage(null);
        }, 4000);
      } else {
        if (resp.score.length <= scores.length) {
          setMessage("No new Friend have completed the challenge yet");
          setTimeout(() => {
            setMessage(null);
          }, 4000);
        } else {
          setMessage(null);
          setScores(resp.score);
        }
      }
      setLoader(false);
    };
    getScores();
  }, [refresh]);
  //To get new challenge result
  const getNew = () => {
    setLoader(true);
    setRefresh((prev) => !prev);
  };
  //Array of jsx scores element filled with input from database
  const ScoreList = () =>
    scores.map((ele, ind) => (
      <Points
        key={ind + 1}
        no={ind + 1}
        name={ele.name}
        point={ele.score}
        type={ele.score > 50 ? Fixed : Broke}
      />
    ));
  //function to return to the previous component passed by props
  const setBack = () => {
    prevpage(page);
  };
  //prettier-ignore
  return (
    <main className="leaderboard">
      {loader ? <Loader /> : null}
      {message?<h2 className="popup">{message}</h2>:null}
      <header>
        <img onClick={setBack} src={Back} />
        <h1>Leaderboard</h1>
      </header>
      <section>
        <ScoreList/>
      </section>
      <button onClick={getNew}>Refresh</button>
    </main>
  );
};
