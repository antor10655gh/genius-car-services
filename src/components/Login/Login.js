import React, { useRef } from "react";
import "./Login.css";
import loginImg from "../../images/sigin-up/login-banner.jpg";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Login = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const emailRef = useRef("");
  const passRef = useRef("");

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  if (user) {
    // navigate(from, { replace: true });
  }

  const handleLoginForm = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-2 p-5">
        <div className="col">
          <div className="login-banner">
            <img className="img-fluid" src={loginImg} alt="" />
          </div>
          <div className="mt-3">
            <Link style={{ color: "#00aefe" }} to="/sign-up">
              create an account
            </Link>
            <span className="px-2">/</span>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#00aefe",
                textDecoration: "underline",
                padding: "0",
              }}
              onClick={resetPassword}
            >
              <span>Forget Password</span>
            </button>
          </div>
        </div>
        <div className="col p-2 p-lg-5">
          <div className="login-form text-start">
            <header>
              <h1>
                Log-
                <span style={{ color: "#00aefe" }}>In</span>
              </h1>
            </header>
            <Form onSubmit={handleLoginForm}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={passRef}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button className="login-btn" type="submit">
                Login
              </Button>
            </Form>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
