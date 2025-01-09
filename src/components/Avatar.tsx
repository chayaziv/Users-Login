import { useContext } from "react";
import { AuthContext } from "../reducer/userReducer";
import {
 
  Button,
  Avatar as MuiAvatar,
  Tooltip,
  Typography,
} from "@mui/material";

const AvatarComponent = () => {
  const { auth, userDispatch } = useContext(AuthContext);
  const firstletter = auth.user.firstName.charAt(0).toUpperCase();
  console.log(auth.user);
  const stringToColor = (string: string) => {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  if (!auth.isLogin) {
    return <></>;
  }

  return (
    <>
      <Tooltip title={auth.user.firstName} arrow>
        <MuiAvatar
          sx={{
            bgcolor: stringToColor(auth.user.firstName + auth.user.lastName),
            mr: 2,
          }}
        >
          {firstletter}
        </MuiAvatar>
      </Tooltip>

      <Typography sx={{ flexGrow: 1 }}>{auth.user.firstName}</Typography>

      <Button
        color="inherit"
        onClick={() =>
          userDispatch({
            type: "DELETE_USER",
            id: auth.user.id,
          })
        }
      >
        Logout
      </Button>
    </>
  );
};

export default AvatarComponent;
