import "./login.css";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/auth/login/logo.svg";
import {
  loginActionCreator,
  loginCreatorAction,
} from "../../redux/action/creator/auth";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useDidUpdate } from "../../custom-hooks/common";
import Swal from "sweetalert2";
import { ErrorMessage, withFormik } from "formik";
import { signInModel } from "../../utils/schema";

const { REACT_APP_NAME } = process.env;

const LoginWithFormikProps = ({
  errors,
  values,
  handleChange,
  handleSubmit,
}) => {
  const auth = useSelector((state) => state.auth, shallowEqual);

  useDidUpdate(() => {
    if (auth.login?.isRejected) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: auth.login?.errorMessage,
      });
    }
    if (auth.login?.isFulfilled && auth.login?.response?.role !== "creator") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Access denied, you're not creator",
      });
    }
    if (auth.login?.isFulfilled) {
      Swal.fire({
        icon: "success",
        title: "Yeah!",
        text: "Login success!",
      });
    }
  }, [auth]);

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-none d-lg-flex backdrop-login column justify-content-center">
          <img
            className="d-flex align-self-center justify-content-center"
            src={logo}
            alt=""
          />
        </div>
        <div class="container">
          <div className="column d-flex align-items-center justify-content-center my-5 py-4">
            <form className="login text-center" onSubmit={handleSubmit}>
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
                disabled={auth.login?.isPending}
                value={values.email}
                onChange={handleChange("email")}
                placeholder="email"
                onInvalid={(e) =>
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: <ErrorMessage name="email" />,
                  })
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
                disabled={auth.login?.isPending}
                value={values.password}
                onChange={handleChange("password")}
                placeholder="Password"
                onInvalid={(e) =>
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errors.password ? (
                      <ErrorMessage name="password" />
                    ) : (
                      ""
                    ),
                  })
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
                disabled={auth.login?.isPending}
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
};

const LoginWithFormik = withFormik({
  validationSchema: signInModel,
  displayName: "LoginForm",
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.callback(values);
    setSubmitting(false);
  },
  validateOnBlur: false,
  validateOnChange: false,
})(LoginWithFormikProps);

const Login = () => {
  const dispatch = useDispatch();

  return (
    <LoginWithFormik
      callback={(values) => dispatch(loginActionCreator(values))}
    />
  );
};

export default Login;
