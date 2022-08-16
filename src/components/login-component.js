import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "../service/auth-service.js";

const LoginComponent = (props) => {
  //用 props 接過來的要用中括號
  const { display, setDisplay } = props;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleReset = () => {
    return setEmail(""), setPassword(""), setErrorMessage("");
  };

  const handleLogin = () => {
    AuthService.login(email, password)
      .then((response) => {
        // 如果成功登入，將使用者資料存在 LocalStorage 內
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        window.alert("Login success");
        navigate("/");
        setDisplay(3);
      })
      .catch((error) => {
        console.log(error.response);
        setErrorMessage(error.response.data);
      });
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
      {/* 若 error message 是 false = 沒有  就不會顯示 */}
      {errorMessage && <div className="alert-message">{errorMessage}</div>}
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
        <button onClick={handleLogin} type="submit">
          Login
        </button>
        <button onClick={handleReset} type="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
