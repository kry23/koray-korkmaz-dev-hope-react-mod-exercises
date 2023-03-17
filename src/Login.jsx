import React, { useState } from "react";

export default function Login({ handleSubmit }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState("false");
  const handleUserName = (event) => {
    setName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRemember = (event) => {
    setRemember(event.target.checked);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input onChange={handleUserName} type="text" value={name} />
        <input onChange={handlePassword} type="password" value={password} />
        <label htmlFor="remember">
          <input
            onChange={handleRemember}
            id="remember"
            type="checkbox"
            checked={remember}
          />
          Remember
        </label>
        <button
          onClick={handleSubmit}
          type="submit"
          disabled={name === "" || password === "" ? true : false}
        >
          Send
        </button>
      </form>
    </div>
  );
}
