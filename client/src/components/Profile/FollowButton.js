import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const FollowButton = ({ isFollowing }) => {
  if (isFollowing) {
    return <Following>Following</Following>;
  } else {
    return <NotFollowing>Follow</NotFollowing>;
  }
};

const NotFollowing = styled.button`
  color: #000;
  margin: 5px 10px;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 1.1em;
  text-decoration: none;
  border-radius: 30px;
  border: none;
  background-color: hsl(258deg, 100%, 50%, 0.1);
  cursor: pointer;
  &:hover {
    color: ${COLORS.primary};
  }
`;

const Following = styled(NotFollowing)`
  color: #fff;
  background-color: ${COLORS.primary};
  &:hover {
    background-color: hsl(258deg, 100%, 50%, 0.1);
  }
`;

export default FollowButton;
