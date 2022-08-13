import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserProvider";

export default function LoginPage() {
  const history = useHistory();
  const { setUser, setAuthIsLoading, authIsLoading } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setAuthIsLoading(true);
    setErrorMessage("");

    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Logged In") {
          setUser(data.user);
          setAuthIsLoading(false);
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        setAuthIsLoading(false);
        setErrorMessage("Invalid Credentials");
        console.error("login error", err);
      });
  }

  return (
    <div className="login-page-container">
      <div className="login-box">
        <div className="login-title">Login</div>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-btn">
            {!authIsLoading ? (
              <input id="submit-btn" type="submit" value="Log In" />
            ) : (
              <h1>...submitting</h1>
            )}
          </div>
          {errorMessage}
        </form>
      </div>
    </div>
  );
}
