import React from "react";
import "../../../../asset/css/mobileshare.css";
import { ShareHeader } from "./component/ShareHeader";
import { LinkShare } from "./component/LinkShare";
import { ShareApp } from "./component/ShareApp";
import { useState } from "react";
import { useEffect } from "react";
export const Share = ({ id, name, set }) => {
  const [message, setMessage] = useState(null);
  const [uid, setUid] = useState(id);
  const setUmessage = (message) => {
    setMessage(message);
  };
  useEffect(() => {
    if (id == null) {
      const newid = localStorage.getItem("id");
      setUid(newid);
    } else {
      setUid(id);
      localStorage.setItem("id", id);
    }
  }, []);
  return (
    <main className="mobileshare">
      <ShareHeader />
      <LinkShare id={uid} set={setUmessage} />
      <ShareApp setP={set} id={uid} name={name} set={setUmessage} />
      {message ? (
        <div className="u_message">
          <h1>
            {message}
            <span onClick={() => setMessage(null)}>close</span>
          </h1>
        </div>
      ) : null}
    </main>
  );
};
