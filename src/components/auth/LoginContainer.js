import { Route, Switch } from "react-router-dom";

import LoginPage from "../LoginPage";
import HomePage from "../HomePage";

export default function LoginContainer() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}
