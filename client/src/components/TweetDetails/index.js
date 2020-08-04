import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import { FiArrowLeft } from "react-icons/fi";
import BigTweet from "./BigTweet";

import Loader from "../Loader";
import Error from "../Error";

const TweetDetails = () => {
  const { tweetId } = useParams();

  const [tweet, setTweet] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTweet(data.tweet);
        setStatus("idle");
      })
      .catch((error) => setStatus("error"));
  }, [tweetId]);

  switch (status) {
    case "loading":
      return <Loader />;
    case "error":
      return <Error />;
    default:
      return (
        <>
          <Heading>
            <BackLink to="/">
              <FiArrowLeft />
            </BackLink>
            Meow
          </Heading>
          <BigTweet tweet={tweet} />
        </>
      );
  }
};

const Heading = styled.h1`
  display: flex;
  align-items: center;
`;

const BackLink = styled(Link)`
  color: #000;
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

export default TweetDetails;
