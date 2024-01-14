import { ActionTypes } from "../constants/action-types";
import { Credentials, SignUp, Update } from "../types/types";

export const setUser = (user: Credentials) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};

export const createUser = (newUser: SignUp) => {
  return {
    type: ActionTypes.CREATE_USER,
    payload: newUser,
  };
};

export const updateUser = (update: Update) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: update,
  };
};
