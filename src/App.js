import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginContainer from "./components/auth/LoginContainer";
// import DefaultContainer from "./components/auth/DefaultContainer";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Route path="/" component={LoginContainer} />

        {/* <Route component={DefaultContainer} /> */}

        {/* <Redirect exact from="/" to="/Login" /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
