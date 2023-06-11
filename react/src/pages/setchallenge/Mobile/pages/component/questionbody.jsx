import React from "react";
export const Question = ({ no, incr, question, img, accept }) => {
  //prettier-ignore
  return (
    <section className="questions">
      <img src={img} />
      <div className="text">
        <h4>
          {accept?`Answering question ${no} of 11`:`Added question ${no - 1} out of 10 `}
          {accept?null:<button onClick={no < 11 ? incr : null}>
            <h4>Skip</h4>
          </button>}
        </h4>
        <h2>{question}</h2>
      </div>
    </section>
  );
};
