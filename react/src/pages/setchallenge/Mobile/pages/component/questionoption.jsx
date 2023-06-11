import React from "react";

export const Options = ({ opt1, opt2, next, name1, name2 }) => {
  return (
    <section className="btns">
      <button name={next ? name1 : null} onClick={next ? next : null}>
        {opt1}
      </button>
      <button name={next ? name2 : null} onClick={next ? next : null}>
        {opt2}
      </button>
    </section>
  );
};
