import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <GlobalStyles />
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
    </Router>
  );
}

export default App;
