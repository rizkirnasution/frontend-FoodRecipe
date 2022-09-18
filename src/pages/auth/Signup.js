import "./signup.css";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/auth/login/logo.svg";

function Signup() {
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
            <form className="signup text-center">
              <h1 className="text-center title-text">
                <b>Let's Get Started!</b>
              </h1>
              <p className="subtitle-text text-center my-4">
                Create new account to access all features
              </p>
              <label className="inputLabelText" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="signup form-control my-2 mb-3"
                placeholder="Name"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Name is required")
                }
                required
              />
              <label className="inputLabelText" htmlFor="email">
                E-mail
              </label>
              <input
                type="text"
                name="email"
                className="signup form-control my-2 mb-3"
                placeholder="Enter email address"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Email is required")
                }
                required
              />
              <label className="inputLabelText" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="number"
                name="phoneNumber"
                className="signup form-control my-2 mb-3"
                placeholder="08xxxxxxxxxx"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Phone number is required")
                }
                required
              />
              <label className="inputLabelText" htmlFor="password">
                Create New Password
              </label>
              <input
                type="password"
                name="password"
                className="signup form-control my-2 mb-3"
                placeholder="Create new password"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Password is required")
                }
                required
              />
              <label className="inputLabelText" htmlFor="password">
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                className="signup form-control my-2"
                placeholder="Confirm new password"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Confirm password is required")
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
                Sign Up
              </button>
              <br />
              <label className="have-an-account-text align-self-center mt-4">
                Already have an account?
                <Link className="login-text ms-1" to="/login">
                  Login Here
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Signup;
