import React from "react";
import "./Login.css";
import loginImg from "../../images/sigin-up/login-banner.jpg";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
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
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button className="login-btn" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
