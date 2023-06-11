import React from "react";
import Heart from "../../../../../asset/img/heart.gif";
import Broke from "../../../../../asset/img/broke.png";
import Fixed from "../../../../../asset/img/fixed.png";
export const Header = () => {
  return (
    <header>
      <div className="name">
        <h1>Friendnemy Challenge</h1> <img src={Heart} />
      </div>
      <section className="choice">
        <img src={Broke} />
        <h3>
          o<span>r</span>
        </h3>
        <img src={Fixed} />
      </section>
    </header>
  );
};
