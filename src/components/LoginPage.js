import { useState, useContext } from "react";
import { UserContext } from "./UserProvider";

export default function LoginPage() {
  const { setUser, setAuthIsLoading } = useContext(UserContext);

  return (
    <div>
      <h1>Login</h1>

      <form>
        <div>
          <input type="email" required />
        </div>

        <div>
          <input type="password" required />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
