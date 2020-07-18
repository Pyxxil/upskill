import axios, { AxiosPromise } from "axios";

import { User } from "../App";

/**
 * This action will attempt to retrieve a currently logged in user, based on the credentials present in the cookies.
 */
export function fetchCurrentUser() {
  var promise: AxiosPromise = axios({
    method: "get",
    withCredentials: true,
    url: process.env.REACT_APP_SERVER_IP + "/user/current-user",
  });
  return promise;
}

/**
 * This action will attempt to log out the currently logged in user.
 */
export async function loginUser(
  email: string | undefined,
  password: string | undefined
) {
  // Should send a login request to the server.
  var promise: AxiosPromise = axios({
    method: "post",
    withCredentials: true,
    url: process.env.REACT_APP_SERVER_IP + "/user/login",
    data: {
      email: email,
      password: password,
    },
  });
  return promise;
}

/**
 * This action will attempt to log out the currently logged in user.
 */
export async function logoutCurrentUser() {
  var promise: AxiosPromise = axios({
    method: "post",
    withCredentials: true,
    url: process.env.REACT_APP_SERVER_IP + "/user/logout",
  });
  return promise;
}

/**
 * This action will try to register a new user.
 */
export async function registerUser(
  name: string | undefined,
  email: string | undefined,
  password: string | undefined
) {
  var promise: AxiosPromise = axios({
    method: "post",
    url: process.env.REACT_APP_SERVER_IP + "/user/register",
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return promise;
}

/**
 * This action will try to update the current user that is authenticated.
 */
export async function updateCurrentUser(update: User | null | undefined) {
  var promise: AxiosPromise = axios({
    method: "post",
    withCredentials: true,
    url: process.env.REACT_APP_SERVER_IP + "/user/current-user",
    data: update,
  });
  return promise;
}
