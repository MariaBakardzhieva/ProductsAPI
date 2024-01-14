import Axios, { AxiosRequestConfig } from "axios";
import { Credentials, SignUp, Update } from "../store/types/types";

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "POST",
    url: "https://api.escuelajs.co/api/v1/auth/login",
    data,
  };
  try {
    const { data: response } = await Axios.request(requestConfig);
    localStorage.setItem("auth", response.access_token);
  } catch (e: any) {
    console.error(e);
    return { error: e.response.data.message };
  }
};

export const onSignUp = async (data: SignUp) => {
  const requestConfig: AxiosRequestConfig = {
    method: "POST",
    url: "https://api.escuelajs.co/api/v1/users/",
    data,
  };

  try {
    const { data: response } = await Axios.request(requestConfig);
    return response;
  } catch (e: any) {
    console.error(e);
    return { error: e.response.data.message };
  }
};

export const onUpdate = async (data: Update, id: string | undefined) => {
  const requestConfig: AxiosRequestConfig = {
    method: "PUT",
    url: `https://api.escuelajs.co/api/v1/users/${id}`,
    data,
  };

  try {
    const { data: response } = await Axios.request(requestConfig);
    return response;
  } catch (e: any) {
    console.error(e);
    return { error: e.response.data.message };
  }
};

export const getUser = async () => {
  const requestConfig: AxiosRequestConfig = {
    method: "GET",
    url: "https://api.escuelajs.co/api/v1/auth/profile",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
    },
  };

  try {
    const { data: response } = await Axios.request(requestConfig);
    return response;
  } catch (e: any) {
    console.error(e);
    return { error: e.response.data.message };
  }
};
