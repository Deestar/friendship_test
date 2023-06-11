import React from "react";
import { Mobile_main } from "./Mobile/Mobile_main";
import { useMediaQuery } from "react-responsive";
export const Main_set = ({ setload }) => {
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
    <Mobile_main />
  ) : (
    <div style={style}>
      Larger Screens is currently unavailable kindly switch to a smaller screen
    </div>
  );
};
