import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthService from "../service/auth-service.js";

const RegisterComponent = (props) => {
  //用 props 接過來的要用中括號

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState("password");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeSecondPassword = (e) => {
    setSecondPassword(e.target.value);
  };
  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const showYourPassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const handleRegister = () => {
    if (password !== secondPassword) {
      return setErrorMessage("Passwords don't match");
    } else {
      AuthService.register(username, email, password, role)
        .then(() => {
          window.alert("Register Successfully !!!  Now you will go to LoginPage");
          navigate("/login");
        })
        .catch((error) => {
          console.log(error.response);
          // 顯示 error message 給用戶
          setErrorMessage(error.response.data);
        });
    }
  };

  const handleReset = () => {
    return setUsername(""), setEmail(""), setPassword(""), setRole(""), setErrorMessage("");
  };

  return (
    <div className="register-form">
      <div className="changePage">
        <button>
          <a href="/login">登入頁面</a>
        </button>
        <button>
          <a href="/register">註冊頁面</a>
        </button>
      </div>
      {/* 若 error message 是 false = 沒有  就不會顯示 */}
      {errorMessage && <div className="alert-message">{errorMessage}</div>}
      <div className="divInput">
        <p>Username:</p>
        <input
          onChange={handleChangeUsername}
          type="text"
          name="username"
          placeholder=" Jason Chen"
          value={username}
          required
        />
        <p>Email:</p>
        <input
          onChange={handleChangeEmail}
          type="email"
          name="email"
          placeholder=" 123456@gmail.com"
          value={email}
          required
        />
        <p>Password:</p>
        <input
          onChange={handleChangePassword}
          type={showPassword}
          name="password"
          placeholder=" *********"
          value={password}
          required
        />
        <p>Repeat Password:</p>
        <input
          onChange={handleChangeSecondPassword}
          type={showPassword}
          name="secondPassword"
          placeholder=" Please repeat password"
          value={secondPassword}
          required
        />
        {/* password display */}
        <div className="display">
          <input onClick={showYourPassword} type="checkbox" />
          Show Password
        </div>

        <p>Role:</p>
        <label for="role">
          <select onChange={handleChangeRole} name="role" id="role" value={role} required>
            <option value=""></option>
            <option value="member">Member</option>
            <option value="admin">Admin</option>
          </select>
        </label>
      </div>

      <div className="divButton">
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
