import React from "react";
import Broken from "../../../../../asset/img/broke.png";
import Fixed from "../../../../../asset/img/fixed.png";
export const ShareHeader = () => {
  return (
    <header>
      <div className="main_intro">
        <div className="intro">
          <img src={Broken} />
          <h1>
            VS <span>Let's see</span>
          </h1>
          <img src={Fixed} />
        </div>
        <h4>Who can guess your choice?</h4>
      </div>
      <h2>
        Send <span> Quiz Link </span> to Friends
      </h2>
    </header>
  );
};
