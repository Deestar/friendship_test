import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { M_main } from "./Mobile/mobilemain";
export const Accept = ({ id, setload }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const style = {
    fontFamily: "var(--h)",
    fontSize: "clamp(35px,4vw,40px)",
    textAlign: "center",
    height: "100vh",
    display: "grid",
    placeContent: "center",
  };
  return isMobile ? (
    <M_main id={id} />
  ) : (
    <div style={style}>
      Larger screens is currently unavailable kindly switch to a smaller screen
    </div>
  );
};
