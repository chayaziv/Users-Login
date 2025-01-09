import { useReducer } from "react";
import userReducer, { AuthContext, initialState } from "../reducer/userReducer";
import { AppBar, Box, Toolbar } from "@mui/material";
import Login from "./Login";
import Avatar from "./Avatar";
import Edit from "./Edit";

const User=()=>{

    const [auth, userDispatch] = useReducer(userReducer, initialState);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <AuthContext.Provider value={{ auth, userDispatch }}>
              <Login></Login>
              <Avatar></Avatar>
              <Edit></Edit>
            </AuthContext.Provider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default User;
