import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../pages/UserProvider";

import Dashboard from "../pages/Dashboard";
import Navbar from "../pages/Navbar";
import Weather from "../pages/Weather";
import Swapi from "../pages/Swapi";
import Trucking from "../pages/Trucking";
import PTO from "../pages/PTO";
import RandomColor from "../pages/RandomColor";
import About from "../pages/About";

function Logout() {
  const { logout } = useContext(UserContext);

  useEffect(() => {
    logout();
  }, [logout]);

  return <div>...loggin out</div>;
}

export default function DefaultContainer() {
  return (
    <>
      <Route path="*" component={Navbar} />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/weather" component={Weather} />
        <Route exact path="/swapi" component={Swapi} />
        <Route path="/swapi/:endpoint" component={Swapi} />
        <Route path="/trucking" component={Trucking} />
        <Route path="/pto" component={PTO} />
        <Route path="/color" component={RandomColor} />
        <Route path="/about" component={About} />

        <Route path="/logout" component={Logout} />
      </Switch>
    </>
  );
}
