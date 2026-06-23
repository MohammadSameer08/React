import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />

      <p>You typed: {username}</p>
    </div>
  );
}

export default Login;
