import "./login.css";
import React, { Fragment, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import logo from "../../assets/auth/login/logo.svg";
import { loginActionCreator } from "../../redux/action/creator/auth";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useDidUpdate } from "../../custom-hooks/common";
import { signInModel } from "../../utils/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const { REACT_APP_NAME } = process.env;

const Login = () => {
  const [searchParams] = useSearchParams();
  const auth = useSelector((state) => state.auth, shallowEqual);
  const registerState = useSelector((state) => state.register, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInModel),
  });
  const onSubmit = (value) => {
    dispatch(loginActionCreator(value));
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

    if (auth.login?.isPending) {
      toast.dismiss();

      toastId.current = toast.loading("Loading...", toastOptions);
    }

    if (auth.login?.isRejected) {
      toast.dismiss();

      toastId.current = toast.error(auth.login?.errorMessage, toastOptions);
    }

    if (auth.login?.isFulfilled) {
      toast.dismiss();

      toastId.current = toast.success("Login success!", toastOptions);

      navigate("/home");
    }

    if (auth.register?.isFulfilled) {
      toast.dismiss();

      toastId.current = toast.success("Account activation succeed, Please login to continue", toastOptions);
    }

    if (errors.email) {
      toast.dismiss(toastId.current);

      toast.error(`Email: ${errors.email?.message}`, toastOptions);
    }

    if (errors.password) {
      toast.dismiss(toastId.current);

      toast.error(`Password: ${errors.password?.message}`, toastOptions);
    }
  }, [auth, errors]);

  return (
    <Fragment>
      <Helmet>
        <title>{REACT_APP_NAME} - Login</title>
      </Helmet>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-none d-lg-flex backdrop-login column justify-content-center">
          <img className="d-flex align-self-center justify-content-center" src={logo} alt="Logo" />
        </div>
        <div className="container">
          <div className="column d-flex align-items-center justify-content-center my-5 py-4">
            <form className="login text-center" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-center title-text">
                <b>Welcome</b>
              </h1>
              <p className="subtitle-text text-center my-4">Login into your existing account</p>
              <label className="inputLabelText" htmlFor="email">
                E-mail
              </label>
              <input type="email" name="email" className="login form-control my-2 mb-4" disabled={auth.login?.isPending} placeholder="email" {...register("email")} />
              <label className="inputLabelText" htmlFor="password">
                Password
              </label>
              <input type="password" name="password" className="login form-control my-2" disabled={auth.login?.isPending} placeholder="Password" {...register("password")} />
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" required />
                <label className="form-check-label float-start terms-and-conditions-text mb-4" htmlFor="flexCheckDefault">
                  I agree with terms &#38; conditions
                </label>
              </div>
              <button type="submit" className="btn btn-warning submit text-white w-100 mt-3" disabled={auth.login?.isPending}>
                Login
              </button>
              <div className="mb-4">
                <label className="float-end mt-2">
                  <Link className="forgot-password-text " to="/forgot-password">
                    Forgot password?
                  </Link>
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

export default Login;
