import axios from "axios";
import swal from "sweetalert2";
import { ActionTypes } from "../constants/action-types";

export const loginUser = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.USER_LOGIN_PENDING });
    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/users/login`,
      dataForm
    );

    const payloads = result.data.data;
    const { email, role, token, refreshToken } = payloads;
    const payload = {
      email: email,
      role: role,
    };
    console.log(payload);

    localStorage.setItem("payloads", payloads);
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
    dispatch({
      type: ActionTypes.USER_LOGIN_SUCCESS,
      payload: payloads,
    });

    swal.fire({
      icon: "success",
      title: "Success!",
      text: result.data.message,
    });
    navigate("/home");
  } catch (error) {
    swal.fire({
      icon: "error",
      title: "Oops... :((",
      text: error.response.data.message,
    });
    console.log(error);
  }
};

export const signUp = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.USER_REGISTER_PENDING });
    const result = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}/users/register`,
      dataForm
    );
    const user = result.data.data;

    localStorage.setItem("token", user.token);
    localStorage.setItem("refreshToken", user.refreshToken);
    dispatch({ type: ActionTypes.USER_REGISTER_SUCCESS, payload: user });

    swal.fire({
      icon: "success",
      title: "Congratulations",
      text: result.data.message,
    });
    navigate("/login");
  } catch (error) {
    swal.fire({
      icon: "error",
      title: "Oops... :((",
      text: error.response.data.message,
    });
    console.log(error);
  }
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.CLEAR_RECIPE,
    });

    dispatch({
      type: ActionTypes.SIGN_OUT,
    });
  };
};

export const updateUser = (users) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: users,
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: ActionTypes.USER_LOADED,
        token,
      });
    } else return null;
  };
};
