import React from "react";
import { Intro } from "./pages/Introsetter";
import { Questions } from "./pages/Setquestion";
import { useState } from "react";
import { pageView } from "./context";
import { Share } from "./pages/Share";
import { useEffect } from "react";
import { Loader } from "../../../Loader";
import { Leaderboard } from "../../acceptchallenge/Mobile/pages/Board";
export const Mobile_main = ({ setload }) => {
  const [load, setLoad] = useState(true);
  const [uid, setUid] = useState(null);
  const [uname, setUname] = useState(null);
  const [pages, setPages] = useState([
    {
      Intro: true,
      Questions: false,
      Share: false,
      Board: false,
    },
  ]);
  const setUsername = (name) => setUname(name);
  const setPageView = (page) => {
    setPages((prev) =>
      prev.map(() => ({
        Intro: false,
        Questions: false,
        Share: false,
        Board: false,
        [page]: true,
      }))
    );
  };
  const setUser = (id) => {
    setUid(id);
  };
  //sets the page to share page if an id is found in the localstorage
  useEffect(() => {
    const getLocalId = localStorage.getItem("id");
    if (localStorage.getItem("id") && getLocalId !== "null") {
      setLoad(false);
      setPageView("Share");
    } else {
      setLoad(false);
    }
  }, []);
  // prettier-ignore
  return <pageView.Provider value={{setView:setPageView,uidsetter:setUser}}>
    {load?<Loader/>:
        pages[0].Intro ? (
          <Intro setter ={true} setView={setPageView} setUname={setUsername} uidsetter={setUser} fetcher="../../php/addname.php" jsxtext={
            <h1>
            How many broken
            <br />
            <span>Friendships</span>
            <br />
            you have?
          </h1>
          } />
        ) : pages[0].Questions ? (
          <Questions id={uid} name = {uname} />
        ) : pages[0].Share ? (
          <Share id={uid} name={uname} set={setPageView}/>
        ) : pages[0].Board?(
          <Leaderboard id={localStorage.getItem("id")} prevpage={setPageView} page="Share" />
        ):(
          <Intro setter ={true} setView={setPageView} setUname={setUsername} uidsetter={setUser} fetcher="../../php/addname.php" jsxtext={
            <h1>
            How many broken
            <br />
            <span>Friendships</span>
            <br />
            you have?
          </h1>
          } />
        )
    }
  </pageView.Provider>;
};
