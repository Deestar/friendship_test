import React, { useRef } from "react";
import Icon from "../../../../../asset/img/name.png";
import { useState } from "react";
import { useContext } from "react";
import { pageView } from "../../context";
import { Loader } from "../../../../../Loader";
export const NameSet = ({
  nextPage,
  head,
  btntext,
  q_set,
  id,
  choice,
  message,
  resize,
  i,
  sizeback,
}) => {
  //context to change page
  const page = useContext(pageView);
  //state for legth of inputs provided by this component
  const [maxlength, setMaxLength] = useState({
    Question: 0,
    username: 0,
    Right: 0,
    Wrong: 0,
  });
  //state for the loader
  const [loade, setLoad] = useState(false);
  //state for user name  or the questions set by user
  const [uinfo, setUinfo] = useState({
    username: "",
    Question: "",
    Right: "",
    Wrong: "",
  });
  //state for input errors
  const [error, setError] = useState(true);
  //om input updating length of inputs
  const getLength = (event) => {
    const { name, value } = event.target;
    const filtered = value.replace(/[^a-zA-Z0-9\s]/g, "");
    setMaxLength((prev) => ({ ...prev, [name]: filtered.length }));
    setUinfo((prev) => ({ ...prev, [name]: filtered }));
  };
  //question page error message
  const [q_message, setQmessage] = useState(null);
  //css styles that are conditionally rendered
  const q_style = { rowGap: "3%" };
  const q_label = { height: "8vh" };
  const q_labelNull = { height: "8vh", border: "2px solid rgb(242, 45, 10)" };
  const labelNull = { height: "6vh", border: "2px solid rgb(242, 45, 10)" };
  const label = { height: "6vh" };
  const intro_label = { border: "2px solid rgb(242, 45, 10)" };
  //send a php request to add the custom question
  const addCustom = () => {
    const choosen = choice.join(",");
    const form = new FormData();
    form.append("uid", id);
    form.append("choice", choosen);
    form.append("question", uinfo.Question);
    form.append("right", uinfo.Right);
    form.append("wrong", uinfo.Wrong);
    const choices = new FormData();
    choices.append("uid", id);
    choices.append("choice", choosen);
    const sendcustom = async () => {
      setLoad(true);
      const send = await fetch("../../php/addcustom.php", {
        method: "POST",
        body: form,
        headers: {
          key: "1212fck",
        },
      });
      const response = await send.json();
      if (response) {
        setError(true);
        const addchoice = await fetch("../../php/customadd.php", {
          method: "POST",
          body: choices,
          headers: {
            key: "1212fck",
          },
        });
        const resp = await addchoice.json();
        if (!resp) {
          setQmessage("Check your connection");
        } else {
          // change to next page
          page.setView("Share");
        }
      } else {
        setError(false);
        setQmessage("Please use letters");
      }
      setLoad(false);
    };
    sendcustom();
  };
  const clickFunc = () => {
    if (q_set) {
      if (
        maxlength.Question > 0 &&
        maxlength.Right > 0 &&
        maxlength.Wrong > 0
      ) {
        return addCustom();
      } else {
        return null;
      }
    } else {
      if (maxlength.username > 0) {
        return nextPage(uinfo.username);
      } else {
        return null;
      }
    }
  };

  //prettier-ignore
  return <>
  {loade?<Loader/>: <section className="namer" style={q_set ? q_style : null}>
      {
        // prettier-ignore
        !q_set ?
        message ?
          <h2 className="error_show">{message}</h2>
         : null
       : q_message ?
        <h2 className="error_show">{q_message}</h2>
       : null
      }
      <h1>{head}</h1>
      <label
        style={
          q_set
            ? error
              ? q_label
              : q_labelNull
            : maxlength.username > 0
            ? null
            : intro_label
        }
      >
        <div className="name">
          <img src={Icon} />
          <input
          ref={i}
          onFocus={resize}
          onBlur={sizeback}
            maxLength={q_set ? 75 : 15}
            onInput={getLength}
            type="text"
            name={q_set ? "Question" : "username"}
            placeholder={q_set ? "Your Question" : "Your name"}
            value={q_set ? uinfo.Question : uinfo.username}
          />
        </div>
        <h5>
          {q_set ? `${maxlength.Question}/75` : `${maxlength.username}/15`}
        </h5>
      </label>

      {
        // prettier-ignore
        q_set?
        <>
          <label style={error > 0 ? label : labelNull}>
            <div className="name">
              <img src={Icon} />
              <input
                maxLength="20"
                onInput={getLength}
                type="text"
                name="Right"
                placeholder="correct option"
                value={uinfo.Right}
              />
            </div>
            <h5>
            {`${maxlength.Right}/20`}
            </h5>
          </label>
          <label style={error > 0 ? label : labelNull}>
            <div className="name">
              <img src={Icon} />
              <input
                maxLength="20"
                onInput={getLength}
                type="text"
                name="Wrong"
                placeholder="wrong option"
                value={uinfo.Wrong}
              />
            </div>
            <h5>
           {`${maxlength.Wrong}/20`}
            </h5>
          </label>
        </>:null
      }
      <button
        onClick={() => {
          clickFunc();
        }}
      >
        <h3>{btntext}</h3>
      </button>
    </section>}
  </>
};
