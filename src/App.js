import React, { useEffect } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import { history } from "redux/store";
import { Home } from "pages/Home";

import "assets/styles/index.css";
import "./App.css";

import ReactGA from 'react-ga';

ReactGA.initialize('UA-219090917-1')
ReactGA.pageview(window.location.pathname);

const pageViewsTracking = (props) => {
  const pathname = props.path;

  let pageView;
  if (pathname === "*") pageView = '/not-found' ;
  else pageView = pathname;

  //sending ga page view
  ReactGA.pageview(pageView);
}




const App = () => {
  useEffect(() => {
    const getMode = window.localStorage.getItem("Mode");
    getMode === null && window.localStorage.setItem("Mode", "light");
  }, []);

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};
export default App;
