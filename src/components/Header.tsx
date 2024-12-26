import { useReducer } from "react";
import userReducer, { UserContext, emptyUser } from "../reducer/userReducer";
import Login from "../components/Login";
import Avatar from "../components/Avatar";
import Edit from "../components/Edit";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";

function Header() {
  const [user, userDispatch] = useReducer(userReducer, emptyUser);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <UserContext.Provider value={{ user, userDispatch }}>
              <>
                {!user.isLogin && <Login></Login>}
                {user.isLogin && <Avatar></Avatar>}
                {user.isLogin && <Edit></Edit>}
              </>
            </UserContext.Provider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;