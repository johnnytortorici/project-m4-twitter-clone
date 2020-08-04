import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";
import { COLORS } from "../../constants";

import { FiLoader } from "react-icons/fi";

const TweetPost = ({ handleAfterPublishTweet }) => {
  const [tweet, setTweet] = useState(null);
  const [charCount, setCharCount] = useState(280);
  const [status, setStatus] = useState("idle");
  const { currentUser } = useContext(CurrentUserContext);

  const handleCharCount = (value) => {
    setCharCount(280 - value.length);
    setTweet(value);
  };

  const handleTweet = () => {
    let errorMsg = document.getElementById("error-msg");
    errorMsg.innerText = "";

    if (tweet) {
      setStatus("loading");

      fetch("/api/tweet", {
        method: "POST",
        body: JSON.stringify({ status: tweet }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          handleAfterPublishTweet();
          setStatus("idle");
          setTweet(null);
          setCharCount(280);
          document.getElementById("tweet-area").value = "";
        })
        .catch((error) => {
          setStatus("error");
          errorMsg.innerText = "Your Meow failed. Please try again.";
        });
    } else {
      errorMsg.innerText = "Please type in your Meow.";
    }
  };

  return (
    <>
      <PostArea>
        <Avatar src={currentUser.avatarSrc} alt={currentUser.displayName} />
        <TweetArea
          id="tweet-area"
          placeholder="What's happening?"
          onChange={(event) => handleCharCount(event.target.value)}
        ></TweetArea>
      </PostArea>
      <PostFooter>
        <ErrorMsg id="error-msg"></ErrorMsg>
        <CharCount charCount={charCount}>{charCount}</CharCount>
        <Meow
          onClick={handleTweet}
          disabled={charCount < 0 || status === "loading"}
        >
          {status !== "loading" ? "Meow" : <LoaderIcon />}
        </Meow>
      </PostFooter>
    </>
  );
};

const PostArea = styled.div`
  display: flex;
  padding: 10px;
`;

const PostFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 10px solid lightgrey;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const TweetArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: none;
  outline: none;
  resize: none;
  font-size: 1.2em;
  font-family: "Raleway", sans-serif;
`;

const CharCount = styled.span`
  ${(prop) => prop.charCount < 0 && "color: red"};
  ${(prop) => prop.charCount > 0 && "color: #fff44f"};
  ${(prop) => prop.charCount > 55 && "color: slategrey"};
  padding-right: 10px;
`;

const Meow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  width: 120px;
  height: 40px;
  font-weight: bold;
  font-size: 1.1em;
  text-decoration: none;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: hsl(258deg, 100%, 50%, 0.8);
  &:hover {
    background-color: ${COLORS.primary};
  }
  &:disabled {
    background-color: lightgrey;
    cursor: not-allowed;
  }
`;

const loader = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderIcon = styled(FiLoader)`
  animation: ${loader} 1000ms infinite;
`;

const ErrorMsg = styled.span`
  margin-right: 20px;
  color: red;
`;

export default TweetPost;
