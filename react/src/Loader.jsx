import React from "react";
import Love from "./asset/img/heart.gif";
export const Loader = () => {
  return (
    <div className="loader">
      <div className="conic">
        <div>
          <img src={Love} />
        </div>
      </div>
    </div>
  );
};
