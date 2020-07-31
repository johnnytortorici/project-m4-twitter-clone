import React, { useContext } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";

import { CurrentUserContext } from "./components/CurrentUserContext";

import Sidebar from "./components/Sidebar";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";

function App() {
  const { status } = useContext(CurrentUserContext);

  if (status === "loading") return <div>loading</div>;
  else
    return (
      <>
        <GlobalStyles />
        <Router>
          <Wrapper>
            <Sidebar />
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
          </Wrapper>
        </Router>
      </>
    );
}

const Wrapper = styled.div`
  display: flex;
`;

export default App;
