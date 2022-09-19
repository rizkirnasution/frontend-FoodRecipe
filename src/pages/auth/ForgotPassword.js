import "./forgotpassword.css";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/auth/login/logo.svg";

function ForgotPassword() {
  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-none d-lg-flex backdrop-forgot-password column justify-content-center">
          <img
            className="d-flex align-self-center justify-content-center"
            src={logo}
            alt=""
          />
        </div>
        <div class="container">
          <div className="column d-flex align-items-center justify-content-center my-5 py-4">
            <form className="forgot-password text-center">
              <h1 className="text-center title-text">
                <b>Forgot Password?</b>
              </h1>
              <p className="subtitle-text text-center my-4">
                We just need your registered E-mail <br /> to send your password
                resend
              </p>
              <label className="inputLabelText" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                className=" forgot-password form-control justify-content-center my-3 mb-4"
                placeholder="examplexxx@mail.com"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Email is required")
                }
                required
              />

              <button
                type="submit"
                className="btn btn-warning submit text-white w-100 "
              >
                Send E-mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ForgotPassword;
