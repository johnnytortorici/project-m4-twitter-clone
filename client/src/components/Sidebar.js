import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { COLORS } from "../constants";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";

import { CurrentUserContext } from "./CurrentUserContext";

const Sidebar = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Wrapper>
      <NavContainer>
        <AppLogo />
        <Nav to="/" exact>
          <FiHome />
          <NavLabel>Home</NavLabel>
        </Nav>
        <Nav to={`/${currentUser.handle}`}>
          <FiUser />
          <NavLabel>Profile</NavLabel>
        </Nav>
        <Nav to="/notifications">
          <FiBell />
          <NavLabel>Notifications</NavLabel>
        </Nav>
        <Nav to="/bookmarks">
          <FiBookmark />
          <NavLabel>Bookmarks</NavLabel>
        </Nav>
      </NavContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 100vh;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
`;

const AppLogo = styled(Logo)`
  width: 50px;
`;

const Nav = styled(NavLink)`
  color: #000;
  margin: 5px 0;
  padding: 10px 10px;
  font-weight: bold;
  font-size: 1.2em;
  text-decoration: none;
  &:hover {
    color: ${COLORS.primary};
    background-color: hsl(258deg, 100%, 50%, 0.1);
    border-radius: 30px;
  }
  &.active {
    color: ${COLORS.primary};
  }
`;

const NavLabel = styled.span`
  padding-left: 20px;
`;

export default Sidebar;
