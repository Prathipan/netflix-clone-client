import { Link, useNavigate } from "react-router-dom";
import "./signUp.css";
import { useState } from "react";
import axios from "axios";
import { api } from "../../api";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}/auth/register`, newUser);
      setNewUser({
        userName: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="login">
      <div className="top">
        <div className="login-wrapper">
          <img
            className="main-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="login-container">
        <form>
          <h1>Register</h1>
          <input
            type="text"
            name="userName"
            value={newUser.userName}
            placeholder="User Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={newUser.email}
            placeholder="Email or Phone number"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={newUser.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <button className="loginButton" onClick={handleSubmit}>
            Sign Up
          </button>
          <span>
            Already registered?{" "}
            <Link to="/login">
              <b className="signupNow">Sign-in now.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
