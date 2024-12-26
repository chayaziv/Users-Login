import { useContext } from "react";
import { UserContext } from "../reducer/userReducer";
import { Button, Avatar as MuiAvatar, Typography } from "@mui/material";

const AvatarComponent = () => {
  const { user, userDispatch } = useContext(UserContext);
  const firstletter = user.name.charAt(0).toUpperCase();
  console.log(user);
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
  return (
    <>
      <MuiAvatar sx={{ bgcolor: stringToColor(user.name + user.name), mr: 2 }}>
        {firstletter}
      </MuiAvatar>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Hello {user.name}
      </Typography>

      <Button
        color="inherit"
        onClick={() =>
          userDispatch({
            type: "DELETE_USER",
            id: user.id,
          })
        }
      >
        Logout
      </Button>
    </>
  );
};

export default AvatarComponent;
