import { useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../pages/UserProvider";

function withAuth(authorizedRoles) {
  return ({ children, withRedirect }) => {
    const { user, authIsLoading } = useContext(UserContext);

    // if (authIsLoading) return <div>...loading</div>;
    if (authorizedRoles.includes(user?.role)) {
      return children;
    } else {
      return withRedirect ? <Redirect to="/login" /> : null;
    }
  };
}

export default withAuth;
