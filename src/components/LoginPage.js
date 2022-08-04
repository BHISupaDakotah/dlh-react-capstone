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
      .then((res) =>
        res.json().then((data) => {
          if (data.message === "Logged In") {
            setUser(data.user);
            setAuthIsLoading(false);
            history.push("/dashboard");
          }
        })
      )
      .catch((err) => {
        setAuthIsLoading(false);
        setErrorMessage("Invalid Credentials");
        console.error("login error", err);
      });
  }

  return (
    <div>
      <h1>Login</h1>

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

        <div>
          <input type="submit" />
          {/* {!authIsLoading ? <input type="submit" /> : <h1>...submitting</h1>} */}
        </div>
        {errorMessage}
      </form>
    </div>
  );
}
