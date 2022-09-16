import { ActionTypes } from "../constants/action-types";

const initialState = {
  user: {
    name: "",
    email: "",
    role: "",
    password: "",
  },
  isLoading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case ActionTypes.USER_REGISTER_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case ActionTypes.SIGN_OUT:
      localStorage.removeItem("token");
      return {
        id: null,
        name: null,
        email: null,
        token: null,
      };
    default:
      return state;
  }
};
