import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

class Root extends React.Component {
  render() {
    return (
      <div className="root">
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    );
  }
}

const RootMain = withRouter(Root);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <RootMain />
  </Router>,
  rootElement
);
