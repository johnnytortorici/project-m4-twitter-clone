import React, { useState } from "react";
import styled from "styled-components";

const Action = ({ color, size, isActioned, onClickFunction, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper
      color={color}
      size={size}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        onClickFunction && onClickFunction();
      }}
      isActioned={isActioned}
    >
      {children}
      <Circle circleColor={color} isHovered={isHovered} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border: none;
  background: transparent;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(prop) => prop.size}px;
  height: ${(prop) => prop.size}px;
  color: ${(prop) => (prop.isActioned ? prop.color : null)};

  &:hover {
    color: ${(prop) => (prop.isActioned ? prop.color : null)};
    cursor: pointer;
  }
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background-color: ${(prop) => (prop.isHovered ? prop.circleColor : null)};
`;

export default Action;
