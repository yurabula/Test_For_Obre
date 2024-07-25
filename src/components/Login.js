import "./Login.css"

import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log(userData);
    window.alert()
  }

  function handleInputChange(type, data) {
    setUserData((prevData) => ({
      ...prevData,
      [type]: data,
    }));
  }

  return (
    <div className="login">
      <form className="loginForm">
      <h2 className="loginTitle">Login</h2>
        <input
          value={userData.email}
          type="email"
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="Enter your email here"
          className=""
        ></input>
        <input
          value={userData.password}
          type="password"
          onChange={(e) => handleInputChange("password", e.target.value)}
          placeholder="Enter your password here"
          className=""
        ></input>
        <p>Forgot password?</p>
        <button onClick={handleFormSubmit}>Login</button>
        <p>Dont have account? Register now</p>
      </form>
    </div>
  );
};

export default Login;
