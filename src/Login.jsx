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
      <form className="login-form">
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
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            handleSubmit(name, password, event);
          }}
          type="submit"
          disabled={name === "" || password === "" ? true : false}
          style={{ backgroundColor: password.length > 7 ? "green" : "red" }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
