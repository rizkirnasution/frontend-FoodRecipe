import axios from "axios";
import { Duration } from "@icholy/duration";
import qs from "qs";
import { refreshTokenActionCreator } from "../redux/action/creator/auth";
import { customHistory as history } from "../router/browserHistory";

let store;
export const injectStore = (_store) => {
  store = _store;
};

const { REACT_APP_BACKEND_URL, REACT_APP_REQUEST_TIMEOUT } = process.env;
const axiosInstance = axios.create();
const duration = new Duration(REACT_APP_REQUEST_TIMEOUT);

axiosInstance.defaults.baseURL = REACT_APP_BACKEND_URL;
axiosInstance.defaults.timeout = duration.milliseconds();
axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.paramsSerializer = (params) =>
  qs.stringify(params, {
    arrayFormat: "brackets",
  });

axiosInstance.interceptors.request.use(
  (config) => {
    const isFormDataInstance = config.data instanceof FormData;

    if (!isFormDataInstance) config.data = qs.stringify(config.data);

    const token = localStorage.getItem("@acc_token");

    if (token !== null) config.headers.common.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    const token = response.data?.data?.accessToken;

    if (token) localStorage.setItem("@acc_token", token);

    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      originalRequest.url.includes("/auth/refresh-token") &&
      // error?.response?.status === 412 &&
      (error?.response?.data.data.message === "jwt expired" || error?.response?.data?.data?.message === "Refresh token unavailable" || error?.response?.data?.data?.message === "Refresh token must be conditioned")
    ) {
      localStorage.clear();
      history.replace("/home");

      return Promise.reject();
    }

    if (
      !originalRequest.url.includes("/auth/refresh-token") &&
      // error?.response?.status === 401 &&
      (error?.response?.data.data.message === "jwt expired" || error?.response?.data?.data?.message === "Session unavailable" || error?.response?.data?.data?.message === "Bearer token must be conditioned") &&
      !originalRequest?._retry
    ) {
      try {
        await store.dispatch(refreshTokenActionCreator());

        originalRequest.headers.Authorization = `Bearer ${store.getState().auth.refreshToken?.response?.token}`;
        originalRequest._retry = true;

        return Promise.resolve(axios(originalRequest));
      } catch (errorDispatchRefreshTokenActionCreator) {
        return Promise.reject(errorDispatchRefreshTokenActionCreator);
      }
    }

    return Promise.reject(error);
  }
);

const AUTHENTICATION_PATH = "/auth";
const RECIPE_PATH = "/recipe";
const CATEGORY_PATH = "/category";
const VIDEO_PATH = "/video";
const PROFILE_PATH = "/profile";
const LIKER_PATH = "/liker";
const BOOKMARK_PATH = "/bookmark";

const queryParams = (value = {}) => {
  return {
    params: value,
  };
};

export const authRegister = async (userData = {}) => await axiosInstance.post(`${AUTHENTICATION_PATH}/register`, userData);
export const authLogin = async (userData = {}) => await axiosInstance.post(`${AUTHENTICATION_PATH}/login`, userData);
export const authRefreshToken = async () => await axiosInstance.get(`${AUTHENTICATION_PATH}/refresh-token`);
export const authLogout = async () => await axiosInstance.get(`${AUTHENTICATION_PATH}/logout`);

export const getRecipes = async (filterRecipe = {}) => {
  const isRecipeFiltered = Object.keys(filterRecipe).length;

  if (isRecipeFiltered) {
    return await axiosInstance.get(RECIPE_PATH, queryParams(filterRecipe));
  } else {
   return await axiosInstance.get(RECIPE_PATH);
  }
};
export const getRecipeById = async (recipeId = "") => await axiosInstance.get(`${RECIPE_PATH}/${recipeId}`);
export const getRecipeByUserId = async (userId = "") => await axiosInstance.get(`${RECIPE_PATH}/user/${userId}`);
export const postRecipe = async (recipeData = {}) => await axiosInstance.post(RECIPE_PATH, recipeData);
export const putRecipe = async (recipeId = "", recipeData = {}) => await axiosInstance.put(`${RECIPE_PATH}/${recipeId}`, recipeData);
export const deleteRecipe = async (recipeId = "") => await axiosInstance.delete(`${RECIPE_PATH}/${recipeId}`);

export const getCategories = async () => await axiosInstance.get(CATEGORY_PATH);

export const postVideo = async (videoData = {}) => await axiosInstance.post(VIDEO_PATH, videoData);
export const putVideo = async (videoId = "", videoData = {}) => await axiosInstance.put(`${VIDEO_PATH}/${videoId}`, videoData);
export const deleteVideo = async (videoId = "") => await axiosInstance.delete(`${VIDEO_PATH}/${videoId}`);

export const fetchProfile = async () => await axiosInstance.get(PROFILE_PATH);
export const updateProfile = async (profileId = "", profileData = {}) => await axiosInstance.put(`${PROFILE_PATH}/${profileId}`, profileData);

export const getLikers = async (filterLiker = {}) => {
  const isLikerFiltered = Object.keys(filterLiker).length;

  if (isLikerFiltered) {
    return await axiosInstance.get(LIKER_PATH, queryParams(filterLiker));
  } else {
    return await axiosInstance.get(LIKER_PATH);
  }
};
export const getLikerByUserId = async (userId = "") => await axiosInstance.get(`${LIKER_PATH}/user/${userId}`);
export const postLiker = async (likerData = {}) => await axiosInstance.post(LIKER_PATH, likerData);
export const deleteLiker = async (likerId = "") => await axiosInstance.delete(`${LIKER_PATH}/${likerId}`);

export const getBookmarkers = async (filterBookmark = {}) => {
  const isBookmarkFiltered = Object.keys(filterBookmark).length;

  if (isBookmarkFiltered) {
    return await axiosInstance.get(BOOKMARK_PATH, queryParams(filterBookmark));
  } else {
    return await axiosInstance.get(BOOKMARK_PATH);
  }
};
export const getBookmarkByUserId = async (userId = "") => await axiosInstance.get(`${BOOKMARK_PATH}/user/${userId}`);
export const postBookmark = async (bookmarkData = {}) => await axiosInstance.post(BOOKMARK_PATH, bookmarkData);
export const deleteBookmark = async (bookmarkId = "") => await axiosInstance.delete(`${BOOKMARK_PATH}/${bookmarkId}`);
