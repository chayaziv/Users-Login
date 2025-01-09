import { useReducer } from "react";
import userReducer, { AuthContext, initialState } from "../reducer/userReducer";
import Login from "../components/Login";
import Avatar from "../components/Avatar";
import Edit from "../components/Edit";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";

function Header() {
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

export default Header;
