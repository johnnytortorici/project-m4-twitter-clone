import React, { useContext } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CurrentUserContext } from "./components/CurrentUserContext";

import GlobalStyles from "./components/GlobalStyles";

import Sidebar from "./components/Sidebar";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";

import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
  const { status } = useContext(CurrentUserContext);

  switch (status) {
    case "loading":
      return <Loader />;
    case "error":
      return <Error />;
    default:
      return (
        <>
          <GlobalStyles />
          <Router>
            <Wrapper>
              <Sidebar />
              <ContentWrapper>
                <Switch>
                  <Route path="/" exact>
                    <HomeFeed />
                  </Route>
                  <Route path="/notifications">
                    <Notifications />
                  </Route>
                  <Route path="/bookmarks">
                    <Bookmarks />
                  </Route>
                  <Route path="/tweet/:tweetId">
                    <TweetDetails />
                  </Route>
                  <Route path="/:profileId">
                    <Profile />
                  </Route>
                </Switch>
              </ContentWrapper>
            </Wrapper>
          </Router>
        </>
      );
  }
}

const Wrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
`;

export default App;
