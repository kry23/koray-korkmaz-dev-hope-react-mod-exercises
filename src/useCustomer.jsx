import { useState } from "react";

export function useCustomer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  return {
    username: username,
    password: password,
    onHandleUsername: handleUsername,
    onHandlePassword: handlePassword,
  };
}
