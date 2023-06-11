import React from "react";
import Click from "../../../../../asset/img/click.png";
export const Info = ({ jsxtext }) => {
  return (
    <section className="info">
      <img src={Click} />
      <div className="text">
        <h5>Let's see</h5>
        {jsxtext}
      </div>
    </section>
  );
};
