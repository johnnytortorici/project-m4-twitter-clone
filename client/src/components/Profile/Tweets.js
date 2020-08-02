import React, { useState, useEffect } from "react";

import Tweet from "../Tweet";

const Tweets = ({ handle }) => {
  const [feed, setFeed] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/${handle}/feed`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFeed(data);
        setStatus("idle");
      });
  }, [handle]);

  if (status === "loading") return <div>loading</div>;
  else
    return (
      <>
        {feed.tweetIds.map((tweetId) => {
          return <Tweet key={tweetId} tweet={feed.tweetsById[tweetId]} />;
        })}
      </>
    );
};

export default Tweets;
