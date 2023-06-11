import React from "react";
import Icon from "../../../../../asset/img/tapedheart.png";
import Anim from "../../../../../asset/img/click2.png";
export const Header = ({ incr, no, accept }) => {
  const progress = {
    background: `conic-gradient(white 0deg,white ${
      no * 36
    }deg,rgb(127, 141, 199)  ${no * 36}deg)`,
  };
  //prettier-ignore
  return (
    <header>
      { !accept?
        <button onClick={no < 11 ? incr : null}>
          <h4>Add</h4>
        </button>:<img src={Anim}/>
      }
      <div className="q_no" style={progress}>
       {accept?<h3>{no}</h3>:<h3>{no < 11 ? no : 10}</h3>}
      </div>
      <img src={Icon} />
    </header>
  );
};
