import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/home/Home";
import UndefinedUser from "../routes/UndefinedUser";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <UndefinedUser />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
