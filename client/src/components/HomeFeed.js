import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Tweet from "./Tweet";

const HomeFeed = () => {
  const [feed, setFeed] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
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
      });
  }, []);

  if (status === "loading") return <div>loading</div>;
  else
    return (
      <Wrapper>
        <h1>Home</h1>
        {feed.tweetIds.map((tweetId) => {
          return <Tweet key={tweetId} tweet={feed.tweetsById[tweetId]} />;
        })}
      </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 10px;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
`;

export default HomeFeed;
