import "./login.css";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/auth/login/logo.svg";

function Login() {
  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-none d-lg-flex backdrop column justify-content-center">
          <img
            className="d-flex align-self-center justify-content-center"
            src={logo}
            alt=""
          />
        </div>
        <div class="container">
          <div className="column d-flex align-items-center justify-content-center my-5 py-4">
            <form className="login text-center">
              <h1 className="text-center title-text">
                <b>Welcome</b>
              </h1>
              <p className="subtitle-text text-center my-4">
                Login into your existing account
              </p>
              <label className="inputLabelText" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                className="login form-control my-2 mb-4"
                placeholder="email"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Email is required")
                }
                required
              />
              <label className="inputLabelText" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="login form-control my-2"
                placeholder="Password"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Password is required")
                }
                required
              />
              <div class="form-check mt-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label float-start terms-and-conditions-text mb-4"
                  for="flexCheckDefault"
                >
                  I agree with terms &#38; conditions
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-warning submit text-white w-100 mt-3"
              >
                Login
              </button>
              <div className="mb-4">
                <label className="forgot-password-text float-end mt-2">
                  Forgot password?
                </label>
              </div>
              <br />
              <label className="dont-have-an-account-text align-self-center">
                Don't have an Account?
                <Link className="signup-text ms-1" to="/signup">
                  Sign Up Here
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
