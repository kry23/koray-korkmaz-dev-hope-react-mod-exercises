import React, { useState } from "react";
import { useCustomer } from "./useCustomer";

function UserForm() {
  const { username, password, onHandlePassword, onHandleUsername } =
    useCustomer();
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="username">
        Username <br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={onHandleUsername}
        />
      </label>
      <label htmlFor="password">
        Password <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={onHandlePassword}
        />
      </label>
    </div>
  );
}

export default UserForm;
