import React, { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";

const ActionBar = ({ tweet }) => {
  const [isLiked, setIsLiked] = useState(tweet.isLiked);
  const [numLikes, setNumLikes] = useState(tweet.numLikes);

  const handleLike = () => {
    console.log("handleLike clicked");

    fetch(`/api/tweet/${tweet.id}/like`, {
      method: "PUT",
      body: JSON.stringify({ like: !isLiked }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        !isLiked ? setNumLikes(numLikes + 1) : setNumLikes(numLikes - 1);
        setIsLiked(!isLiked);
      });
  };

  return (
    <Wrapper>
      <Action color={COLORS.blue} size={40}>
        <TweetActionIcon kind="reply" size="20" />
      </Action>
      <ActionWrapper>
        <Action color={COLORS.green} size={40} isActioned={tweet.isRetweeted}>
          <TweetActionIcon kind="retweet" size="20" />
        </Action>
        <TweetStat>{tweet.numRetweets}</TweetStat>
      </ActionWrapper>
      <ActionWrapper>
        <Action
          color={COLORS.red}
          size={40}
          isActioned={isLiked}
          onClickFunction={() => handleLike()}
        >
          <TweetActionIcon kind={!isLiked ? "like" : "liked"} size="20" />
        </Action>
        <TweetStat>{numLikes}</TweetStat>
      </ActionWrapper>
      <Action color={COLORS.blue} size={40}>
        <TweetActionIcon kind="share" size="20" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TweetStat = styled.span`
  padding-left: 5px;
`;

export default ActionBar;
