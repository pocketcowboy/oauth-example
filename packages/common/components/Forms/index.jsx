import { useState } from "preact/hooks";

import "../style.css";

export const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ username, password });
      }}
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="button auth-button">
        Login
      </button>
    </form>
  );
};

export const AuthorizationForm = ({
  endpoint,
  request: { response_type, client_id, redirect_uri },
  children,
}) => (
  <form action={endpoint} method="post">
    <input type="hidden" name="response_type" value={response_type} />
    <input type="hidden" name="client_id" value={client_id} />
    <input type="hidden" name="redirect_uri" value={redirect_uri} />
    {children}
    <button type="submit" className="button approve-button">
      Approve
    </button>
  </form>
);
