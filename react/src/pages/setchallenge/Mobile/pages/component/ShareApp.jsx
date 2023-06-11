import React, { useEffect, useState } from "react";
import Whatsapp from "../../../../../asset/img/whatsapp.png";
import Twitter from "../../../../../asset/img/twitter.png";
import Snapchat from "../../../../../asset/img/snapchat.png";
import Instagram from "../../../../../asset/img/instagram.png";
import Facebook from "../../../../../asset/img/facebook.png";
import Fixed from "../../../../../asset/img/fixed.png";
export const ShareApp = ({ id, set, name, setP }) => {
  const [Link, setLink] = useState("");
  useEffect(() => {
    setLink(`http://friendship-test.epizy.com?id=${id}`);
  }, [id]);
  const enc_link = encodeURI(Link);
  const InstaShare = (event) => {
    event.preventDefault();
    const share = async () => {
      try {
        await navigator.share({
          title: "Friendship Challenge",
          text: `Is your friendship with doyin Broken or Fixed`,
          url: Link,
        });
      } catch (err) {
        set(
          "Sharing Link is not supported by your browser Kindly copy link from clipboard"
        );
      }
    };
    share();
  };
  return (
    <section className="shareapp">
      <a
        href={`whatsapp://send?text=${Link}`}
        data-action="share/whatsapp/share"
        target="_blank"
        className="whatsapp"
      >
        <img src={Whatsapp} />
        <h3>Share on whatsApp</h3>
      </a>
      <div className="links">
        <a onClick={InstaShare} href="" className="snapchat">
          <img src={Snapchat} />
          <h3>Snapchat</h3>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${enc_link}`}
          className="facebook"
        >
          <img src={Facebook} />
          <h3>Facebook</h3>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURI(
            "Find out what type of friendship do we have"
          )}&url=${enc_link}`}
          className="twitter"
        >
          <img src={Twitter} />
          <h3>Twitter</h3>
        </a>
        <a href="" onClick={InstaShare} className="instagram">
          <img src={Instagram} />
          <h3>Instagram</h3>
        </a>
      </div>
      <button onClick={() => setP("Board")}>
        <h3>View Scores</h3>
      </button>
    </section>
  );
};
