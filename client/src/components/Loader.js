import React from "react";
import styled, { keyframes } from "styled-components";

import { FiLoader } from "react-icons/fi";

const Loader = () => {
  return (
    <Wrapper>
      <FiLoader size="48px" />
    </Wrapper>
  );
};

const loader = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  animation: ${loader} 1000ms infinite;
`;

export default Loader;
