import "./signup.css";
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/auth/login/logo.svg";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { signUpModel } from "../../utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerActionCreator } from "../../redux/action/creator/auth";
import { useDidUpdate } from "../../custom-hooks/common";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const { REACT_APP_NAME } = process.env;

function Signup() {
  const auth = useSelector((state) => state.auth, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpModel),
  });
  const onSubmit = (value) => {
    dispatch(registerActionCreator(value));
  };
  const toastId = React.useRef(null);

  useDidUpdate(() => {
    const toastOptions = {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };

    if (auth.register?.isPending) {
      toast.dismiss();

      toastId.current = toast.loading("Loading...", toastOptions);
    }

    if (auth.register?.isRejected) {
      toast.dismiss();

      toastId.current = toast.error(auth.register?.errorMessage, toastOptions);
    }

    if (auth.register?.isFulfilled) {
      toast.dismiss();

      toastId.current = toast.success("Register success!", toastOptions);

      navigate("/login");
    }

    if (errors.name) {
      toast.dismiss(toastId.current);

      toast.error(`Name: ${errors.name?.message}`, toastOptions);
    }

    if (errors.email) {
      toast.dismiss(toastId.current);

      toast.error(`Email: ${errors.email?.message}`, toastOptions);
    }

    if (errors.phone) {
      toast.dismiss(toastId.current);

      toast.error(`Phone: ${errors.phone?.message}`, toastOptions);
    }

    if (errors.password) {
      toast.dismiss(toastId.current);

      toast.error(`Password: ${errors.password?.message}`, toastOptions);
    }

    if (errors.repeatPassword) {
      toast.dismiss(toastId.current);

      toast.error(
        `Confirm Password: ${errors.repeatPassword?.message}`,
        toastOptions
      );
    }
  }, [auth, errors]);

  return (
    <Fragment>
      <Helmet>
        <title>{REACT_APP_NAME} - Sign Up</title>
      </Helmet>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-none d-lg-flex backdrop-signup column justify-content-center">
          <img
            className="d-flex align-self-center justify-content-center"
            src={logo}
            alt=""
          />
        </div>
        <div class="container">
          <div className="column d-flex align-items-center justify-content-center my-5 py-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="signup text-center"
            >
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
                disabled={auth.register?.isPending}
                {...register("name")}
              />
              <label className="inputLabelText" htmlFor="email">
                E-mail
              </label>
              <input
                type="text"
                name="email"
                className="signup form-control my-2 mb-3"
                placeholder="Enter email address"
                disabled={auth.register?.isPending}
                {...register("email")}
              />
              <label className="inputLabelText" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                className="signup form-control my-2 mb-3"
                placeholder="08xxxxxxxxxx"
                disabled={auth.register?.isPending}
                {...register("phone")}
              />
              <label className="inputLabelText" htmlFor="password">
                Create New Password
              </label>
              <input
                type="password"
                name="password"
                className="signup form-control my-2 mb-3"
                placeholder="Create new password"
                disabled={auth.register?.isPending}
                {...register("password")}
              />
              <label className="inputLabelText" htmlFor="password">
                Confirm Password
              </label>
              <input
                type="password"
                name="repeatPassword"
                className="signup form-control my-2"
                placeholder="Confirm new password"
                disabled={auth.register?.isPending}
                {...register("repeatPassword")}
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
