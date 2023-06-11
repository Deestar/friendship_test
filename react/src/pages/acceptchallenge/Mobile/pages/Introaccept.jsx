import React, { useEffect, useState } from "react";
import { Intro } from "../../../setchallenge/Mobile/pages/Introsetter";
import { Loader } from "../../../../Loader";
export const Introaccept = ({ id, setdetail, setcid, setpage }) => {
  const [loader, setLoader] = useState(false);
  const [Name, setName] = useState("");
  //once page load get info about referrer
  useEffect(() => {
    const form = new FormData();
    form.append("id", id);
    const getUserDetail = async () => {
      setLoader(true);
      const send = await fetch(
        "../../php/getdetails.php",
        {
          method: "post",
          headers: {
            key: "1212fck",
          },
          body: form,
        }
      );
      const response = await send.json();
      if (response.error && response.type === "exists") {
        location.assign("./");
      } else {
        setdetail(response);
        setName(response.name);
      }
      setLoader(false);
    };
    getUserDetail();
  }, []);
  return (
    <>
      {loader ? <Loader /> : null}
      <Intro
        setView={setpage}
        uidsetter={setcid}
        refid={id}
        fetcher="../../php/newaccept.php"
        setter={false}
        jsxtext={
          <h1>
            What {Name}
            <br />
            <span>Friendship </span>
            <br />
            is with You
          </h1>
        }
      />
    </>
  );
};
