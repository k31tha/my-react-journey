import React from "react";
import { Route, Switch } from "react-router-dom";
import ClubSearch from "../club/ClubSearch";
import ClubDetail from "../club/ClubDetail";
import NotFound from "../containers/NotFound";
//<Route path="/club/:url" render={(routerProps) => (<ClubDetail clubdetail={{name: routerProps.match.params.url}} />)}/>

const ShowClubDetail = ({ clubs, clubUrl }) => {
  const clubDetail = clubs.find(
    club => club.url === clubUrl
  );

  return (clubDetail === undefined) ? (
    <NotFound />
  ) : (
    <ClubDetail clubdetail={clubDetail} />
  );
};

export function SiteRoutes({ clubs }) {
  return (
    <>
      <Switch>
        <Route exact={true} path="/">
          <ClubSearch clubs={clubs} />
        </Route>
        <Route
          path="/club/:url"
          render={routerProps => (
            <ShowClubDetail clubs={clubs} clubUrl={routerProps.match.params.url} />
          )}
        />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default SiteRoutes;
