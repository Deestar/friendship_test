import React, { useCallback, useRef } from "react";
import { Header } from "./component/Introheader";
import { Info } from "./component/Introinfo";
import { NameSet } from "./component/Introname";
import { useState } from "react";
import { useEffect } from "react";
import { Loader } from "../../../../Loader";
import "../../../../asset/css/setmobile.css";
export const Intro = ({
  setUname,
  setView,
  uidsetter,
  setter,
  fetcher,
  jsxtext,
  refid,
}) => {
  //This is the state to render the username form
  const [getname, setGetName] = useState(false);
  //ref to container
  let bdy = useRef(null);
  //state for loader
  const [load, setLoad] = useState(false);
  //function to show name form
  const setName = () => {
    setGetName((prev) => !prev);
  };
  //state for error messages
  const [message, setMessges] = useState(null);
  //function to get uname from the name form component and insert user to database then switch to the next page
  const nextPage = (name) => {
    const form = new FormData();
    if (!setter) {
      form.append("refid", refid);
    }
    form.append("name", name);
    const sendName = async () => {
      setLoad(true);
      const send = await fetch(fetcher, {
        method: "POST",
        body: form,
        headers: {
          key: "1212fck",
        },
      });
      const response = await send.json();
      if (response.error === true) {
        setMessges(response.message);
      } else {
        uidsetter(response.id);
        setView("Questions");
        if (setter) {
          setUname(name);
        }
      }
      setLoad(false);
    };
    sendName();
  };
  //name input refrence
  const i = useRef(null);
  const blurInput = useCallback(() => {
    if (i.current) {
      i.current.blur();
    }
  }, []);
  //attempt to fix keyboard overflow
  const bodyresize = useCallback(() => {
    let h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    let w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    let r = document.querySelector(":root");
    r.style.setProperty("--height_web", h);
    //blur the input on when user hovers out of the keyboard
    document.body.ontouchstart = () => {
      blurInput();
    };
  });
  //function for when input is blurred
  const ib = () => {
    let r = document.querySelector(":root");
    r.style.setProperty("--height_web", "-webkit-fill-available");
    document.body.removeEventListener("touchstart", blurInput);
  };
  //prettier-ignore
  return<main ref={bdy} className="setmobile_intro">
    {load? <Loader/>:null}
  <Header />
  <Info jsxtext={jsxtext} />
  <button onClick={setName}>
    <h4>{setter ? "Create Challenge" : "Accept Challenge"}</h4>
  </button>
  {getname ? (
    <NameSet
    i={i}
    sizeback={ib}
    resize={bodyresize}
      btntext="Continue"
      head="What's your Name"
      nextPage={nextPage}
      q_set={false}
      message={message}
    />
  ) : null}

</main>
};
