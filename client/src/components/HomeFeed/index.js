import React, { useEffect, useState } from "react";

import TweetPost from "./TweetPost";
import Tweet from "../Tweet";

import Loader from "../Loader";
import Error from "../Error";

const HomeFeed = () => {
  const [feed, setFeed] = useState(null);
  const [status, setStatus] = useState("loading");

  const handleHomeFeed = () => {
    fetch("/api/me/home-feed", {
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
      })
      .catch((error) => setStatus("error"));
  };

  useEffect(() => {
    handleHomeFeed();
  }, []);

  switch (status) {
    case "loading":
      return <Loader />;
    case "error":
      return <Error />;
    default:
      return (
        <>
          <h1>Home</h1>
          <TweetPost handleAfterPublishTweet={handleHomeFeed} />
          {feed.tweetIds.map((tweetId) => {
            return <Tweet key={tweetId} tweet={feed.tweetsById[tweetId]} />;
          })}
        </>
      );
  }
};

export default HomeFeed;
