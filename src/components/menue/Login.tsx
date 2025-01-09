import { Box, Button, FormControl, Modal, TextField } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../reducer/userReducer";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<statusType>({
    signIn: false,
    signUp: false,
  });

  type statusType = {
    signIn: boolean;
    signUp: boolean;
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { auth, userDispatch } = useContext(AuthContext);

  if (auth.isLogin) {
    return <></>;
  }

  const signUp = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/user/register", {
        email: email,
        password: password,
      });
      console.log("ref:", email, password);

      userDispatch({
        type: "ADD_USER",
        user: {
          id: res.data.userId,
          email: email,
          password: password,
        },
      });
    } catch (e: AxiosError | any) {
      console.log(e);
      if (e.response?.status === 422) alert(e.response.data.message);
      else if (!e.response.ok) {
        throw new Error(e.response.status + "" + e.response.data.message);
      }
    }
  };
  const signIn = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/user/login", {
        email: email,
        password: password,
      });

      userDispatch({
        type: "SET_USER",
        user: res.data.user,
      });
    } catch (e: AxiosError | any) {
      console.log(e);
      if (e.response?.status === 401) alert(e.response.data.message);
      else if (!e.response.ok) {
        throw new Error(e.response.status + "" + e.response.data.message);
      }
    }
  };
  const handleSubmit = async () => {
    console.log("-----------------");
    try {
      console.log(status);
      if (status.signIn) {
        await signIn();
      } else if (status.signUp) {
        await signUp();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Button
        color="inherit"
        onClick={() => {
          handleOpen();
          setStatus({ signIn: true, signUp: false });
        }}
      >
        sign in
      </Button>
      <Button
        color="inherit"
        onClick={() => {
          handleOpen();
          setStatus({ signIn: false, signUp: true });
        }}
      >
        sign up
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl defaultValue="">
            <TextField
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
            />

            <Button
              onClick={() => {
                handleSubmit();
                handleClose();
              }}
              variant="contained"
            >
              login
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};

export default Login;
