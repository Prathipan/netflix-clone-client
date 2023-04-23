import { useContext, useRef, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();

  const {dispatch} = useContext(AuthContext)

  const handleStart = (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    try {
     login({email,password},dispatch);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="register">
      <div className="register-wrapper">
        <img
          className="main-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <Link to="/register">
          <button className="signIn-button">Sign Up</button>
        </Link>
      </div>
      <div className="register-container">
        <h1>Unlimited movies, TV Shows and more.</h1>
        <h2>Watch anywhere, Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="register-button" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button className="register-button" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
