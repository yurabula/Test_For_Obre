import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const message = `User email: ${userData.email}, User password: ${userData.password}`;

  function handleInputChange(type, data) {
    setUserData((prevData) => ({
      ...prevData,
      [type]: data,
    }));
  }

  function validateForm() {
    let formErrors = {};
    if (!userData.email) {
      formErrors.email = "Email is required.";
    }
    if (!userData.password) {
      formErrors.password = "Password is required.";
    }
    return formErrors;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log(userData);
      window.alert(message);
    } else {
      setErrors(formErrors);
    }
  }

  return (
    <div className="login">
      <form className="loginForm">
        <h2 className="loginTitle">Login</h2>
        <div className="inputGroup">
          <input
            value={userData.email}
            type="email"
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Enter your email here"
          ></input>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="inputGroup">
          <input
            value={userData.password}
            type="password"
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="Enter your password here"
          ></input>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <p>Forgot password?</p>
        <button onClick={handleFormSubmit}>Login</button>
        <p>Don't have an account? Register now</p>
      </form>
    </div>
  );
};

export default Login;
