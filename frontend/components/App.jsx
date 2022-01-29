import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import SessionFormContainer from "./session_form/session_form_container";
import PostShowContainer from "./posts/post_show_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import PostIndexContainer from "./posts/post_index_container";
import PostFormContainer from "./posts/post_form_container";
// import CommentIndexContainer from './comments/comment_index_container';

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <AuthRoute exact path="/" component={SessionFormContainer} />
    <ProtectedRoute path="/" component={NavBarContainer} />
    <ProtectedRoute exact path="/browse" component={PostIndexContainer} />
    {/* <ProtectedRoute exact path="/comments" component={CommentIndexContainer} /> */}
    <ProtectedRoute exact path="/postsnew" component={PostFormContainer} />
    <ProtectedRoute exact path="/posts/:postId" component={PostShowContainer} />
    <ProtectedRoute exact path="/posts/:postId/edit" component={PostFormContainer} />
  </div>
);

export default App;
