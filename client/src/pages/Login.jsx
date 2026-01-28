import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const res = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();

    if (!res.ok) {
      setError("Invalid credentials");
      return;
    }

    localStorage.setItem("accessToken", data.access);
    localStorage.setItem("refreshToken", data.refresh);
    alert("Login successful");
    };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login
