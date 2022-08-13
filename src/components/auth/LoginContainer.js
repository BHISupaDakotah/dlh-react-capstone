import { Route, Switch } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

export default function LoginContainer() {
  return (
    <div className="login-container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}
