import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "../service/auth-service.js";

const RegisterComponent = (props) => {
  //用 props 接過來的要用中括號
  const { display, setDisplay } = props;
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

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
      .catch((e) => {
        console.log(e.response);
      });
  };
  const handleReset = () => {
    return setUsername(""), setEmail(""), setPassword(""), setRole("");
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
            <option value="Member">Member</option>
            <option value="Admin">Admin</option>
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
