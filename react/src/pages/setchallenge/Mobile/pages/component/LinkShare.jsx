import React, { useEffect } from "react";
import LinkIcon from "../../../../../asset/img/copy.png";
import { useRef } from "react";
import { useState } from "react";
export const LinkShare = ({ id, set }) => {
  const [lnk, setLnk] = useState();
  const clink = useRef();
  useEffect(() => {
    setLnk(`http://friendship-test.epizy.com?id=${id}`);
  }, [id]);
  const shareLnk = () => {
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      const range = document.createRange();
      clink.current.contentEditable = true;
      clink.current.readOnly = true;
      range.selectNodeContents(clink.current);
      const selected = window.getSelection();
      selected.removeAllRanges();
      selected.addRange(range);
      clink.current.setSelectionRange(0, 99999);
      clink.current.contentEditable = false;
      clink.current.readOnly = true;
    } else {
      clink.current.select();
    }
    document.execCommand("copy");
    clink.current.blur();
    set("You can now share to your friends");
  };
  return (
    <section onClick={shareLnk} className="linkshare">
      <input defaultValue={lnk} ref={clink} />
      <img onClick={shareLnk} src={LinkIcon} />
    </section>
  );
};
