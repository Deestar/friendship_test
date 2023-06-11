import React from "react";
import Profile from "../../../../../asset/img/userp.png";

export const Points = ({ no, name, point, type }) => {
  return (
    <div>
      <h5>{no}</h5>
      <img src={Profile} />
      <div className="n_point">
        <h3>{name}</h3>
        <h4>{point} points</h4>
      </div>
      <img src={type} />
    </div>
  );
};
