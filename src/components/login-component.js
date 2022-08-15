import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "../service/auth-service.js";

const LoginComponent = (props) => {
  //用 props 接過來的要用中括號
  const { display, setDisplay } = props;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleReset = () => {
    return setEmail(""), setPassword("");
  };

  const handleDisplay = () => {
    setDisplay(2);
    navigate("/register");
  };

  return (
    <div className="register-form">
      <div className="changeMode">
        <button>登入頁面</button>
        <button onClick={handleDisplay}>
          <p>註冊頁面</p>
        </button>
      </div>
      <div className="divInput">
        <p>Email:</p>
        <input onChange={handleChangeEmail} type="email" name="email" value={email} required />
        <p>Password:</p>
        <input
          onChange={handleChangePassword}
          type="password"
          name="password"
          value={password}
          required
        />
      </div>

      <div className="divButton">
        {display === 0 && display === 1 && <button type="submit">Login</button>}
        <button type="submit">Login</button>
        <button onClick={handleReset} type="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
