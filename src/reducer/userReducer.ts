import { createContext, Dispatch } from "react";

export type UserType = {
  id: number;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  isLogin?: boolean;
};

type Action =
  | {
      type: "ADD_USER";
      data: Omit<UserType, "id" | "email" | "address" | "phone">;
    }
  | {
      type: "UPDATE_USER";
      data: Partial<UserType> & { id: number };
    }
  | {
      type: "DELETE_USER";
      id: number;
    };

export const emptyUser: UserType = {
  id: 0,
  name: "",
  email: "",
  password: "",
  address: "",
  phone: "",
  isLogin: false,
};

export const UserContext = createContext<{
  user: UserType;
  userDispatch: Dispatch<Action>;
}>({
  user: emptyUser,
  userDispatch: () => null,
});

let identity = 1;

export default (state: UserType, action: Action): UserType => {
  switch (action.type) {
    case "ADD_USER":
      if (action.data.name != state.name) {
        return { ...emptyUser, ...action.data, id: identity++ };
      } else {
        return { ...state, ...action.data, id: identity++ };
      }
    case "DELETE_USER":
      return { ...state, isLogin: false };
    case "UPDATE_USER":
      return { ...state, ...action.data };
    default:
      return state;
  }
};
