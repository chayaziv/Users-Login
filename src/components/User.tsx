import { useReducer } from "react";
import userReducer, { AuthContext, initialState } from "../reducer/userReducer";
import Login from "./Login";
import Avatar from "./Avatar";
import Edit from "./Edit";

const User = () => {
  const [auth, userDispatch] = useReducer(userReducer, initialState);

  return (
    <>
      <AuthContext.Provider value={{ auth, userDispatch }}>
        <Login></Login>
        <Avatar></Avatar>
        <Edit></Edit>
      </AuthContext.Provider>
    </>
  );
};
export default User;
