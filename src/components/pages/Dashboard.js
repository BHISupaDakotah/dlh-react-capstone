import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import DashboardWidgets from "./DashboardWidgets";
import Weather from "./Weather";
import Swapi from "./Swapi";
import Trucking from "./Trucking";
import PTO from "./PTO";
import RandomColor from "./RandomColor";
import About from "./About";
import Logout from "../auth/DefaultContainer";

export default function Dashboard() {
  return (
    <div>
      <BrowserRouter>
        <Route path="*" component={Navbar} />

        <Switch>
          <Route path="/dashboard" component={DashboardWidgets} />
          <Route path="/weather" component={Weather} />
          <Route path="/swapi" component={Swapi} />
          <Route path="/trucking" component={Trucking} />
          <Route path="/pto" component={PTO} />
          <Route path="/color" component={RandomColor} />
          <Route path="/about" component={About} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
