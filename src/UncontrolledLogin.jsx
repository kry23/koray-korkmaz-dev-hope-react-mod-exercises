import React, { useRef, useState, useEffect } from "react";

export default function UncontrolledLogin() {
  const nameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const rememberInputRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const checkInputs = () => {
      const name = nameInputRef.current.value;
      const password = passwordInputRef.current.value;

      if (name !== "" && password !== "") {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };

    nameInputRef.current.addEventListener("input", checkInputs);
    passwordInputRef.current.addEventListener("input", checkInputs);
    nameInputRef.current.focus();
    return () => {
      nameInputRef.current.removeEventListener("input", checkInputs);
      passwordInputRef.current.removeEventListener("input", checkInputs);
    };
  }, []);

  const handleReset = () => {
    nameInputRef.current.value = "";
    passwordInputRef.current.value = "";
    rememberInputRef.current.checked = false;
    setDisabled(true);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const password = passwordInputRef.current.value;
    const remember = rememberInputRef.current.checked;
    console.log(name, " ", password, " ", remember);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmit}>
        <input ref={nameInputRef} type="text" />
        <input ref={passwordInputRef} type="password" />
        <label htmlFor="remember">
          <input ref={rememberInputRef} id="remember" type="checkbox" />
          Remember
        </label>
        <button onClick={onSubmit} type="submit" disabled={disabled}>
          Send
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}
