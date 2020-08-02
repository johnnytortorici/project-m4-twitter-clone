import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

import TweetActionIcon from "../ActionBar/TweetActionIcon";
import ActionBar from "../ActionBar";

const Tweet = ({ tweet }) => {
  return (
    <Wrapper>
      {tweet.retweetFrom !== undefined && (
        <Retweet>
          <TweetActionIcon kind="retweet" size="15" />
          <RetweetLabel>{tweet.retweetFrom.displayName} Remeowed</RetweetLabel>
        </Retweet>
      )}
      <Content>
        <Author>
          <Avatar src={tweet.author.avatarSrc} alt={tweet.author.displayName} />
          <div>
            <AuthorLink to={`/${tweet.author.handle}`}>
              {tweet.author.displayName}
            </AuthorLink>
            <AuthorHandle>@{tweet.author.handle}</AuthorHandle>
          </div>
        </Author>
        <TweetText>{tweet.status}</TweetText>
        {tweet.media[0] !== undefined && (
          <Media src={tweet.media[0].url} alt="" />
        )}
        <Timestamp>
          {moment(tweet.timestamp).format("HH:MM A - MMM D YYYY")} - Critter web
          app
        </Timestamp>
        <ActionBar />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const Retweet = styled.div`
  display: flex;
  align-items: center;
  color: slategrey;
  padding-bottom: 10px;
  font-size: 0.8em;
`;

const RetweetLabel = styled.p`
  padding-left: 5px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorLink = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  margin-right: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const AuthorHandle = styled.p`
  color: slategrey;
  font-size: 0.8em;
`;

const TweetText = styled.p`
  font-size: 1.5em;
  padding: 20px 0;
`;

const Media = styled.img`
  width: 100%;
  height: 350px;
  margin-bottom: 10px;
  object-fit: cover;
  border-radius: 20px;
`;

const Timestamp = styled.p`
  color: slategrey;
  padding: 10px 0 20px;
  border-bottom: 1px solid lightgrey;
`;

export default Tweet;
