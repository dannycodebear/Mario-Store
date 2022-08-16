import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthService from "../service/auth-service.js";

const RegisterComponent = (props) => {
  useEffect(() => {
    setDisplay(2);
  }, []);

  //用 props 接過來的要用中括號
  const { display, setDisplay } = props;
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const handleRegister = () => {
    AuthService.register(username, email, password, role)
      .then(() => {
        window.alert("Register Successfully !!!");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response);
        // 顯示 error message 給用戶
        setErrorMessage(error.response.data);
      });
  };

  const handleReset = () => {
    return setUsername(""), setEmail(""), setPassword(""), setRole(""), setErrorMessage("");
  };

  const handleDisplay = () => {
    setDisplay(1);
    navigate("/login");
  };

  return (
    <div className="register-form">
      <div className="changeMode">
        <button onClick={handleDisplay}>
          <p>登入頁面</p>
        </button>
        <button>註冊頁面</button>
      </div>
      {/* 若 error message 是 false = 沒有  就不會顯示 */}
      {errorMessage && <div className="alert-message">{errorMessage}</div>}
      <div className="divInput">
        <p>Username:</p>
        <input
          onChange={handleChangeUsername}
          type="text"
          name="username"
          value={username}
          required
        />
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
        <p>Role:</p>
        <label for="role">
          <select onChange={handleChangeRole} name="role" id="role" value={role} required>
            <option value=""></option>
            <option value="member">member</option>
            <option value="admin">admin</option>
          </select>
        </label>
      </div>

      <div className="divButton">
        {display === 0 && <button type="submit">Login</button>}
        <button onClick={handleRegister} type="submit">
          Register
        </button>
        <button onClick={handleReset} type="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default RegisterComponent;
