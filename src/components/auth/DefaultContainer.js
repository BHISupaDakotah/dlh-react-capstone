import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";

import Dashboard from "../pages/Dashboard";
import { UserContext } from "../pages/UserProvider";

function Logout() {
  const { logout } = useContext(UserContext);

  useEffect(() => {
    logout();
  }, []);

  return <div>...loggin out</div>;
}

export default function DefaultContainer() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />

      <Route path="/logout" component={Logout} />
    </Switch>
  );
}
