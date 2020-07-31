import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

import TweetActionIcon from "./TweetActionIcon";
import ActionBar from "./ActionBar";

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
        <Avatar src={tweet.author.avatarSrc} alt={tweet.author.displayName} />
        <div>
          <AuthorLink to={`/${tweet.author.handle}`}>
            {tweet.author.displayName}
          </AuthorLink>
          <AuthorHandle>
            @{tweet.author.handle} - {moment(tweet.timestamp).format("MMM Do")}
          </AuthorHandle>
          <TweetText>{tweet.status}</TweetText>
          {tweet.media[0] !== undefined && (
            <Media src={tweet.media[0].url} alt="" />
          )}
          <ActionBar />
        </div>
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
  padding: 0 0 10px 50px;
  font-size: 0.8em;
`;

const RetweetLabel = styled.p`
  padding-left: 5px;
`;

const Content = styled.div`
  display: flex;
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
`;

const AuthorHandle = styled.span`
  color: slategrey;
  font-size: 0.8em;
`;

const TweetText = styled.p`
  padding: 10px 0;
`;

const Media = styled.img`
  width: 100%;
  height: 350px;
  margin-bottom: 10px;
  object-fit: cover;
  border-radius: 20px;
`;

export default Tweet;
