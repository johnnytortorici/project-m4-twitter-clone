import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";

const ActionBar = () => {
  return (
    <Wrapper>
      <Action color={COLORS.blue} size={40}>
        <TweetActionIcon kind="reply" size="20" />
      </Action>
      <Action color={COLORS.green} size={40}>
        <TweetActionIcon kind="retweet" size="20" />
      </Action>
      <Action color={COLORS.red} size={40}>
        <TweetActionIcon kind="like" size="20" />
      </Action>
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

export default ActionBar;
