import React from "react";
import { Main_set } from "./pages/setchallenge/main";
import { Accept } from "./pages/acceptchallenge/main";
import { Loader } from "./Loader";
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
  const [id, setId] = useState(false);
  const [loader, setLoader] = useState(true);
  const rLoader = () => {
    setLoader(false);
  };
  const url = new URLSearchParams(window.location.search);
  useEffect(() => {
    const urlid = url.get("id");
    const idexist = async () => {
      const form = new FormData();
      form.append("id", urlid);
      const send = await fetch("../../php/checkexist.php", {
        method: "post",
        headers: {
          key: "1212fck",
        },
        body: form,
      });
      const resp = await send.json();
      if (resp.error) {
        setLoader(false);
        setId(false);
      } else {
        setLoader(false);
        setId(urlid);
      }
    };
    if (urlid) {
      if (urlid.length === 5) {
        idexist();
      } else {
        setLoader(false);
      }
    } else {
      setLoader(false);
    }
  }, []);
  //prettier-ignore
  return (
    <>
    { loader? <div className="loader">
         <Loader/>
        </div>:id?<Accept id={id} /> : <Main_set />}
    </>
  );
};
