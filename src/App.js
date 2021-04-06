import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="" component={Page404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
