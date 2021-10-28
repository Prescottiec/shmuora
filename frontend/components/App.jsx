import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import SessionFormContainer from "./session_form/session_form_container";
import PostShowContainer from "./posts/post_show_container";
import NavLinkContainer from "./nav_link/nav_link_container";
// import SignUpFormContainer from "./session_form/signup_form_container";
// import LogInFormContainer from "./session_form/login_form_container";
import PostIndexContainer from "./posts/post_index_container";
import PostFormContainer from "./posts/post_form_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <ProtectedRoute exact path="/" component={NavLinkContainer} />
      <ProtectedRoute exact path="/" component={PostIndexContainer} />
      <ProtectedRoute exact path="/posts/:postId" component={PostShowContainer} />
      <ProtectedRoute exact path="/posts/new" component={PostFormContainer} />
      <ProtectedRoute exact path="/posts/:postId/edit" component={PostFormContainer} />
      {/* <AuthRoute exact path="/" component={LogInFormContainer} /> */}
      {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
    </Switch>
  </div>
);

export default App;
