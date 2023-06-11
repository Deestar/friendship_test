import React, { useEffect } from "react";
import Broke from "../../../../asset/img/broke.png";
import Fixed from "../../../../asset/img/fixed2.png";
import "../../../../asset/css/scorepage.css";
import { Quote } from "../../../../quote";
export const ScorePage = ({ score, refname, page }) => {
  let text = "";
  if (score < 35) {
    text = `Your Friendship with ${refname} needs work, it would help to put aside your diffrences and engage with each other...you just never know!!`;
  } else if (score > 35 && score < 60) {
    text = `You and ${refname} are good friends, You should try creating more Time for your friendship to bloom.`;
  } else if (score > 60 && score < 90) {
    text = `You and ${refname} are very good friends, good friends dont come around easy.Hope you spend more time together and work on improving each other`;
  } else if (score > 90 && score <= 100) {
    text = `AWESOME!!.The friendship between you and ${refname} is rare to find in this times,Ensure to share this with them and remind them of how important their friendship is to you!!`;
  } else {
    text = `This is the strongest and rarest Friendship bond there is.I hope you continue to keep the light between each other alive most people go to their graves never knowing what you and ${refname} have!!`;
  }
  const sendToHome = () => {
    location.assign("./");
  };
  const scoreBoard = () => {
    page("ScoreBoard");
  };
  const f_q = Quote[Math.floor(Math.random() * Quote.length)];
  return (
    <main className="scorepage">
      <section>
        <img src={score < 50 ? Broke : Fixed} />
        <h1>{score > 0 ? score : 0}%</h1>
        <h3>{text}</h3>
        <h4>
          ~ {f_q.quote} - {f_q.by}
        </h4>
      </section>
      <div>
        <button onClick={sendToHome}>Create Your Own Challenge</button>
        <button onClick={scoreBoard}>View Score Board</button>
      </div>
    </main>
  );
};
