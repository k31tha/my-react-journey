import React from "react";
import { Route, Switch } from "react-router-dom";
import ClubSearchContainer from "../../containers/ClubSearchContainer";
import ClubDetailsContainer from "../../containers/ClubDetailsContainer";
import Signin from "../auth/Signin";
import NotFound from "../../containers/NotFound";
import Header from "../layout/Header";
import { ProvideAuth } from "../../hooks/useAuth.js";

export function SiteRoutes() {
  return (
    <ProvideAuth>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <ClubSearchContainer />
        </Route>
        <Route
          path="/club/:url"
          render={routerProps => (
            <ClubDetailsContainer clubUrl={routerProps.match.params.url} />
          )}
        />
        <Route exact={true} path="/signin">
          <Signin />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </ProvideAuth>
  );
}

export default SiteRoutes;
