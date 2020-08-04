import React from "react";
import styled from "styled-components";

import { FaBomb } from "react-icons/fa";

const Error = () => {
  return (
    <Wrapper>
      <FaBomb size="48px" />
      <h2>An unkown error has occurred.</h2>
      <p>
        Please try refreshing the page or contact support if the problem
        persists.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: "Raleway", sans-serif;
`;

export default Error;
