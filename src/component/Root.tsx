import React, { useState } from "react";
import { BrowserRouter, Link, useHistory } from "react-router-dom";
import { authenticate } from "@hcsc/single-spa-styles";
import "../styles.css";

export const Root = (props) => {
  return (
    <BrowserRouter>
      <section>
        <h1>Login</h1>
        <LoginForm />
      </section>
    </BrowserRouter>
  );
};

export const LoginForm = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const attemptLogin = (e) => {
    e.preventDefault();
    authenticate(name)
      .then(() => {
        history.push("/");
      })
      .catch((error) => setError(error));
  };

  return (
    <form onSubmit={attemptLogin}>
      <p>Username:</p>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <input type="submit" value="Login" />
      {error.length > 0 && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};
