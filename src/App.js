import { BrowserRouter, Route } from "react-router-dom";

import LoginContainer from "./components/auth/LoginContainer";
import DefaultContainer from "./components/auth/DefaultContainer";
import { StandardUser } from "./components/helpers/userRoles";

/* 
createContext
useState
useContext()
*/

function App() {
  return (
    <div className="app-container">
      <Route path="/" component={LoginContainer} />

      <StandardUser withRedirect>
        <Route component={DefaultContainer} />
      </StandardUser>
    </div>
  );
}

export default App;
