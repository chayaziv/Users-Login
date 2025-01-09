import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import User from "./User";
import Menue from "./Menu";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <User />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Menue />
          </Toolbar>
        </AppBar>
      </Box>
     
    </>
  );
};

export default Header;
